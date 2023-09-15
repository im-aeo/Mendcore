<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }


    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'locale' => function () {
                return app()->getLocale();
            },
	    'locales' => function () {
                return config('ActiveLocales');
            },
            'language' => function () {
                return translations(
                    resource_path('lang/' . app()->getLocale() . '.json')
                );
            },
            'auth' => function () use ($request) {
                return [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'username' => $request->user()->username,
                    'display_name' => $request->user()->display_name,
                    'full_name' => $request->user()->full_name,
                    'email' => $request->user()->email,
                    'birthdate' => $request->user()->birthdate,
                    'coins' => $request->user()->coins,
                    'bucks' => $request->user()->bucks,
                    'views' => $request->user()->views,
                    'status' => $request->user()->status,
                    'about_me' => $request->user()->about_me,
		            'following' => $request->user()->following(),
                ] : null,
                ];
        },
            'site' => config('Values'),
            'flash' => function () use ($request) {
                [
                    'message' => $request->session()->get('message'),
                    'error' => $request->session()->get('error')
                ];
            },
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
    public function handle(Request $request, \Closure $next)
    {
	return parent::handle($request, $next);
    }
}
