import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-27c1e422.mjs";
import { S as Sidebar } from "./Sidebar-18a842f2.mjs";
import { _ as _sfc_main$2 } from "./Footer-b7f961b4.mjs";
import "@inertiajs/vue3";
import "momentum-trail";
import "../ssr.mjs";
import "vue-skeletor";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "vue-tippy";
import "v-lazy-image";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cell medium-3"${_scopeId}><div class="mb-2 text-xl fw-semibold"${_scopeId}>Games</div><ul class="tabs flex-dir-column"${_scopeId}><li class="tab-item"${_scopeId}><a href="#" class="tab-link active squish"${_scopeId}>Recent</a></li><p class="text-xl"${_scopeId}>Categories</p><li class="tab-item"${_scopeId}><a href="#" class="tab-link squish"${_scopeId}>Adventure </a></li><li class="tab-item"${_scopeId}><a href="#" class="tab-link squish"${_scopeId}>Comedy</a></li></ul></div><div class="cell medium-8"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "cell medium-3" }, [
                createVNode("div", { class: "mb-2 text-xl fw-semibold" }, "Games"),
                createVNode("ul", { class: "tabs flex-dir-column" }, [
                  createVNode("li", { class: "tab-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "tab-link active squish"
                    }, "Recent")
                  ]),
                  createVNode("p", { class: "text-xl" }, "Categories"),
                  createVNode("li", { class: "tab-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "tab-link squish"
                    }, "Adventure ")
                  ]),
                  createVNode("li", { class: "tab-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "tab-link squish"
                    }, "Comedy")
                  ])
                ])
              ]),
              createVNode("div", { class: "cell medium-8" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Games/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};