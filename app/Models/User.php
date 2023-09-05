<?php

namespace App\Models;

use App\Models\Status;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as AeoAuthenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Avatar;
use App\Models\SiteStaffTeam;
use App\Models\Level;
use App\Models\ForumThread;
use Illuminate\Support\Facades\Auth;

class User extends AeoAuthenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'birthdate',
        'social_id',
        'social_type',
        'wallet_address',
        'status',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['DateHum'];

    // Classes
    public function avatar()
    {
        return Avatar::where('user_id', '=', $this->id)->first();
    }
    public function getDateHumAttribute()
    {
        return $this->updated_at->diffForHumans();
    }

    // Define the followers relationship
    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'following_id', 'follower_id');
    }

    public function posts()
    {
        return $this->hasMany(ForumThread::class, 'creator_id');
    }

    public function following()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'following_id');
    }

    public function online()
    {
        // Calculate the expiration time for online status
        $expirationTime = strtotime($this->updated_at) + 300;

        // Check if the expiration time is greater than the current time
        return $expirationTime > time();
    }

    public function staffTeam()
    {
        return $this->hasOne(SiteStaffTeam::class);
    }

    public function isStaff()
    {
        return $this->staffTeam !== null;
    }

    public function currentLevel()
    {
        return $this->belongsTo(Level::class, 'current_level_id');
    }

    public function levelUp()
    {
        // Logic to check if user's experience crosses the next level threshold
        $nextLevel = Level::where('experience_required', '>', $this->experience)->orderBy('experience_required')->first();
        // If it does, update user's level and perform additional actions
        if ($nextLevel) {
            $this->current_level_id = $nextLevel->id;
            // Additional actions: reward items, currency, etc.
            $this->save();
        }
    }

    public function gainExperience($amount)
    {
        // Logic to update user's experience and check for level-up
    }

    public function thumbnail()
    {
        $url = config('Values.storage.url');
        $image = ($this->avatar()?->image === 'default') ? config('Values.render.default_avatar') : $this->avatar()?->image;
        return "{$url}/thumbnails/{$image}.png";
    }
    public function headshot()
    {
        $url = config('Values.storage.url');
        $image = ($this->avatar()?->image === 'default') ? config('Values.render.default_avatar') : $this->avatar()?->image;
        return "{$url}/thumbnails/{$image}_headshot.png";
    }
    public function latestStatus()
    {
        return $this->hasOne(Status::class, 'creator_id')->latest();
    }
    public function isFollowing(User $userToCheck)
    {
        return $this->following()->where('following_id', $userToCheck->id)->exists();
    }

    public function isFollowedBy(User $userToCheck)
    {
        return $this->followers()->where('follower_id', $userToCheck->id)->exists();
    }

    public function getStatusAttribute()
    {
        return $this->latestStatus?->message;
    }
}
