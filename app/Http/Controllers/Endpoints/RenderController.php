<?php
namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\Avatar;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class RenderController extends Controller
{
    
public function UserRender(Request $request, $id, $type)
{
   // Retrieve parameters for the request
    if($type == "user") {
         $rr = Avatar::findOrFail($id);
    }else{
         $rr = Item::where('id', '=', $id)->first();
    }

    // Verify the encryption or any other required validations
    $thumbnail_name = bin2hex(random_bytes(22));
    $requestData = $this->prepareRequestData($type, $rr, $thumbnail_name);

    // Make HTTP request to the rendering server
    $this->makeRenderRequest($requestData);

    // Retrieve the rendered image path
    if($type == "user"){
         $imagePath = config('site.storage_url') . '/thumbnails/' . $thumbnail_name . '.png';
    }else{
         $imagePath = config('site.storage_url') . '/uploads/' . $thumbnail_name . '.png';
    }


    // Read the rendered image file
    $imageData = file_get_contents($imagePath);

    // Update the user's image and save
    if($type == "user"){
         $rr->image = $thumbnail_name;
    }else{
         $rr->thumbnail_url = $thumbnail_name;
    }

    $rr->save();

    // Return the rendered image as a response
    return $rr->thumbnail();
}

function makeRenderRequest($requestData)
{
    Http::get(config('Values.render.url'), $requestData);
}

}
function ItemToHash($id)
{
        $item = Item::find($id);
        return $item ? $item->filename : null;

}

function  prepareRequestData($type, $rr, $thumbnail_name)
{
   if($type == "user"){
     return [
        'renderType' => 'user',
        'hash' => $thumbnail_name,
        'head_color' => getColor($rr->color_head, 'd3d3d3'),
        'torso_color' => getColor($rr->color_torso, '055e96'),
        'leftLeg_color' => getColor($rr->color_left_leg, 'd3d3d3'),
        'rightLeg_color' => getColor($rr->color_right_leg, 'd3d3d3'),
        'leftArm_color' => getColor($rr->color_left_arm, 'd3d3d3'),
        'rightArm_color' => getColor($rr->color_right_arm, 'd3d3d3'),
        'hat_1' => ItemToHash($rr->hat_1),
        'hat_2' => ItemToHash($rr->hat_2),
        'hat_3' => ItemToHash($rr->hat_3),
        'hat_4' => ItemToHash($rr->hat_4),
        'hat_5' => ItemToHash($rr->hat_5),
        'hat_6' => ItemToHash($rr->hat_6),
        'face' => ItemToHash($rr->face),
        'tool' => ItemToHash($rr->gadget),
    ];
    }else{
        if ($rr->type === 'face') {
  return [
    'renderType' => 'item',
    'hash' => $thumbnail_name,
    'head_color' => 'd3d3d3',
    'torso_color' => '055e96',
    'leftLeg_color' => 'd3d3d3',
    'rightLeg_color' => 'd3d3d3',
    'leftArm_color' => 'd3d3d3',
    'rightArm_color' => 'd3d3d3',
    'face' => ItemToHash($rr->id),
  ];
}
if ($rr->type === 'hat') {
  return [
    'renderType' => 'item',
    'hash' => $thumbnail_name,
    'head_color' => 'd3d3d3',
    'torso_color' => '055e96',
    'leftLeg_color' => 'd3d3d3',
    'rightLeg_color' => 'd3d3d3',
    'leftArm_color' => 'd3d3d3',
    'rightArm_color' => 'd3d3d3',
    'hat_1' => ItemToHash($rr->id),
  ];
}
if ($rr->type === 'tool') {
  return [
    'renderType' => 'item',
    'hash' => $thumbnail_name,
    'head_color' => 'd3d3d3',
    'torso_color' => '055e96',
    'leftLeg_color' => 'd3d3d3',
    'rightLeg_color' => 'd3d3d3',
    'leftArm_color' => 'd3d3d3',
    'rightArm_color' => 'd3d3d3',
    'tool' => ItemToHash($rr->id),
  ];
}
    }
}

function getColor($value, $default)
{
    return isset($value) ? str_replace('#', '', $value) : $default;
}