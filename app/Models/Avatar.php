<?php
<<<<<<< HEAD

=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
namespace App\Models;

use App\Models\Item;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Avatar extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'user_avatars';

    protected $fillable = [
        'user_id'
<<<<<<< HEAD

=======
	
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    ];

    public function hat($num)
    {
        return Item::where('id', '=', $this->{"hat_{$num}"})->first();
    }

    public function face()
    {
        return Item::where('id', '=', $this->face)->first();
    }

    public function gadget()
    {
        return Item::where('id', '=', $this->gadget)->first();
    }

    public function tshirt()
    {
        return Item::where('id', '=', $this->tshirt)->first();
    }

    public function shirt()
    {
        return Item::where('id', '=', $this->shirt)->first();
    }

    public function pants()
    {
        return Item::where('id', '=', $this->pants)->first();
    }
    public function reset()
<<<<<<< HEAD
    {
        // Set the paths for thumbnail and headshot
        $thumbnail = "thumbnails/{$this->image}.png";
        $headshot = "thumbnails/{$this->image}_headshot.png";

        // Reset all attributes to their default values
        $defaultAttributes = [
            'image' => 'default',
            'hat_1' => null,
            'hat_2' => null,
            'hat_3' => null,
            'hat_4' => null,
            'hat_5' => null,
            'hat_6' => null,
            'head' => null,
            'face' => null,
            'gadget' => null,
            'tshirt' => null,
            'shirt' => null,
            'pants' => null,
            'color_head' => 'd3d3d3',
            'color_torso' => '055e96',
            'color_left_arm' => 'd3d3d3',
            'color_right_arm' => 'd3d3d3',
            'color_left_leg' => 'd3d3d3',
            'color_right_leg' => 'd3d3d3',
        ];

        // Update the model with the default values and save it
        $this->timestamps = false;
        $this->fill($defaultAttributes);
        $this->save();
    }
}
=======
{
    // Set the paths for thumbnail and headshot
    $thumbnail = "thumbnails/{$this->image}.png";
    $headshot = "thumbnails/{$this->image}_headshot.png";

    // Reset all attributes to their default values
    $defaultAttributes = [
        'image' => 'default',
        'hat_1' => null,
        'hat_2' => null,
        'hat_3' => null,
        'head' => null,
        'face' => null,
        'gadget' => null,
        'tshirt' => null,
        'shirt' => null,
        'pants' => null,
        'color_head' => 'd3d3d3',
        'color_torso' => '055e96',
        'color_left_arm' => 'd3d3d3',
        'color_right_arm' => 'd3d3d3',
        'color_left_leg' => 'd3d3d3',
        'color_right_leg' => 'd3d3d3',
    ];

    // Update the model with the default values and save it
    $this->timestamps = false;
    $this->fill($defaultAttributes);
    $this->save();

    // Delete the thumbnail and headshot if they exist in storage
    if (Storage::exists($thumbnail)) {
        Storage::delete($thumbnail);
    }

    if (Storage::exists($headshot)) {
        Storage::delete($headshot);
    }
}

}
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
