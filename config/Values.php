<?php

return [
    'name' => 'Netisu',
    'logo' => '/assets/img/logo.png',
    'icon' => '/assets/img/logo.svg',
    'in_event' => true,
    'system_account_id' => 1,
    'render' => [
<<<<<<< HEAD
        'url' => '206.189.195.33:8001',
=======
        'main' => 'Avatar/Renders/',
        'root' => '/var/www/renderer', // Location = /var/www/renderer
        'cmd_avatar' => 'init.go',
	'cmd_headshot' => 'headshot.go',
        'item' => 'Avatar/requests/items',
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        'default_avatar' => 'assets/img/dummy_headshot'
    ],
    'price' => [
        'username' => '250',
    ],
    'storage' => [
<<<<<<< HEAD
        'root' => '/var/www/cdn',
        'url' => 'https://cdn.netisu.com', // If your developing locally put localhost or your current server ip
    ],
    'production' => [
        'domains' => [
            'main' => 'https://netisu.test',
            'api' => 'https://netisu.test/api',
            'careers' => 'https://careers.netisu.test',
        ],
=======
    	'root' => '/var/www/cdn',
    	'url' => 'https://cdn.netisu.com', // If your developing locally put localhost or your current server ip
    ],
    'production' => [
    	'domains' => [
	    'main' => 'https://netisu.com',
	    'api' => 'https://api.netisu.com',
	    'careers' => 'https://careers.netisu.com',
	],
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    ],
    'shop' => [
        'previews_enabled' => true
    ],
    'maintenance_passwords' => [
<<<<<<< HEAD
        'randopass',
        'password2',
        'alexplaysminecraft123'
=======
	'randopass', 
	'password2',
    'alexplaysminecraft123'
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    ],
    'socials' => [
        'discord' => 'https://discord.gg/netisu',
        'twitter' => '#'
    ],
];
