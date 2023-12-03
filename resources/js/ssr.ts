<<<<<<< HEAD
// フレームワーク
import '../css/style.css';
import '../css/NProgress.css';
import 'vue-skeletor/dist/vue-skeletor.css';
//import './bootstrap';

// アプリの作成
import { Skeletor } from 'vue-skeletor';
import AeoPagination from './Components/Pagination.vue';
import { trail } from "momentum-trail"
import routes from "../routes/js/routing.json";
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import type { DefineComponent } from 'vue';


// エクストラ

=======
import { createSSRApp, h, DefineComponent } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Viteの修正
import 'vite/modulepreload-polyfill';

// フレームワーク
import '../css/style.css';
import '../css/NProgress.css';

// アプリの作成
import PageLoader from './Components/Loaders/PageLoader.vue';
import AeoPagination from './Components/Pagination.vue';
import vue3GoogleLogin from 'vue3-google-login'

// サイトの大部分が完了したら、すべての Ziggy ルートをトレイルに移行します - 過去 あえお
//https://github.com/lepikhinb/momentum-trail

import { trail } from "momentum-trail"
import routes from "../routes/js/routing.json";

// エクストラ

//import LogRocket from 'logrocket';
//LogRocket.init('vkyjvf/vestora');
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy-bundle.umd.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
<<<<<<< HEAD
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018


const appName = import.meta.env.VITE_APP_NAME || 'Vextoria';
createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
<<<<<<< HEAD
    progress: { includeCSS: true, showSpinner: false },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue")),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(trail, {
          routes,
          url: props.initialPage.url
        })
        .use(VueTippy)
        .component('Skeletor', Skeletor)
        .component('AeoPagination', AeoPagination) // Pagination コンポーネントを登録する
        .component('Head', Head)
        .component('Link', Link)
=======
    progress: {includeCSS: true, showSpinner: false,},
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue")),
    setup({ App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
	    .use(trail, {
               routes,
               url: props.initialPage.url
            })
            .use(VueTippy)
            .use(vue3GoogleLogin, {
                clientId: '564853151754-c0epg6ulhtc486gna17gr5jhp4b6re2d.apps.googleusercontent.com'
            })
            .component('PageLoader', PageLoader) // LoadingPage コンポーネントを登録する
            .component('AeoPagination', AeoPagination) // Pagination コンポーネントを登録する
            .component('Head', Head)
            .component('Link', Link)
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    },
  }),
)
