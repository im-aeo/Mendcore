<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSettings extends Model
{
    use HasFactory;

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
}
