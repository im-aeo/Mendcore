<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteStaffTeam extends Model
{
    use HasFactory;
       
    protected $table = 'site_staff_team'; // Specify the actual table name

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
