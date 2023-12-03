<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use App\Models\UserBan;
<<<<<<< HEAD
use App\Models\UserSettings;
use Illuminate\Support\Carbon;
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

class USController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
<<<<<<< HEAD
        switch ($request->category) {
=======
	switch ($request->category) {
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
            case '':
            case 'general':
            case 'account':
            case 'billing':
<<<<<<< HEAD
                $categories = ['general', 'account', 'billing'];
=======
                $categories = ['general','account','billing'];
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                break;
            default:
                abort(404);
        }
        $countries = Country::all();
        return inertia('Settings/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'country' => $countries,
<<<<<<< HEAD
            'categories' => $categories,
            'themes' => config('themes.roster'),

=======
	    'categories' => $categories
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        ]);
    }

    /**
     * Update the user's profile information.
     */
<<<<<<< HEAD
    public function update(Request $request, $user): RedirectResponse
=======
    public function update(Request $request): RedirectResponse
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    {
        switch ($request->category) {
            case 'general':
                return $this->updateGeneralSettings($request, $user);
            case 'account':
                return $this->updateAccountSettings($request, $user);
            case 'billing':
                return $this->updatePassword($request, $user);
            default:
                abort(404);
        }
    }

    private function updateGeneralSettings($request, $user)
    {
        $this->validate($request, [
            'description' => ['max:1024'],
            'forum_signature' => ['max:100']
        ]);

        $user->description = $request->description;
        $user->forum_signature = $request->forum_signature;
        $user->save();

<<<<<<< HEAD
        $settings = $user->settings;
        $settings->theme = $request->has('theme') || 'light';
        $settings->save();

=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        return back()->with('message', 'Successfully updated general settings.');
    }

    private function updateAccountSettings($request, $user)
    {
<<<<<<< HEAD
        // Validate and update privacy settings
        $this->validate($request, [
            'accepts_messages' => ['boolean'],
            'accepts_friends' => ['boolean'],
            'accepts_trades' => ['boolean'],
            'public_inventory' => ['boolean'],
        ]);

        $settings = $user->settings;
        $settings->accepts_messages = $request->has('accepts_messages');
        $settings->accepts_friends = $request->has('accepts_friends');
        $settings->accepts_trades = $request->has('accepts_trades');
        $settings->public_inventory = $request->has('public_inventory');
        $settings->save();

        // Validate and update password if requested
        if ($request->has('new_password')) {
            $this->validate($request, [
                'current_password' => ['required'],
                'new_password' => ['required', 'confirmed', 'min:6', 'max:255']
            ]);

            if (!password_verify($request->current_password, $user->password))
                return back()->withErrors(['Incorrect current password.']);

            $user->password = bcrypt($request->new_password);
            $user->save();
        }

        return back()->with('message', 'Successfully updated account settings.');
    }

=======
    // Validate and update privacy settings
    $this->validate($request, [
        'accepts_messages' => ['boolean'],
        'accepts_friends' => ['boolean'],
        'accepts_trades' => ['boolean'],
        'public_inventory' => ['boolean'],
    ]);

    $settings = $user->settings;
    $settings->accepts_messages = $request->has('accepts_messages');
    $settings->accepts_friends = $request->has('accepts_friends');
    $settings->accepts_trades = $request->has('accepts_trades');
    $settings->public_inventory = $request->has('public_inventory');
    $settings->save();

    // Validate and update password if requested
    if ($request->has('new_password')) {
        $this->validate($request, [
            'current_password' => ['required'],
            'new_password' => ['required', 'confirmed', 'min:6', 'max:255']
        ]);

        if (!password_verify($request->current_password, $user->password))
            return back()->withErrors(['Incorrect current password.']);

        $user->password = bcrypt($request->new_password);
        $user->save();
    }

    return back()->with('message', 'Successfully updated account settings.');
}

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    /**
     * "Delete" the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

<<<<<<< HEAD
        $ban = new UserBan;
        $ban->user_id = $user->id;
        $ban->banner_id = config("Values.system_account_id");
        $ban->type = "self-deletion";
        $ban->note = "{$user->username}, has requested deletion of their accocunt. To restore in a timely manner, Please contact support.";
        $ban->length = Carbon::createFromTimestamp(time() + 31536000)->format('Y-m-d H:i:s');
        $ban->save();

        Auth::guard('web')->logout();
=======
	$ban = new UserBan;
        $ban->user_id = $user->id;
        $ban->banner_id = config("Values.system_account_id");
        $ban->type = "self-deletion";
	$ban->note = "{$user->username}, has requested deletion of their accocunt. To restore in a timely manner, Please contact support.";
	$ban->length = Carbon::createFromTimestamp(time() + 31536000)->format('Y-m-d H:i:s');
        $ban->save();

	Auth::user()->logout();
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

        $request->session()->invalidate();
        $request->session()->regenerateToken();

<<<<<<< HEAD
        return back()->with('message', 'Account Deleted Successfully');
=======
        return back()->with('message','Account Deleted Successfully');
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    }
}
