<?php

namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\UserMessages as Message;

class ChatsController extends Controller
{
    //Add the below functions
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $message = $user->messages()->create([
            'message' => $request->input('message')
        ]);
	broadcast(new MessageSent($user, $message))->toOthers();
        return ['status' => 'Message Sent!'];
    }
}
