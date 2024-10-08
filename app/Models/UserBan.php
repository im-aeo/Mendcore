<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBan extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'banner_id',
        'type',
        'note',
        'length',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
