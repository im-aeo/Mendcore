<?php
namespace App\Http\Controllers\Endpoints;

use App\Models\Item;
use App\Models\User;
<<<<<<< HEAD
use App\Models\Space;
=======
use App\Models\Spaces;
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchSiteController extends Controller
{
    public function all(Request $request)
    {
        $search = $request->input('search');

        if (Str::startsWith($search, '%')) {
            $search = '';
        }

        $users = User::where('username', 'LIKE', "%{$search}%")->get();
        $items = Item::where('name', 'LIKE', "%{$search}%")->get();
<<<<<<< HEAD
        $spaces = Space::where('name', 'LIKE', "%{$search}%")->get();

        $results = $users->merge($items)->merge($spaces);
=======
        //$spaces = Spaces::where('name', 'LIKE', "%{$search}%")->get();

        $results = $users->merge($items);//->merge($spaces);
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

        if ($results->count() === 0 || !$search) {
            return response()->json([]);
        }

        $json['results'] = [];

        foreach ($results as $result) {
            switch ($result->getTable()) {
                case 'users':
                    $name = $result->username;
                    $image = $result->headshot();
                    $url = route('user.profile', $result->username);
                    break;

                case 'items':
                    $name = $result->name;
                    $image = $result->thumbnail();
                    $url = route('catalog.item', [$result->id, $result->slug()]);
                    break;
<<<<<<< HEAD
                    
                case 'spaces':
                    $name = $result->name;
                    $image = $result->thumbnail();
                    $url = route('spaces.view', [$result->id, $result->slug()]);
                    break;
                   
=======
                    /*
                case 'spaces':
                    $name = $result->name;
                    $image = $result->thumbnail();
                    $url = route('groups.view', [$result->id, $result->slug()]);
                    break;
                    */
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                default:
                    continue 2;
            }

            $json['results'][] = [
                'name' => $name,
                'image' => $image,
                'url' => $url
            ];
        }

        return response()->json($json);
    }
}
