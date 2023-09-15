<?php

namespace App\Models;

use App\Models\ForumReply;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;

class ForumThread extends Model
{
    use HasFactory;

    protected $table = 'forum_threads';

    protected $fillable = [
        'topic_id',
        'creator_id',
        'title',
        'body'
    ];

    protected $appends = ['DateHum'];

    public function getDateHumAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function creator()
    {
        return $this->belongsTo('App\Models\User', 'creator_id');
    }

    public function topic()
    {
        return $this->belongsTo('App\Models\ForumTopic', 'topic_id');
    }

    public function replies($hasPagination = true)
    {
        if (Auth::check() && Auth::user()->staff == 1)
            $replies = ForumReply::where('in_topic_id', '=', $this->id)->orderBy('created_at', 'ASC');
        else
            $replies = ForumReply::where([
                ['thread_id', '=', $this->id],
                ['is_deleted', '=', false]
            ])->orderBy('created_at', 'ASC');

        return ($hasPagination) ? $replies->paginate(4) : $replies->get();
    }

    public function lastReply()
    {
        return ForumReply::where('thread_id', '=', $this->id)->orderBy('created_at', 'DESC')->first();
    }

    public function slug()
    {
        $title = str_replace('-', ' ', $this->title);

        return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    }
}
