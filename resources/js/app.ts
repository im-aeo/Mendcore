<<<<<<< HEAD
// フレームワーク
import '../css/style.css';
import '../css/NProgress.css';
import 'vue-skeletor/dist/vue-skeletor.css';

import PageLoader from './Components/Loaders/PageLoader.vue'
=======
// Viteの修正
import 'vite/modulepreload-polyfill';

// フレームワーク
import '../css/style.css';
import '../css/NProgress.css';
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

import './bootstrap';

// アプリの作成
<<<<<<< HEAD
import { Skeletor } from 'vue-skeletor';
import { createSSRApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import type { DefineComponent } from 'vue';
import AeoPagination from './Components/Pagination.vue';
=======
import { createSSRApp, h } from 'vue';
import type { DefineComponent } from "vue";
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PageLoader from './Components/Loaders/PageLoader.vue';
import AeoPagination from './Components/Pagination.vue';
import vue3GoogleLogin from 'vue3-google-login'

// サイトの大部分が完了したら、すべての Ziggy ルートをトレイルに移行します - 過去 あえお
//https://github.com/lepikhinb/momentum-trail

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
import { trail } from "momentum-trail"
import routes from "../routes/js/routing.json";

// エクストラ

<<<<<<< HEAD
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy-bundle.umd.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
=======
//import LogRocket from 'logrocket';
//LogRocket.init('vkyjvf/vestora');

import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy-bundle.umd.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

const appName = import.meta.env.VITE_APP_NAME || 'Vextoria';

createInertiaApp({
<<<<<<< HEAD
    progress: { includeCSS: true, showSpinner: false },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(trail, {
                routes,
                url: props.initialPage.url
            })
            .use(VueTippy)
            .component('Skeletor', Skeletor)
            .component('AeoPagination', AeoPagination)
            .component('Head', Head)
            .component('Link', Link);

        // Set productionTip to true in production environment
        if (process.env.NODE_ENV === 'production') {
            app.config.productionTip = true;
        }

        // Mount the app to the element
        app.mount(el);
=======
    progress: {includeCSS: true, showSpinner: false,},
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
	    .use(trail, { routes })
            .use(VueTippy)
            .use(vue3GoogleLogin, {
                clientId: '564853151754-c0epg6ulhtc486gna17gr5jhp4b6re2d.apps.googleusercontent.com'
            })
            .component('PageLoader', PageLoader) // LoadingPage コンポーネントを登録する
            .component('AeoPagination', AeoPagination) // Pagination コンポーネントを登録する
            .component('Head', Head)
            .component('Link', Link)
            .mount(el);
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    },
});

