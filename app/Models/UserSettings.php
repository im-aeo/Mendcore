<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<<<<<<< HEAD
use App\Models\User;
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

class UserSettings extends Model
{
    use HasFactory;

<<<<<<< HEAD
    public $timestamps = false;

    protected $table = 'user_settings';

    protected $fillable = [
        'user_id'
    ];
=======
    protected $fillable = [
        'accepts_messages',
        'accepts_friends',
        'accepts_trades',
        'public_inventory',
        // Add more fillable fields here
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
}
