<?php
namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Avatar;
use Illuminate\Support\Facades\Hash;

class RenderController extends Controller
{
	public function UserRender(Request $request, $id)
    {
        // Retrieve parameters for the request
        $user = Avatar::where('id', '=', $id)->first();

        // Verify the encryption or any other required validations
        $avatar_thumbnail_name = bin2hex(random_bytes(22));
        $cmd = config('Values.render.cmd_avatar');
        $workingDirectory = config('Values.render.root');

        // Generate the command to execute the Go code
        $command = "cd {$workingDirectory} && go run {$cmd} " .
    "-hash " . str_replace('#', '', $avatar_thumbnail_name) . " " .
    "-hat_1 " . (isset($user->hat_1) ? str_replace('#', '', $user->hat_1) : 'none') . " " .
    "-hat_2 " . (isset($user->hat_2) ? str_replace('#', '', $user->hat_2) : 'none') . " " .
    "-hat_3 " . (isset($user->hat_3) ? str_replace('#', '', $user->hat_3) : 'none') . " " .
    "-hat_4 " . (isset($user->hat_4) ? str_replace('#', '', $user->hat_4) : 'none') . " " .
    "-hat_5 " . (isset($user->hat_5) ? str_replace('#', '', $user->hat_5) : 'none') . " " .
    "-hat_6 " . (isset($user->hat_6) ? str_replace('#', '', $user->hat_6) : 'none') . " " .
    "-face " . (isset($user->face) ? str_replace('#', '', $user->face) : 'default') . " " .
    "-tool " . (isset($user->tool) ? str_replace('#', '', $user->tool) : 'none') . " " .
    //"-shirt " . (isset($user->shirt) ? str_replace('#', '', $user->shirt) : 'none') . " " .
    //"-pants " . (isset($user->pants) ? str_replace('#', '', $user->pants) : 'none') . " " .
    "-head_color " . (isset($user->color_head) ? str_replace('#', '', $user->color_head) : 'ffffff') . " " .
    "-torso_color " . (isset($user->color_torso) ? str_replace('#', '', $user->color_torso) : '055e96') . " " .
    "-leftArm_color " . (isset($user->color_left_arm) ? str_replace('#', '', $user->color_left_arm) : 'ffffff') . " " .
    "-rightArm_color " . (isset($user->color_right_arm) ? str_replace('#', '', $user->color_right_arm) : 'ffffff') . " " .
    "-leftLeg_color " . (isset($user->color_left_leg) ? str_replace('#', '', $user->color_left_leg) : 'ffffff') . " " .
    "-rightLeg_color " . (isset($user->color_right_leg) ? str_replace('#', '', $user->color_right_leg) : 'ffffff');

        // Execute the Go code using exec()
        exec($command);
        // sleep('1'); Enable if  GenerateScene() is false in the renderer api
        //dd($command);
        // Retrieve the rendered image path
        $imagePath = config('Values.storage.root') . '/thumbnails/'. $avatar_thumbnail_name . '.png';

        // Read the rendered image file
        $imageData = file_get_contents($imagePath);

        $user->image = $avatar_thumbnail_name;
        $user->save();

        // Return the rendered image as a response
        return response($imageData)->header('Content-Type', 'image/png');
    }
}
