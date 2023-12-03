/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
<<<<<<< HEAD
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = false;
window.axios.defaults.crossDomain = true;
=======
import get from 'lodash/get';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
/*
window.axios.interceptors.response.use(response => response, async err => {
  const status = get(err, 'response.status')

  if (status === 419) {
    // Refresh our session token
    await window.axios.get('/csrf-token')

    // Return a new request using the original request's configuration
    return window.axios(err.response.config)
  }

  return Promise.reject(err)
})
*/
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

<<<<<<< HEAD
//import Pusher from 'pusher-js';
//window.Pusher = Pusher;
//import socket from "socket.io-client/dist/socket.io.js";
//window.io = socket;
//if (typeof io !== 'undefined') {
 //   window.Echo = new Echo({
   //       broadcaster: 'socket.io',    
       //   host: 'http://localhost' + ':6001',
  
//});
//}
=======
import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
