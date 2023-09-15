<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Spaces;
use App\Models\Followers;
use App\Models\Status;
use App\Models\ForumReply;
use App\Models\ForumTopic;
use App\Models\Avatar;
use App\Models\ForumThread;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\DiffUsername;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Endpoints\RenderController;
use App\Http\Middleware\SiteSettingChecker;
use App\Models\Item;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use App\Services\BBCodeService;
use JBBCode\Parser;
use JBBCode\DefaultCodeDefinitionSet;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;



 
class GrabController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function WelcomeIndex()
    {
        $uc = User::count();

        return inertia('Welcome', [
            'UserCount' => $uc,
        ]);
    }
    public function DashboardIndex()
    {

        $statuses = Status::where([
            ['creator_id', '!=', Auth::user()->id],
            ['message', '!=', null]
        ])->orderBy('created_at', 'desc')->paginate(2)->through(function ($status) {
            return [
                'name' => $status->creator->username,
                'dname' => $status->creator->display_name,
                'timecreated' => $status->created_at,
                'message' => $status->message,
                'DateHum' => $status->DateHum,
            ];
        });

        return inertia('Dashboard', [
            'slist' => $statuses,
        ]);
    }

    public function DashboardVal(Request $request)
    {
        $this->validate($request, [
            'message' => ['max:124']
        ]);

        if ($request->message != Auth::user()->latestStatus()) {
            // Logging
            $status = new Status;
            $status->creator_id = Auth::user()->id;
            $status->message = $request->message;
            $status->save();
            $user = User::where('id', '=', Auth::user()->id)->first();
            $user->status = $request->message;
            $user->save();
        }

        return back()->with('message', 'Status has been changed.');
    }

    public function UserIndex()
    {
        $users = User::orderBy('updated_at', 'desc')->paginate(10)->through(function ($user) {
            return [
                'id' => $user->id,
                'username' => $user->username,
                'dname' => $user->display_name,
                'staff' => $user->staff,
                'status' => $user->status,
                'DateHum' => $user->DateHum,
		'avatar' => $user->headshot(),
                'online' => $user->online(),

            ];
        });

        return inertia('Users/Index', [
            'users' => $users,
        ]);
    }

    public function ProfileIndex($username)
    {
        $user = User::where('username', '=', $username);

        //if (!$user->exists()) {
          //  $usernameHistory = DiffUsername::where('username', '=', $username);

            //if (!$usernameHistory->exists()) abort(404);

            //return redirect()->route('user.profile', $usernameHistory->first()->user->username);
        //}

        $user = $user->first();
       //  $spaces = $user->spaces()->take(6);
        $joindate = Carbon::parse($user->created_at)->format('M d Y');
        $user->joindate = str_replace(" ‐", ",", $joindate);
	$user->loadCount(['followers', 'following', 'posts']);
	$following = $user->following()->get();
	$followers = $user->followers()->get();
	$AuthUserId = Auth::user();
	$isFollowing = $user->isFollowing($AuthUserId);
	$thisFollowing = Auth::user()->isFollowing($user);
	//dd($isFollowing);

        return inertia('Users/Profile', [
            'user' => $user,
	    'user.avatar' => $user->thumbnail(),
	    'user.followsYou' => $isFollowing,
	    'joindate' => $user->joindate,
            //'user.spaces' => $spaces,
	    'user.followers_count' => $user->following_count,
        'user.following_count' => $user->followers_count,
	    'user.following' => $following,
        'is_following' => $thisFollowing,
	    'user.followers' => $followers,
        'user.posts' => $user->posts_count,
        ]);
    }
    public function StoreIndex()
    {
        $categories = config('ItemCategories');

        return inertia('Store/Index', [
            //'item' => $items,
            'categories' => $categories,
            //'event' => $getEvents
        ]);
    }
    public function StoreItem($id)
    {
        $item = Item::where('id', '=', $id)->first();

        $recomendations = Item::where([
            ['id', '!=', $item->id],
            ['public_view', '=', true],
            ['status', '=', 'approved'],
            ['creator_id', '=', $item->creator->id]
        ])->take(6)->inRandomOrder()->get();

        return inertia('Store/Item', [
            'item' => $item,
            'item.creator' => $item->creator,
            'item.reccomendations' => $recomendations
        ]);
    }

public function customizeIndex()
{
    $colors = config('avatar_colors'); // Assuming you've defined the colors in a config file.

    return inertia('Customize/Index', [
        'avatar' => Auth::user()->avatar(),
        'avatar.thumbnail' => Auth::user()->thumbnail(),
        'colors' => $colors,
    ]);
}

public function regenerate($request)
{
$newVrcInstance = new RenderController();
$vrs = $newVrcInstance;
$vrs->UserRender($request, Auth::user()->id);

}
public function UpdateAvatar(Request $request)
{
    $avatar = Auth::user()->avatar();

    switch ($request->action) {
	case 'reset':
	$avatar->reset();
	return $this->regenerate($request);
        case 'wear':
            $item = Item::find($request->id);

            if (!$item) {
                return response()->json(['error' => 'Invalid item.']);
            }

            $item = $item->first();
            $column = ($item->type == 'hat') ? 'hat_1' : $item->type;

            if (!Auth::user()->ownsItem($item->id)) {
                return response()->json(['error' => 'You do not own this item.']);
            }

            if ($item->status !== 'approved') {
                return response()->json(['error' => 'This item is not approved.']);
            }

            if ($item->type === 'hat') {
                if (!$avatar->hat_1) {
                    $column = 'hat_1';
                } elseif (!$avatar->hat_2) {
                    $column = 'hat_2';
                } elseif (!$avatar->hat_3) {
                    $column = 'hat_3';
                }
            }

            $avatar->$column = $item->id;
            $avatar->save();

            return $this->regenerate($request);

        case 'remove':
            $validTypes = ['hat_1', 'hat_2', 'hat_3', 'head', 'face', 'gadget', 'tshirt', 'shirt', 'pants'];

            if (!in_array($request->type, $validTypes)) {
                return response()->json(['error' => 'Invalid type.']);
            }

            $avatar->{$request->type} = null;
            $avatar->save();

            return $this->regenerate($request);
	    case 'color':
	$colors = config('avatar_colors'); // Fetch colors from the configuration file

$validBodyParts = ['head', 'torso', 'left_arm', 'right_arm', 'left_leg', 'right_leg'];

if (!in_array($request->body_part, $validBodyParts)) {
    return response()->json(['error' => 'Invalid body part.']);
}


// Check if the requested color exists in the $colors array
if (!in_array($request->color, $colors)) {
    return response()->json(['error' => 'Invalid color.']);
}

// Check if the avatar's current color for the specified body part matches the requested color
if ($avatar->{"color_{$request->body_part}"} == $request->color) {
    return $this->thumbnails($request);
}

// Update the avatar's color for the specified body part
$avatar->{"color_{$request->body_part}"} = $request->color;
$avatar->save();

return $this->regenerate($request);


        default:
            return response()->json(['error' => 'Invalid action.']);
    }
}

    public function ForumIndex($id)
    {
        // Official
        $section_one = ForumTopic::where([['is_staff_only_viewing', false], ['section_id', 1]])->orderBy('id', 'ASC')->get();

        if (Auth::check() && Auth::user()->staff == 1)
            $section_one = ForumTopic::where([['section_id', 1]])->orderBy('id', 'ASC')->get();

        // Community
        $section_two = ForumTopic::where([['is_staff_only_viewing', false], ['section_id', 2]])->orderBy('id', 'ASC')->get();

        if (Auth::check() && Auth::user()->staff == 1)
            $section_two = ForumTopic::where([['section_id', 2], ['hidden', false]])->orderBy('id', 'ASC')->get();

        // Serious
        $section_three = ForumTopic::where([['is_staff_only_viewing', false], ['hidden', false], ['section_id', 3]])->orderBy('id', 'ASC')->get();

        if (Auth::check() && Auth::user()->staff == 1)
            $section_three = ForumTopic::where([['section_id', 3]])->orderBy('id', 'ASC')->get();

        // Posting
        $topic = ForumTopic::where('id', '=', $id)->firstOrFail();

        if (!Auth::check() || !Auth::user()->staff == 1 && $topic->is_staff_only_viewing) abort(403);

        $posts = $topic->threads()->through(function ($post) {
            return [
                'id' => $post->id,
                'topic_id' => $post->id,
                'seo' => $post->slug(),
                'name' => $post->title,
                'username' => $post->creator->username,
                'display_name' => $post->creator->display_name,
                'message' => $post->body,
                'pinned' => $post->is_pinned,
                'locked' => $post->is_locked,
                'deleted' => $post->is_deleted,
                'DateHum' => $post->DateHum,
            ];
        });

        return inertia('Forum/Index', [
            'topic' => $topic,
            'posts' => $posts,
            'section_one' => $section_one,
            'section_two' => $section_two,
            'section_three' => $section_three
        ]);
    }

    public function ForumPost($id, $slug, BBCodeService $bbcodeService)
    {
        // Official
        $section_one = ForumTopic::where([['is_staff_only_viewing', false], ['section_id', 1]])->orderBy('id', 'ASC')->get();

        if (Auth::check() && Auth::user()->staff == 1)
            $section_one = ForumTopic::where([['section_id', 1]])->orderBy('id', 'ASC')->get();

        // Community
        $section_two = ForumTopic::where([['is_staff_only_viewing', false], ['section_id', 2]])->orderBy('id', 'ASC')->get();

        if (Auth::check() && Auth::user()->staff == 1)
            $section_two = ForumTopic::where([['section_id', 2], ['hidden', false]])->orderBy('id', 'ASC')->get();

        // Serious
        $section_three = ForumTopic::where([['is_staff_only_viewing', false], ['hidden', false], ['section_id', 3]])->orderBy('id', 'ASC')->get();

        if (Auth::check() && Auth::user()->staff == 1)
            $section_three = ForumTopic::where([['section_id', 3]])->orderBy('id', 'ASC')->get();

        // Posting
        $postval = ForumThread::where('id', '=', $id)->first();
        $posts = ForumThread::where('id', '=', $id)->firstOrFail();
        $topic = ForumTopic::where('id', '=', $postval->in_topic_id)->first();

        $posts->body = $bbcodeService->parse($posts->body);

        if ($slug != $postval->slug() || !Auth::check() || !Auth::user()->staff == 1 && $topic->is_staff_only_viewing || $postval->is_deleted) abort(404);

        return inertia('Forum/Post', [
            'topic' => $topic,
            'post' => $posts,
            'post.creator' => $posts->creator,
            'section_one' => $section_one,
            'section_two' => $section_two,
            'section_three' => $section_three
        ]);
    }

    public function ForumCreate($id)
    {

        $topic = ForumTopic::where('id', '=', $id)->firstOrFail();

        if (!Auth::check() || !Auth::user()->staff == 1 && $topic->is_staff_only_posting) abort(403);

        return inertia('Forum/Create', [
            'topic' => $topic,
        ]);
    }

    public function ForumVal($id, Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'max:100'],
            'body' => ['required', 'min:3', 'max:7500']
        ]);

        $title = $validatedData['title'];
        $body = $validatedData['body'];

        // Apply BBCode parsing
        $parser = new Parser();
        $parser->addCodeDefinitionSet(new DefaultCodeDefinitionSet());
        $parsedBody = $parser->parse($body)->getAsHTML();


        $post = new ForumThread;
        $post->in_topic_id = $id;
        $post->creator_id = Auth::user()->id;
        $post->title = $title;
        $post->body = $parsedBody;
        $post->save();

        return Redirect::route('forum.post', $post->id, $post->slug())->with('message', 'Your post has been created.');
    }

    public function ForumReply($id, Request $request)
    {
        $validatedData = $request->validate([
            'body' => ['required', 'min:3', 'max:7500']
        ]);

        $body = $validatedData['body'];

        // Apply BBCode parsing
        $parser = new Parser();
        $parser->addCodeDefinitionSet(new DefaultCodeDefinitionSet());
        $parsedBody = $parser->parse($body)->getAsHTML();


        $post = new ForumReply;
        $post->thread_id = $id;
        $post->creator_id = Auth::user()->id;
        $post->body = $parsedBody;
        $post->save();

        return redirect()->back()->with('message', 'Your post has been created.');
    }
    public function IndexingIndex()
    {
        //
    }
}
