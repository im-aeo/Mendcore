<?php
<<<<<<< HEAD

=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Item;
use Illuminate\Support\Facades\Hash;

class ThumbnailController extends Controller
{

<<<<<<< HEAD
    public function getThumbnail($type, $id)
    {
        // Determine the logic to fetch the final image URL based on $type and $id
        if ($type == 1) {
            // Fetch the final image URL for an item
            $item = Item::where('id', '=', $id)->firstOrFail();
            $imageUrl = $item->thumbnail();
        } elseif ($type == 2) {
            // Fetch the final image URL for a user
            $user = User::where('id', '=', $id)->firstOrFail();
            $imageUrl = $user->thumbnail();
        } else {
            // Handle invalid type (optional)
            abort(404);
        }

        // Redirect to the final image URL
        return redirect()->to($imageUrl);
    }
=======
public function getThumbnail($type, $id)
{
    // Determine the logic to fetch the final image URL based on $type and $id
    if ($type == 1) {
        // Fetch the final image URL for an item
	$item = Item::where('id', '=', $id)->firstOrFail();
        $imageUrl = $item->thumbnail();
    } elseif ($type == 2) {
        // Fetch the final image URL for a user
	$user = User::where('id', '=', $id)->firstOrFail();
        $imageUrl = $user->thumbnail();
    } else {
        // Handle invalid type (optional)
        abort(404);
    }

    // Redirect to the final image URL
    return redirect()->to($imageUrl);
}

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
}
