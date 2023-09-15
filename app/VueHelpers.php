<?php
use App\Models\SiteSettings;

function translations($json)
{
    if (!file_exists($json)) {
        return [];
    }

    return json_decode(file_get_contents($json), true);
}
function site_setting($key)
{
    // Check if the app is in production environment
    $isProduction = app()->environment('production');

    if ($isProduction) {
        // Check if the settings are cached
        $settings = cache()->remember('site_settings', now()->addMinutes(30), function () {
            return SiteSettings::find(1); // Change to use the find() method instead of where() + first()
        });
    } else {
        // If not in production, retrieve settings without caching
        $settings = SiteSettings::find(1);
    }
    
    // If settings are not found, return a default value or handle the error
    if (!$settings) {
        return null; // or return a default value or throw an exception
    }

    // Use optional chaining to access the property safely
    return optional($settings)->$key;
}
