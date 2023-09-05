<?php

return [
    'name' => 'Netisu',
    'logo' => '/assets/img/logo.png',
    'icon' => '/assets/img/icon.png',
    'in_event' => true,
    'render' => [
        'main' => 'Avatar/Renders/',
        'root' => '/var/www/renderer', // For linux put /var/www/polytoria/Avatar/requests/user
        'cmd_avatar' => 'init.go',
	'cmd_headshot' => 'headshot.go',
        'item' => 'Avatar/requests/items',
        'default_avatar' => 'assets/img/dummy_headshot'
    ],
    'price' => [
        'username' => '250',
    ],
    'storage' => [
    'root' => '/var/www/cdn',
    'url' => 'https://cdn.netisu.com', // If your developing locally put localhost or your current server ip, If you using windows and laragon the put your .test domain example: (https://polytoria.test)
    ],
    'shop' => [
        'previews_enabled' => true
    ],
    'maintenance_passwords' => [
	'randopass', 
	'password2',
    'alexplaysminecraft123'
    ],
    'socials' => [
        'discord' => 'https://discord.gg/netisu',
        'twitter' => '#'
    ],
];
