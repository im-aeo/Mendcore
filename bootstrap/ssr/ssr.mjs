<<<<<<< HEAD
import { Skeletor } from "vue-skeletor";
import { Link, createInertiaApp, Head } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { trail } from "momentum-trail";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import VueTippy from "vue-tippy";
const style = "";
const NProgress = "";
const vueSkeletor = "";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    pagedata: {
      type: Object,
      required: true,
      default: () => ({
        current_page: 0,
        last_page: 0,
        total: 0
      })
    }
  },
  methods: {
    getPageClick(page) {
      if (page >= 1 && page <= this.pagedata.last_page) {
        this.$emit("page-clicked", page);
        return `?page=${page}`;
      }
      return "";
    }
  }
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 section" }, _attrs))}><ul class="pagination flex-container align-center">`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["page-link", { "page-disabled": $props.pagedata.current_page == 1 }],
    as: "button",
    href: $options.getPageClick($props.pagedata.current_page - 1)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-regular fa-chevron-left"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa-regular fa-chevron-left" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList($props.pagedata.last_page, (page) => {
    _push(ssrRenderComponent(_component_Link, {
      class: ["page-link", { "page-active": $props.pagedata.current_page == page }],
      as: "button",
      key: page,
      href: $options.getPageClick(page)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(page)}`);
        } else {
          return [
            createTextVNode(toDisplayString(page), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_Link, {
    class: ["page-link", { "page-disabled": $props.pagedata.current_page == $props.pagedata.last_page }],
    as: "button",
    href: $options.getPageClick($props.pagedata.current_page + 1)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa-regular fa-chevron-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AeoPagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const url = "https://netisu.test";
const port = null;
const defaults = [];
const routes = {
  "l5-swagger.default.api": {
    uri: "api/documentation",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "l5-swagger.default.docs": {
    uri: "docs/{jsonFile?}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "jsonFile"
    ]
  },
  "l5-swagger.default.asset": {
    uri: "docs/asset/{asset}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "asset"
    ]
  },
  "l5-swagger.default.oauth2_callback": {
    uri: "api/oauth2-callback",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "passport.token": {
    uri: "oauth/token",
    methods: [
      "POST"
    ]
  },
  "passport.authorizations.authorize": {
    uri: "oauth/authorize",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "passport.token.refresh": {
    uri: "oauth/token/refresh",
    methods: [
      "POST"
    ]
  },
  "passport.authorizations.approve": {
    uri: "oauth/authorize",
    methods: [
      "POST"
    ]
  },
  "passport.authorizations.deny": {
    uri: "oauth/authorize",
    methods: [
      "DELETE"
    ]
  },
  "passport.tokens.index": {
    uri: "oauth/tokens",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "passport.tokens.destroy": {
    uri: "oauth/tokens/{token_id}",
    methods: [
      "DELETE"
    ],
    parameters: [
      "token_id"
    ]
  },
  "passport.clients.index": {
    uri: "oauth/clients",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "passport.clients.store": {
    uri: "oauth/clients",
    methods: [
      "POST"
    ]
  },
  "passport.clients.update": {
    uri: "oauth/clients/{client_id}",
    methods: [
      "PUT"
    ],
    parameters: [
      "client_id"
    ]
  },
  "passport.clients.destroy": {
    uri: "oauth/clients/{client_id}",
    methods: [
      "DELETE"
    ],
    parameters: [
      "client_id"
    ]
  },
  "passport.scopes.index": {
    uri: "oauth/scopes",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "passport.personal.tokens.index": {
    uri: "oauth/personal-access-tokens",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "passport.personal.tokens.store": {
    uri: "oauth/personal-access-tokens",
    methods: [
      "POST"
    ]
  },
  "passport.personal.tokens.destroy": {
    uri: "oauth/personal-access-tokens/{token_id}",
    methods: [
      "DELETE"
    ],
    parameters: [
      "token_id"
    ]
  },
  "sanctum.csrf-cookie": {
    uri: "sanctum/csrf-cookie",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  telescope: {
    uri: "telescope/{view?}",
    methods: [
      "GET",
      "HEAD"
    ],
    wheres: {
      view: "(.*)"
    },
    parameters: [
      "view"
    ]
  },
  "api.": {
    uri: "api",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.search": {
    uri: "api/search",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.avatar": {
    uri: "api/render/validate/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id"
    ]
  },
  "api.user.": {
    uri: "api/users",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.user.online": {
    uri: "api/users/online/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id"
    ]
  },
  "api.user.status": {
    uri: "api/users/status-list",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.user.avatar": {
    uri: "api/users/user/img/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id"
    ]
  },
  "api.user.follow": {
    uri: "api/users/follow/{user}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "user"
    ],
    bindings: {
      user: "id"
    }
  },
  "api.user.unfollow": {
    uri: "api/users/unfollow/{user}",
    methods: [
      "POST"
    ],
    parameters: [
      "user"
    ],
    bindings: {
      user: "id"
    }
  },
  "api.store.": {
    uri: "api/market",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.store.items": {
    uri: "api/market/items/{category}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "category"
    ]
  },
  "api.store.event.items": {
    uri: "api/market/items/event/{eventId}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "eventId"
    ]
  },
  "api.avatar.": {
    uri: "api/inventory",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.avatar.items": {
    uri: "api/inventory/inventory/{category}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "category"
    ]
  },
  "api.rss": {
    uri: "api/rss-feed",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "api.thumbnails": {
    uri: "api/thumbnails/{type}/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "type",
      "id"
    ]
  },
  "maintenance.page": {
    uri: "maintenance",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "maintenance.authenticate.password": {
    uri: "maintenance/password",
    methods: [
      "POST"
    ]
  },
  "maintenance.exit": {
    uri: "maintenance/exit",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "my.dashboard.page": {
    uri: "my/dashboard",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "my.dashboard.validate": {
    uri: "my/dashboard",
    methods: [
      "POST"
    ]
  },
  "user.page": {
    uri: "users/discover",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "user.profile": {
    uri: "users/profile/{username}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "username"
    ]
  },
  "user.settings.page": {
    uri: "users/settings/{category}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "category"
    ]
  },
  "user.settings.update": {
    uri: "users/settings/update",
    methods: [
      "PATCH"
    ]
  },
  "user.settings.destroy": {
    uri: "users/settings/delete-account",
    methods: [
      "POST"
    ]
  },
  "avatar.page": {
    uri: "customize",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "avatar.update": {
    uri: "customize/update",
    methods: [
      "POST"
    ]
  },
  "forum.page": {
    uri: "discuss/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id"
    ]
  },
  "forum.post": {
    uri: "discuss/post/{id}/{slug}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id",
      "slug"
    ]
  },
  "forum.create.page": {
    uri: "discuss/create/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id"
    ]
  },
  "forum.create.validate": {
    uri: "discuss/create/{id}/validate",
    methods: [
      "POST"
    ],
    parameters: [
      "id"
    ]
  },
  "forum.reply.validate": {
    uri: "discuss/create/reply/{id}/validate",
    methods: [
      "POST"
    ],
    parameters: [
      "id"
    ]
  },
  "auth.logout": {
    uri: "auth/logout",
    methods: [
      "POST"
    ]
  },
  "auth.language": {
    uri: "auth/set-language/{language}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "language"
    ]
  },
  "auth.login.google": {
    uri: "auth/login/google/v1",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "auth.login.google.validation": {
    uri: "auth/login/callback/google",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "auth.login.page": {
    uri: "auth/login",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "auth.login.validate": {
    uri: "auth/login/validate",
    methods: [
      "POST"
    ]
  },
  "auth.login.metamask": {
    uri: "auth/login/validate/metamask",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "auth.login.metamask.validation": {
    uri: "auth/login/validate/meta-mask-api",
    methods: [
      "POST"
    ]
  },
  "auth.register.page": {
    uri: "auth/register",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "auth.register.validate": {
    uri: "auth/register/validate",
    methods: [
      "POST"
    ]
  },
  "auth.forgot.page": {
    uri: "auth/forgot",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  Welcome: {
    uri: "/",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "games.page": {
    uri: "games",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  removed: {
    uri: "deletion",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "store.page": {
    uri: "market",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "store.create.validate": {
    uri: "market/create",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "store.item": {
    uri: "market/item/{id}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id"
    ]
  },
  "store.purchase": {
    uri: "market/item/purchase/{id}/{currencyType}",
    methods: [
      "POST"
    ],
    parameters: [
      "id",
      "currencyType"
    ]
  },
  "spaces.page": {
    uri: "spaces",
    methods: [
      "GET",
      "HEAD"
    ]
  },
  "spaces.view": {
    uri: "spaces/{id}/{slug}",
    methods: [
      "GET",
      "HEAD"
    ],
    parameters: [
      "id",
      "slug"
    ]
  }
};
const wildcards = {
  "l5-swagger.*": [],
  "l5-swagger.default.*": [],
  "passport.*": [],
  "passport.authorizations.*": [],
  "passport.token.*": [],
  "passport.tokens.*": [],
  "passport.clients.*": [],
  "passport.scopes.*": [],
  "passport.personal.*": [],
  "passport.personal.tokens.*": [],
  "sanctum.*": [],
  "api.*": [],
  "api.user.*": [],
  "api.store.*": [],
  "api.store.event.*": [],
  "api.avatar.*": [],
  "maintenance.*": [],
  "maintenance.authenticate.*": [],
  "my.*": [],
  "my.dashboard.*": [],
  "user.*": [],
  "user.settings.*": [],
  "avatar.*": [],
  "forum.*": [],
  "forum.create.*": [],
  "forum.reply.*": [],
  "auth.*": [],
  "auth.login.*": [],
  "auth.login.google.*": [],
  "auth.login.metamask.*": [],
  "auth.register.*": [],
  "auth.forgot.*": [],
  "games.*": [],
  "store.*": [],
  "store.create.*": [],
  "spaces.*": []
};
const routes$1 = {
  url,
  port,
  defaults,
  routes,
  wildcards
};
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    progress: { includeCSS: true, showSpinner: false },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/AccountDeleted.vue": () => import("./assets/AccountDeleted-caa56f16.mjs"), "./Pages/Admin/Page.vue": () => import("./assets/Page-a696e48a.mjs"), "./Pages/Admin/soon.vue": () => import("./assets/soon-16cb798a.mjs"), "./Pages/App/Error.vue": () => import("./assets/Error-003e91b3.mjs"), "./Pages/App/FeatureDisabled.vue": () => import("./assets/FeatureDisabled-12997fba.mjs"), "./Pages/Authentication/Create.vue": () => import("./assets/Create-e486196f.mjs"), "./Pages/Authentication/Forgot.vue": () => import("./assets/Forgot-a1e633e4.mjs"), "./Pages/Authentication/Login.vue": () => import("./assets/Login-97a65a39.mjs"), "./Pages/BetaWelcome.vue": () => import("./assets/BetaWelcome-d501fad7.mjs"), "./Pages/Customize/Index.vue": () => import("./assets/Index-a25e16f6.mjs"), "./Pages/Customize/functions.vue": () => import("./assets/functions-414ff465.mjs"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-2264b8d6.mjs"), "./Pages/Forum/Create.vue": () => import("./assets/Create-41e1cc48.mjs"), "./Pages/Forum/Index.vue": () => import("./assets/Index-ab049d48.mjs"), "./Pages/Forum/Post.vue": () => import("./assets/Post-42f831a4.mjs"), "./Pages/Games/Game.vue": () => import("./assets/Game-a83e5ba8.mjs"), "./Pages/Games/Index.vue": () => import("./assets/Index-c34ef43f.mjs"), "./Pages/Maintenance/Development.vue": () => import("./assets/Development-d29eb0cf.mjs"), "./Pages/Maintenance/Index.vue": () => import("./assets/Index-aa6e9ada.mjs"), "./Pages/Settings/Edit.vue": () => import("./assets/Edit-d7c539f1.mjs"), "./Pages/Settings/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-7ce74e8a.mjs"), "./Pages/Settings/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-8bddf153.mjs"), "./Pages/Settings/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-ff53dbae.mjs"), "./Pages/Spaces/Index.vue": () => import("./assets/Index-f0bb5781.mjs"), "./Pages/Store/Index.vue": () => import("./assets/Index-d92a6e86.mjs"), "./Pages/Store/Item.vue": () => import("./assets/Item-d6d6d4fc.mjs"), "./Pages/Users/Index.vue": () => import("./assets/Index-91e30f87.mjs"), "./Pages/Users/Profile.vue": () => import("./assets/Profile-ff7909f0.mjs"), "./Pages/Welcome.vue": () => import("./assets/Welcome-a8fa65ec.mjs") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(trail, {
        routes: routes$1,
        url: props.initialPage.url
      }).use(VueTippy).component("Skeletor", Skeletor).component("AeoPagination", AeoPagination).component("Head", Head).component("Link", Link);
    }
  })
);
=======
const _0x4b99ea = _0x46c8;
(function(_0x302d6d, _0x2bc8e6) {
  const _0x1d99ef = { _0x577dcd: 333, _0x8e7846: 295, _0x5a0bbd: 342, _0x563e5d: 346 }, _0x2f8dab = _0x46c8, _0x187314 = _0x302d6d();
  while (!![]) {
    try {
      const _0x2e9e34 = parseInt(_0x2f8dab(_0x1d99ef._0x577dcd)) / 1 + -parseInt(_0x2f8dab(_0x1d99ef._0x8e7846)) / 2 + parseInt(_0x2f8dab(_0x1d99ef._0x5a0bbd)) / 3 + parseInt(_0x2f8dab(310)) / 4 + parseInt(_0x2f8dab(270)) / 5 * (parseInt(_0x2f8dab(336)) / 6) + -parseInt(_0x2f8dab(281)) / 7 * (parseInt(_0x2f8dab(_0x1d99ef._0x563e5d)) / 8) + -parseInt(_0x2f8dab(268)) / 9;
      if (_0x2e9e34 === _0x2bc8e6)
        break;
      else
        _0x187314["push"](_0x187314["shift"]());
    } catch (_0x3b5776) {
      _0x187314["push"](_0x187314["shift"]());
    }
  }
})(_0x2c6e, 130808);
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { Link, createInertiaApp, Head } from "@inertiajs/vue3";
import _0x135271 from "@inertiajs/vue3/server";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _0x5da878 from "vue3-google-login";
import { trail } from "momentum-trail";
import _0x20778d from "vue-tippy";
async function resolvePageComponent(_0x100c54, _0x11a3c4) {
  const _0x950253 = { _0x48df76: 313 }, _0xadeb9f = _0x46c8, _0x51633f = _0x11a3c4[_0x100c54];
  if (typeof _0x51633f === _0xadeb9f(_0x950253._0x48df76))
    throw new Error(_0xadeb9f(251) + _0x100c54);
  return typeof _0x51633f === _0xadeb9f(269) ? _0x51633f() : _0x51633f;
}
const style = "", NProgress = "", PageLoader_vue_vue_type_style_index_0_scoped_ded7aa19_lang = "", _export_sfc = (_0x14a03f, _0x54a154) => {
  const _0xf1ef53 = _0x46c8, _0x29b0f2 = _0x14a03f[_0xf1ef53(304)] || _0x14a03f;
  for (const [_0x859295, _0x5ee488] of _0x54a154) {
    _0x29b0f2[_0x859295] = _0x5ee488;
  }
  return _0x29b0f2;
}, _sfc_main$1 = {};
function _sfc_ssrRender$1(_0x421112, _0xb53af6, _0x10f475, _0x1fb905) {
  const _0x35ad8a = { _0x2da668: 278 }, _0x1976aa = _0x46c8;
  _0xb53af6(_0x1976aa(317) + ssrRenderAttrs(mergeProps({ "class": _0x1976aa(348) }, _0x1fb905)) + _0x1976aa(_0x35ad8a._0x2da668));
}
function _0x46c8(_0x4930cd, _0x1a0a79) {
  const _0x2c6ebc = _0x2c6e();
  return _0x46c8 = function(_0x46c81c, _0xd1db68) {
    _0x46c81c = _0x46c81c - 242;
    let _0x2d637b = _0x2c6ebc[_0x46c81c];
    return _0x2d637b;
  }, _0x46c8(_0x4930cd, _0x1a0a79);
}
const _sfc_setup$1 = _sfc_main$1[_0x4b99ea(274)];
function _0x2c6e() {
  const _0x277ef6 = ["auth/login/google/v1", "page-clicked", "2144700ZjWwva", "function", "20dNHKXg", "ssrRender", "maintenance/exit", "./assets/UpdateProfileInformationForm-a7148f68.mjs", "setup", "users/profile/{username}", "Link", "oauth/personal-access-tokens", ' data-v-ded7aa19><symbol id="svg-loader" viewBox="0 0 44 44" data-v-ded7aa19><g fill="none" fill-rule="evenodd" stroke-width="1.5" data-v-ded7aa19><circle cx="22" cy="22" r="6" stroke-opacity="0" data-v-ded7aa19><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="1.5;0" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate></circle><circle cx="22" cy="22" r="6" stroke-opacity="0" data-v-ded7aa19><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="1.5;0" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate></circle><circle cx="22" cy="22" r="1" data-v-ded7aa19><animate attributeName="r" begin="0s" dur="1.5s" values="1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite" data-v-ded7aa19></animate></circle></g></symbol></div>', "users", " - ", "37646TCQNya", "<!--]-->", ".vue", "auth/register", "button", "./assets/Edit-eb600eee.mjs", "getPageClick", "></i>", "__scopeId", "oauth/authorize", "auth/register/validate", "docs/{jsonFile?}", "./assets/Page-b04aa577.mjs", "page-link", "230034sXieeo", "discord", "564853151754-c0epg6ulhtc486gna17gr5jhp4b6re2d.apps.googleusercontent.com", "HEAD", "./assets/AccountDeleted-875a31ce.mjs", "auth/login", "add", "mb-2 section", "thumbnails/{type}/{id}", "__vccOpts", "sanctum/csrf-cookie", "./assets/Index-d03582c4.mjs", "auth/logout", "./assets/Create-17cc2494.mjs", "DELETE", "735584sbPClQ", "api.netisu.com", "./Pages/", "undefined", "./assets/Index-3f50b7af.mjs", "resources/js/Components/Loaders/PageLoader.vue", "api/documentation", "<div", "GET", "inventory/inventory/{category}", "users/online/{id}", "use", "./assets/Index-191957f3.mjs", "current_page", "users/unfollow/{user}", "fa-regular fa-chevron-right", "modules", "./assets/Login-170b1a47.mjs", "initialPage", "./assets/DeleteUserForm-12236f05.mjs", "./assets/Game-fb2e9f89.mjs", "auth/login/validate/meta-mask-api", "Laravel", "208481NJlNcM", "market/items/event/{eventId}", "./assets/Post-7aa2e276.mjs", "239496ZErCPP", "maintenance/password", "./assets/Profile-2f0409d0.mjs", "oauth/personal-access-tokens/{token_id}", "oauth/scopes", "oauth/token/refresh", "522282XhIXjD", "search", "./assets/Index-46597623.mjs", "discuss/{id}", "360TLVkKV", "maintenance", "loading-page", "component", "users/settings/{category}", "auth/forgot", "users/follow/{user}", "./assets/Index-2e9034d9.mjs", "https://netisu.com", "customize/update", "auth/login/validate/metamask", '><ul class="pagination flex-container align-center">', "./assets/functions-a559f0ec.mjs", "./assets/FeatureDisabled-4a5c8164.mjs", "resources/js/Components/Pagination.vue", "Head", "./assets/BetaWelcome-c14c5fba.mjs", "discuss/create/reply/{id}/validate", "netisu.com", "pagedata", "user/img/{id}", "last_page", "./assets/Welcome-6474d22b.mjs", "rss-feed", "docs/asset/{asset}", "./assets/UpdatePasswordForm-d60e80ca.mjs", "./assets/Create-89213e7d.mjs", "POST", "market/item/{id}", '<i class="fa-regular fa-chevron-left"', "./assets/soon-66cdda2a.mjs", "oauth/token", "Page not found: ", "market", "oauth/clients", "./assets/Index-6175707d.mjs", "(.*)", "my/dashboard", "./assets/Error-a5bed3bd.mjs", "telescope/{view?}", "<!--[-->", "messages", "users/discover", "data-v-ded7aa19", "auth/login/callback/google", "oauth/clients/{client_id}", "deletion"];
  _0x2c6e = function() {
    return _0x277ef6;
  };
  return _0x2c6e();
}
_sfc_main$1[_0x4b99ea(274)] = (_0x4a2045, _0x5ebf19) => {
  const _0x11db72 = { _0x44e7a7: 326, _0x44d05f: 301, _0xee23d3: 315 }, _0x15c251 = _0x4b99ea, _0x3666ed = useSSRContext();
  return (_0x3666ed[_0x15c251(_0x11db72._0x44e7a7)] || (_0x3666ed[_0x15c251(326)] = /* @__PURE__ */ new Set()))[_0x15c251(_0x11db72._0x44d05f)](_0x15c251(_0x11db72._0xee23d3)), _sfc_setup$1 ? _sfc_setup$1(_0x4a2045, _0x5ebf19) : void 0;
};
const PageLoader = _export_sfc(_sfc_main$1, [[_0x4b99ea(271), _sfc_ssrRender$1], [_0x4b99ea(289), _0x4b99ea(262)]]), _sfc_main = { "components": { "Link": Link }, "props": { "pagedata": { "type": Object, "required": !![], "default": () => ({ "current_page": 0, "last_page": 0, "total": 0 }) } }, "methods": { "getPageClick"(_0x2d298d) {
  const _0x3e918d = { _0x3ab46f: 365, _0x2b9973: 367 }, _0x1e9122 = _0x4b99ea;
  if (_0x2d298d >= 1 && _0x2d298d <= this[_0x1e9122(_0x3e918d._0x3ab46f)][_0x1e9122(_0x3e918d._0x2b9973)])
    return this["$emit"](_0x1e9122(267), _0x2d298d), "?page=" + _0x2d298d;
  return "";
} } };
function _sfc_ssrRender(_0x349d0b, _0x15d129, _0x469d2f, _0xd18d53, _0x38a90d, _0x3c5895, _0x3f3f78, _0x5a7fa8) {
  const _0x526939 = { _0x546444: 276, _0x3329c4: 294, _0x522fe7: 323, _0xebccc9: 282, _0x55ddc2: 323, _0x3230b7: 367, _0x4f3f8c: 285 }, _0xeb2c9b = { _0x369d63: 288, _0x68effb: 325 }, _0x1992ac = { _0x3cbd30: 248 }, _0x348386 = _0x4b99ea, _0x334ea0 = resolveComponent(_0x348386(_0x526939._0x546444));
  _0x15d129("<div" + ssrRenderAttrs(mergeProps({ "class": _0x348386(302) }, _0xd18d53)) + _0x348386(357)), _0x15d129(ssrRenderComponent(_0x334ea0, { "class": [_0x348386(_0x526939._0x3329c4), { "page-disabled": _0x38a90d["pagedata"][_0x348386(_0x526939._0x522fe7)] == 1 }], "as": _0x348386(285), "href": _0x5a7fa8["getPageClick"](_0x38a90d[_0x348386(365)]["current_page"] - 1) }, { "default": withCtx((_0x529efa, _0x5b0f87, _0x2bdfd2, _0x1f8018) => {
    const _0x36bf91 = _0x348386;
    if (_0x5b0f87)
      _0x5b0f87(_0x36bf91(_0x1992ac._0x3cbd30) + _0x1f8018 + _0x36bf91(288));
    else
      return [createVNode("i", { "class": "fa-regular fa-chevron-left" })];
  }), "_": 1 }, _0x469d2f)), _0x15d129(_0x348386(259)), ssrRenderList(_0x38a90d[_0x348386(365)][_0x348386(367)], (_0x17396a) => {
    const _0x3de251 = _0x348386;
    _0x15d129(ssrRenderComponent(_0x334ea0, { "class": ["page-link", { "page-active": _0x38a90d["pagedata"][_0x3de251(323)] == _0x17396a }], "as": "button", "key": _0x17396a, "href": _0x5a7fa8[_0x3de251(287)](_0x17396a) }, { "default": withCtx((_0x6f5b61, _0x6b53da, _0x29b663, _0x38f809) => {
      if (_0x6b53da)
        _0x6b53da("" + ssrInterpolate(_0x17396a));
      else
        return [createTextVNode(toDisplayString(_0x17396a), 1)];
    }), "_": 2 }, _0x469d2f));
  }), _0x15d129(_0x348386(_0x526939._0xebccc9)), _0x15d129(ssrRenderComponent(_0x334ea0, { "class": ["page-link", { "page-disabled": _0x38a90d["pagedata"][_0x348386(_0x526939._0x55ddc2)] == _0x38a90d[_0x348386(365)][_0x348386(_0x526939._0x3230b7)] }], "as": _0x348386(_0x526939._0x4f3f8c), "href": _0x5a7fa8[_0x348386(287)](_0x38a90d[_0x348386(365)][_0x348386(323)] + 1) }, { "default": withCtx((_0x20fb9a, _0x5454e6, _0x5232be, _0x4a7697) => {
    const _0x10c262 = _0x348386;
    if (_0x5454e6)
      _0x5454e6('<i class="fa-regular fa-chevron-right"' + _0x4a7697 + _0x10c262(_0xeb2c9b._0x369d63));
    else
      return [createVNode("i", { "class": _0x10c262(_0xeb2c9b._0x68effb) })];
  }), "_": 1 }, _0x469d2f)), _0x15d129("</ul></div>");
}
const _sfc_setup = _sfc_main[_0x4b99ea(274)];
_sfc_main[_0x4b99ea(274)] = (_0x160233, _0x4d8e70) => {
  const _0x3a70ca = _0x4b99ea, _0x981ead = useSSRContext();
  return (_0x981ead[_0x3a70ca(326)] || (_0x981ead[_0x3a70ca(326)] = /* @__PURE__ */ new Set()))[_0x3a70ca(301)](_0x3a70ca(360)), _sfc_setup ? _sfc_setup(_0x160233, _0x4d8e70) : void 0;
};
const AeoPagination = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), url = _0x4b99ea(354), port = null, defaults = [], routes = { "l5-swagger.default.api": { "uri": _0x4b99ea(316), "methods": [_0x4b99ea(318), "HEAD"] }, "l5-swagger.default.docs": { "uri": _0x4b99ea(292), "methods": ["GET", _0x4b99ea(298)] }, "l5-swagger.default.asset": { "uri": _0x4b99ea(243), "methods": [_0x4b99ea(318), _0x4b99ea(298)] }, "l5-swagger.default.oauth2_callback": { "uri": "api/oauth2-callback", "methods": [_0x4b99ea(318), _0x4b99ea(298)] }, "passport.token": { "uri": _0x4b99ea(250), "methods": ["POST"] }, "passport.authorizations.authorize": { "uri": "oauth/authorize", "methods": ["GET", "HEAD"] }, "passport.token.refresh": { "uri": _0x4b99ea(341), "methods": [_0x4b99ea(246)] }, "passport.authorizations.approve": { "uri": "oauth/authorize", "methods": ["POST"] }, "passport.authorizations.deny": { "uri": _0x4b99ea(290), "methods": ["DELETE"] }, "passport.tokens.index": { "uri": "oauth/tokens", "methods": ["GET", _0x4b99ea(298)] }, "passport.tokens.destroy": { "uri": "oauth/tokens/{token_id}", "methods": ["DELETE"] }, "passport.clients.index": { "uri": "oauth/clients", "methods": ["GET", _0x4b99ea(298)] }, "passport.clients.store": { "uri": _0x4b99ea(253), "methods": [_0x4b99ea(246)] }, "passport.clients.update": { "uri": _0x4b99ea(264), "methods": ["PUT"] }, "passport.clients.destroy": { "uri": _0x4b99ea(264), "methods": [_0x4b99ea(309)] }, "passport.scopes.index": { "uri": _0x4b99ea(340), "methods": [_0x4b99ea(318), _0x4b99ea(298)] }, "passport.personal.tokens.index": { "uri": _0x4b99ea(277), "methods": ["GET", "HEAD"] }, "passport.personal.tokens.store": { "uri": _0x4b99ea(277), "methods": [_0x4b99ea(246)] }, "passport.personal.tokens.destroy": { "uri": _0x4b99ea(339), "methods": [_0x4b99ea(309)] }, "sanctum.csrf-cookie": { "uri": _0x4b99ea(305), "methods": [_0x4b99ea(318), _0x4b99ea(298)] }, "telescope": { "uri": _0x4b99ea(258), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "wheres": { "view": _0x4b99ea(255) } }, "api.": { "uri": "/", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "api.netisu.com" }, "api.messages": { "uri": "messages", "methods": ["GET", "HEAD"], "domain": _0x4b99ea(311) }, "api.new": { "uri": _0x4b99ea(260), "methods": ["POST"], "domain": "api.netisu.com" }, "api.search": { "uri": _0x4b99ea(343), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "api.avatar": { "uri": _0x4b99ea(366), "methods": ["GET", "HEAD"], "domain": _0x4b99ea(311) }, "api.user.": { "uri": _0x4b99ea(279), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "api.netisu.com" }, "api.user.online": { "uri": _0x4b99ea(320), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "api.user.follow": { "uri": _0x4b99ea(352), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "api.netisu.com", "bindings": { "user": "id" } }, "api.user.unfollow": { "uri": _0x4b99ea(324), "methods": [_0x4b99ea(246)], "domain": "api.netisu.com", "bindings": { "user": "id" } }, "api.store.": { "uri": _0x4b99ea(252), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "api.store.items": { "uri": "market/items/{category}", "methods": ["GET", _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "api.store.event.items": { "uri": _0x4b99ea(334), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "api.avatar.": { "uri": "inventory", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "api.avatar.items": { "uri": _0x4b99ea(319), "methods": [_0x4b99ea(318), "HEAD"], "domain": _0x4b99ea(311) }, "api.rss": { "uri": _0x4b99ea(242), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "api.netisu.com" }, "api.thumbnails": { "uri": _0x4b99ea(303), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(311) }, "maintenance.page": { "uri": _0x4b99ea(347), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "maintenance.authenticate.password": { "uri": _0x4b99ea(337), "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "maintenance.exit": { "uri": _0x4b99ea(272), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "my.dashboard.page": { "uri": "my/dashboard", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "my.dashboard.validate": { "uri": _0x4b99ea(256), "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "user.page": { "uri": _0x4b99ea(261), "methods": ["GET", _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "user.profile": { "uri": _0x4b99ea(275), "methods": ["GET", "HEAD"], "domain": _0x4b99ea(364) }, "user.settings.page": { "uri": _0x4b99ea(350), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "user.settings.update": { "uri": "users/settings/update", "methods": ["PATCH"], "domain": _0x4b99ea(364) }, "user.settings.destroy": { "uri": "users/settings/delete-account", "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "avatar.page": { "uri": "customize", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "avatar.update": { "uri": _0x4b99ea(355), "methods": ["POST"], "domain": "netisu.com" }, "forum.page": { "uri": _0x4b99ea(345), "methods": ["GET", _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "forum.post": { "uri": "discuss/post/{id}/{slug}", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "forum.create.page": { "uri": "discuss/create/{id}", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "forum.create.validate": { "uri": "discuss/create/{id}/validate", "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "forum.reply.validate": { "uri": _0x4b99ea(363), "methods": ["POST"], "domain": _0x4b99ea(364) }, "auth.logout": { "uri": _0x4b99ea(307), "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "auth.language": { "uri": "auth/set-language/{language}", "methods": [_0x4b99ea(318), "HEAD"], "domain": _0x4b99ea(364) }, "auth.login.google": { "uri": _0x4b99ea(266), "methods": ["GET", "HEAD"], "domain": _0x4b99ea(364) }, "auth.login.google.validation": { "uri": _0x4b99ea(263), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "auth.login.page": { "uri": _0x4b99ea(300), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "auth.login.validate": { "uri": "auth/login/validate", "methods": [_0x4b99ea(246)], "domain": "netisu.com" }, "auth.login.metamask": { "uri": _0x4b99ea(356), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": "netisu.com" }, "auth.login.metamask.validation": { "uri": _0x4b99ea(331), "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "auth.register.page": { "uri": _0x4b99ea(284), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "auth.register.validate": { "uri": _0x4b99ea(291), "methods": [_0x4b99ea(246)], "domain": _0x4b99ea(364) }, "auth.forgot.page": { "uri": _0x4b99ea(351), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "Welcome": { "uri": "/", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "games.Game": { "uri": "games", "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "removed": { "uri": _0x4b99ea(265), "methods": ["GET", _0x4b99ea(298)], "domain": "netisu.com" }, "store.page": { "uri": _0x4b99ea(252), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "store.item": { "uri": _0x4b99ea(247), "methods": [_0x4b99ea(318), _0x4b99ea(298)], "domain": _0x4b99ea(364) }, "test": { "uri": _0x4b99ea(296), "methods": ["GET", _0x4b99ea(298)], "domain": _0x4b99ea(364) } }, wildcards = { "l5-swagger.*": [], "l5-swagger.default.*": [], "passport.*": [], "passport.authorizations.*": [], "passport.token.*": [], "passport.tokens.*": [], "passport.clients.*": [], "passport.scopes.*": [], "passport.personal.*": [], "passport.personal.tokens.*": [], "sanctum.*": [], "api.*": [], "api.user.*": [], "api.store.*": [], "api.store.event.*": [], "api.avatar.*": [], "maintenance.*": [], "maintenance.authenticate.*": [], "my.*": [], "my.dashboard.*": [], "user.*": [], "user.settings.*": [], "avatar.*": [], "forum.*": [], "forum.create.*": [], "forum.reply.*": [], "auth.*": [], "auth.login.*": [], "auth.login.google.*": [], "auth.login.metamask.*": [], "auth.register.*": [], "auth.forgot.*": [], "games.*": [], "store.*": [] }, routes$1 = { "url": url, "port": port, "defaults": defaults, "routes": routes, "wildcards": wildcards }, appName = _0x4b99ea(332);
_0x135271((_0x22a015) => createInertiaApp({ "page": _0x22a015, "render": renderToString, "progress": { "includeCSS": !![], "showSpinner": ![] }, "title": (_0x1609b5) => _0x1609b5 + _0x4b99ea(280) + appName, "resolve": (_0xf92118) => resolvePageComponent(_0x4b99ea(312) + _0xf92118 + _0x4b99ea(283), Object["assign"]({ "./Pages/AccountDeleted.vue": () => import(_0x4b99ea(299)), "./Pages/Admin/Page.vue": () => import(_0x4b99ea(293)), "./Pages/Admin/soon.vue": () => import(_0x4b99ea(249)), "./Pages/App/Error.vue": () => import(_0x4b99ea(257)), "./Pages/App/FeatureDisabled.vue": () => import(_0x4b99ea(359)), "./Pages/Authentication/Create.vue": () => import(_0x4b99ea(308)), "./Pages/Authentication/Forgot.vue": () => import("./assets/Forgot-76ee9567.mjs"), "./Pages/Authentication/Login.vue": () => import(_0x4b99ea(327)), "./Pages/BetaWelcome.vue": () => import(_0x4b99ea(362)), "./Pages/Customize/Index.vue": () => import(_0x4b99ea(344)), "./Pages/Customize/functions.vue": () => import(_0x4b99ea(358)), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-8cbd264f.mjs"), "./Pages/Forum/Create.vue": () => import(_0x4b99ea(245)), "./Pages/Forum/Index.vue": () => import(_0x4b99ea(314)), "./Pages/Forum/Post.vue": () => import(_0x4b99ea(335)), "./Pages/Games/Game.vue": () => import(_0x4b99ea(330)), "./Pages/Games/Index.vue": () => import(_0x4b99ea(254)), "./Pages/Maintenance/Development.vue": () => import("./assets/Development-a8ed7e68.mjs"), "./Pages/Maintenance/Index.vue": () => import(_0x4b99ea(306)), "./Pages/Settings/Edit.vue": () => import(_0x4b99ea(286)), "./Pages/Settings/Partials/DeleteUserForm.vue": () => import(_0x4b99ea(329)), "./Pages/Settings/Partials/UpdatePasswordForm.vue": () => import(_0x4b99ea(244)), "./Pages/Settings/Partials/UpdateProfileInformationForm.vue": () => import(_0x4b99ea(273)), "./Pages/Store/Index.vue": () => import(_0x4b99ea(353)), "./Pages/Store/Item.vue": () => import("./assets/Item-fc18a962.mjs"), "./Pages/Users/Index.vue": () => import(_0x4b99ea(322)), "./Pages/Users/Profile.vue": () => import(_0x4b99ea(338)), "./Pages/Welcome.vue": () => import(_0x4b99ea(368)) })), "setup"({ App: _0x475687, props: _0x531a12, plugin: _0xb4b113 }) {
  const _0xb27204 = { _0x2ed222: 321 }, _0x322dbe = _0x4b99ea;
  return createSSRApp({ "render": () => h(_0x475687, _0x531a12) })["use"](_0xb4b113)[_0x322dbe(321)](trail, { "routes": routes$1, "url": _0x531a12[_0x322dbe(328)]["url"] })[_0x322dbe(_0xb27204._0x2ed222)](_0x20778d)[_0x322dbe(321)](_0x5da878, { "clientId": _0x322dbe(297) })[_0x322dbe(349)]("PageLoader", PageLoader)[_0x322dbe(349)]("AeoPagination", AeoPagination)[_0x322dbe(349)](_0x322dbe(361), Head)["component"]("Link", Link);
} }));
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
export {
  AeoPagination as A,
  _export_sfc as _
};
