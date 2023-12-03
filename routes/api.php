<?php

use Inertia\Inertia;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use App\Http\Controllers\TestCon;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Endpoints\RssController;
use App\Http\Controllers\Endpoints\UserController;
use App\Http\Controllers\Endpoints\RenderController;
use App\Http\Controllers\Endpoints\ItemApiController;
use App\Http\Controllers\Endpoints\ThumbnailController;
use App\Http\Controllers\Endpoints\SearchSiteController;
use App\Http\Controllers\Endpoints\ChatsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return redirect()->to(config('Values.production.domains.main'));
});

<<<<<<< HEAD

=======
Route::get('/messages', [ChatsController::class, 'fetchMessages'])->name('messages');
Route::post('/messages', [ChatsController::class, 'sendMessage'])->name('new');
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
Route::get('/search', [SearchSiteController::class, 'all'])->name('search');
Route::get('/render/validate/{id}', [RenderController::class, 'userRender'])->name('avatar');

Route::group(['as' => 'user.', 'prefix' => 'users'], function () {
<<<<<<< HEAD
    Route::get('/', function () {
        return redirect()->to(config('Values.production.domains.main'));
    });
    Route::get('/online/{id}', [UserController::class, 'getStatus'])->name('online');
    Route::get('/status-list', [UserController::class, 'getUserStatus'])->name('status');
    Route::get('/user/img/{id}', [UserController::class, 'getAvatar'])->name('avatar');
    Route::get('/follow/{user}', [UserController::class, 'follow'])->name('follow');
    Route::post('/unfollow/{user}', [UserController::class, 'unfollow'])->name('unfollow');
});

Route::group(['as' => 'store.', 'prefix' => 'market'], function () {
    Route::get('/', function () {
        return redirect()->to(config('Values.production.domains.main'));
    });
    Route::get('/items/{category}', [ItemApiController::class, 'getItemsByCategory'])->name('items');
    Route::get('/items/event/{eventId}', [ItemApiController::class, 'getEventItems'])->name('event.items');
});

Route::group(['as' => 'avatar.', 'prefix' => 'inventory'], function () {
    Route::get('/', function () {
        return redirect()->to(config('Values.production.domains.main'));
    });
    Route::get('/inventory/{category}', [AvatarController::class, 'getItemsByCategory'])->name('items');
});

Route::get('/rss-feed', [RssController::class, 'index'])->name('rss');
Route::get('/thumbnails/{type}/{id}', [ThumbnailController::class, 'getThumbnail'])->name('thumbnails');
=======
Route::get('/', function () { return redirect()->to(config('Values.production.domains.main')); });
Route::get('/online/{id}', [UserController::class, 'getStatus'])->name('online');
Route::get('/follow/{user}', [UserController::class, 'follow'])->name('follow');
Route::post('/unfollow/{user}', [UserController::class, 'unfollow'])->name('unfollow');
});

Route::group(['as' => 'store.', 'prefix' => 'market'], function () {
Route::get('/', function () { return redirect()->to(config('Values.production.domains.main')); });
Route::get('/items/{category}', [ItemApiController::class, 'getItemsByCategory'])->name('items');
Route::get('/items/event/{eventId}', [ItemApiController::class, 'getEventItems'])->name('event.items');
});

Route::group(['as' => 'avatar.', 'prefix' => 'inventory'], function () {
Route::get('/', function () { return redirect()->to(config('Values.production.domains.main')); });
Route::get('/inventory/{category}', [AvatarController::class, 'getItemsByCategory'])->name('items');
});

Route::get('/rss-feed', [RssController::class, 'index'])->name('rss');
Route::get('/user/img/{id}', [UserController::class, 'getAvatar'])->name('avatar');
Route::get('/thumbnails/{type}/{id}', [ThumbnailController::class, 'getThumbnail'])->name('thumbnails');

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
