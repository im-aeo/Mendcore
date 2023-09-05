const _0x11ed20 = _0x4b87;
(function(_0x23194a, _0x530cd5) {
  const _0x5d5972 = { _0x2716fc: 267, _0x3b7ebd: 285, _0x218329: 202, _0x4678b2: 254, _0x38503: 207 }, _0x325e70 = _0x4b87, _0x535ee4 = _0x23194a();
  while (!![]) {
    try {
      const _0x287b07 = parseInt(_0x325e70(289)) / 1 * (parseInt(_0x325e70(227)) / 2) + -parseInt(_0x325e70(262)) / 3 + -parseInt(_0x325e70(273)) / 4 * (parseInt(_0x325e70(_0x5d5972._0x2716fc)) / 5) + parseInt(_0x325e70(253)) / 6 * (-parseInt(_0x325e70(_0x5d5972._0x3b7ebd)) / 7) + -parseInt(_0x325e70(224)) / 8 * (parseInt(_0x325e70(_0x5d5972._0x218329)) / 9) + parseInt(_0x325e70(_0x5d5972._0x4678b2)) / 10 * (-parseInt(_0x325e70(286)) / 11) + parseInt(_0x325e70(233)) / 12 * (parseInt(_0x325e70(_0x5d5972._0x38503)) / 13);
      if (_0x287b07 === _0x530cd5)
        break;
      else
        _0x535ee4["push"](_0x535ee4["shift"]());
    } catch (_0x527476) {
      _0x535ee4["push"](_0x535ee4["shift"]());
    }
  }
})(_0x42f1, 483789);
import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _0x23de07 } from "./Navbar-cfe40770.mjs";
import { _ as _0x26ce90 } from "./Sidebar-d98a6955.mjs";
import { _ as _0x1f9255 } from "./ForumSidebar-243eeb05.mjs";
function _0x4b87(_0x486332, _0x460589) {
  const _0x42f1ba = _0x42f1();
  return _0x4b87 = function(_0x4b875f, _0x5d3343) {
    _0x4b875f = _0x4b875f - 201;
    let _0x42191f = _0x42f1ba[_0x4b875f];
    return _0x42191f;
  }, _0x4b87(_0x486332, _0x460589);
}
import { F as _0xb4cc6f } from "./Footer-52d2ed2b.mjs";
import { _ as _0x236410 } from "./AppHead-5e63564a.mjs";
import { route } from "momentum-trail";
import "@inertiajs/vue3";
function _0x42f1() {
  const _0x291683 = ["45LPBSuw", '></div><div class="gap-2 align-middle flex-container"', "text-start", "div", "section_one", "39116493KbUAKh", "forum.page", "gap-3 text-center flex-container flex-dir-column", "gap-2 align-middle flex-container", " No Forum Posts ", '<div class="gap-3 text-center flex-container flex-dir-column"', "pathname", "img", '><div class="text-xs fw-bold text-muted text-uppercase"', "><a", "mb-2 text-sm fw-semibold", "headshot", "<!--[-->", "card", "data", '><div class="pb-0 card-body"', "text-xs fw-bold text-muted text-uppercase", "769192odnQJb", "There are currently no posts in this category.", "<!---->", "8YcVkhK", "topic", "display_name", '><div class="mx-1 my-3 divider"', "username", "src", "12ShiDay", "mx-1 my-3 divider", '<div class="text-xs text-muted fw-semibold text-body"', '><div class="mb-2 text-sm fw-semibold"', "<!--]-->", "border img-fluid headshot rounded-circle border-secondary bg-dark", "posts", "text-5xl fas fa-message-xmark text-muted", '" class="border img-fluid headshot rounded-circle border-secondary bg-dark" alt="2oddMacs1"', "resources/js/Pages/Forum/Index.vue", "Here, You can discuss with the community surrounding several topics on Vestora.", "Link", "section_two", "text-xs text-muted fw-semibold text-body", "></div></div></div></div>", "cell medium-9", '<div class="cell medium-3"', '><i class="text-5xl fas fa-message-xmark text-muted"', ">There are currently no posts in this category.</p></div></div></div>", "DateHum", "152244BtDlZy", "20fovALZ", "Index", "text-muted fw-semibold", "location", "seo", "section_three", "cell medium-3", "href", "1940430oKAbeo", "user.profile", "pb-0 card-body", "><img", "text-sm fw-semibold text-body", "5kcKzXs", "modules", "mb-3 row thread", "65px", " • ", "> @", "2379844aSIIXp", '<!--]--><div class="mx-1 my-3 divider"', "column", "setup", "Discuss", "length", "add", "16px", "name", '</div><div class="cell medium-9"', "2oddMacs1", '><div class="text-start"', "259dcPdbq", "2520727XGFUoO", "flex-wrap col-md-4 d-flex justify-content-center align-content-start", "text-md", "148624XmhiCm", ' style="', '><p class="text-xs"', "description"];
  _0x42f1 = function() {
    return _0x291683;
  };
  return _0x42f1();
}
import "axios";
import "./_plugin-vue_export-helper-7d6fdb2f.mjs";
import "dayjs";
const __default__ = { "props": { "topic": Object, "posts": Object, "section_one": Object, "section_two": Object, "section_three": Object }, "methods": { "getCurrentpath"(_0x2e3e3b) {
  const _0x41c259 = { _0x5e7b1b: 208, _0x41bc05: 257 }, _0x1e1d94 = _0x4b87;
  if (route(_0x1e1d94(_0x41c259._0x5e7b1b), { "id": _0x2e3e3b }) === window["location"][_0x1e1d94(261)])
    return window[_0x1e1d94(_0x41c259._0x41bc05)][_0x1e1d94(213)];
} } }, _sfc_main = defineComponent({ ...__default__, "__name": _0x11ed20(255), "__ssrInlineRender": !![], "setup"(_0x545771) {
  const _0x1c74e5 = { _0x3cf718: 277, _0x17a946: 208 }, _0x45a711 = { _0x1a525d: 206, _0x2b0e20: 245, _0x3e28f5: 236, _0x49dbc6: 228, _0x44d4fc: 201, _0x48626d: 221, _0x17518a: 250, _0x2bec00: 280, _0x31db36: 215, _0x369333: 251, _0x379868: 226, _0x5bc804: 219, _0x32b8c3: 205, _0x2e158a: 260, _0x366be0: 206, _0xe2f9f2: 259, _0x4e4f67: 205, _0x471bd8: 271, _0x2d2447: 205, _0x3a60fd: 278, _0x20081d: 209, _0xfd64bf: 225, _0x3c292a: 205 };
  return (_0x244b3a, _0x35bf6f, _0x5974a6, _0x23dfa1) => {
    const _0x5d18a8 = { _0xfde6e: 234, _0xa1189a: 210, _0x58af10: 263, _0x1191b1: 214, _0x45fe66: 205, _0x3f5966: 287, _0x55190a: 288, _0x53e14f: 205, _0x25a9d1: 261, _0x5d54a3: 231 }, _0x412e4a = _0x4b87, _0x3e2e73 = resolveComponent(_0x412e4a(244));
    _0x35bf6f("<!--[-->"), _0x35bf6f(ssrRenderComponent(_0x236410, { "pageTitle": _0x412e4a(_0x1c74e5._0x3cf718), "description": _0x412e4a(243), "url": unref(route)(_0x412e4a(_0x1c74e5._0x17a946), { "id": _0x545771["topic"]["id"] }) }, null, _0x5974a6)), _0x35bf6f(ssrRenderComponent(_0x23de07, null, null, _0x5974a6)), _0x35bf6f(ssrRenderComponent(_0x26ce90, null, { "default": withCtx((_0x17cf23, _0x430765, _0x1c192a, _0x4081ba) => {
      const _0x1c1116 = { _0x136a87: 230, _0x136236: 203, _0xf47cec: 231, _0x104259: 265, _0x12bf23: 275, _0x1ab80d: 258, _0x52aea8: 288, _0x56568f: 231, _0x564771: 272 }, _0x4121f8 = { _0x331aba: 281 }, _0x4bc8c2 = _0x412e4a;
      if (_0x430765)
        _0x430765(_0x4bc8c2(249) + _0x4081ba + ">"), _0x430765(ssrRenderComponent(_0x1f9255, { "topic": _0x545771[_0x4bc8c2(228)], "section_one": _0x545771[_0x4bc8c2(_0x45a711._0x1a525d)], "section_two": _0x545771[_0x4bc8c2(_0x45a711._0x2b0e20)], "section_three": _0x545771[_0x4bc8c2(259)] }, null, _0x1c192a, _0x4081ba)), _0x430765(_0x4bc8c2(282) + _0x4081ba + _0x4bc8c2(_0x45a711._0x3e28f5) + _0x4081ba + ">" + ssrInterpolate(_0x545771[_0x4bc8c2(_0x45a711._0x49dbc6)][_0x4bc8c2(281)]) + _0x4bc8c2(271) + ssrInterpolate(_0x545771[_0x4bc8c2(228)][_0x4bc8c2(_0x45a711._0x44d4fc)]) + '</div><div class="card"' + _0x4081ba + _0x4bc8c2(222) + _0x4081ba + ">"), !_0x545771[_0x4bc8c2(239)][_0x4bc8c2(_0x45a711._0x48626d)]["length"] ? _0x430765(_0x4bc8c2(212) + _0x4081ba + _0x4bc8c2(_0x45a711._0x17518a) + _0x4081ba + '></i><div style="' + ssrRenderStyle({ "line-height": _0x4bc8c2(_0x45a711._0x2bec00) }) + '"' + _0x4081ba + _0x4bc8c2(_0x45a711._0x31db36) + _0x4081ba + '> No Forum Posts </div><div class="text-muted fw-semibold"' + _0x4081ba + _0x4bc8c2(291) + _0x4081ba + _0x4bc8c2(_0x45a711._0x369333)) : _0x430765(_0x4bc8c2(_0x45a711._0x379868)), _0x430765(_0x4bc8c2(_0x45a711._0x5bc804)), ssrRenderList(_0x545771[_0x4bc8c2(239)]["data"], (_0x3e0a7b) => {
          const _0x3367be = { _0xc49e9b: 229, _0x4e9d9e: 271, _0x223d4b: 271 }, _0x4c0812 = _0x4bc8c2;
          _0x430765('<div class="mb-3 row thread"' + _0x4081ba + _0x4c0812(_0x1c1116._0x136a87) + _0x4081ba + _0x4c0812(_0x1c1116._0x136236) + _0x4081ba + _0x4c0812(216) + ssrRenderAttr(_0x4c0812(261), unref(route)(_0x4c0812(263), { "username": _0x3e0a7b[_0x4c0812(_0x1c1116._0xf47cec)] })) + _0x4081ba + _0x4c0812(_0x1c1116._0x104259) + ssrRenderAttr("src", _0x3e0a7b["headshot"]) + _0x4c0812(290) + ssrRenderStyle({ "max-width": "65px" }) + _0x4c0812(241) + _0x4081ba + '></a><div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="' + ssrRenderStyle({ "flex-direction": _0x4c0812(_0x1c1116._0x12bf23) }) + '"' + _0x4081ba + _0x4c0812(284) + _0x4081ba + ">"), _0x430765(ssrRenderComponent(_0x3e2e73, { "href": unref(route)("forum.post", { "id": _0x3e0a7b["id"], "slug": _0x3e0a7b[_0x4c0812(_0x1c1116._0x1ab80d)] }), "class": _0x4c0812(_0x1c1116._0x52aea8) }, { "default": withCtx((_0x3a9a9d, _0x44058f, _0xd44351, _0x5cea33) => {
            const _0x39c4cf = _0x4c0812;
            if (_0x44058f)
              _0x44058f("" + ssrInterpolate(_0x3e0a7b[_0x39c4cf(_0x4121f8._0x331aba)]));
            else
              return [createTextVNode(toDisplayString(_0x3e0a7b[_0x39c4cf(_0x4121f8._0x331aba)]), 1)];
          }), "_": 2 }, _0x1c192a, _0x4081ba)), _0x430765("<div" + _0x4081ba + "></div>"), _0x430765(ssrRenderComponent(_0x3e2e73, { "href": unref(route)(_0x4c0812(263), { "username": _0x3e0a7b[_0x4c0812(_0x1c1116._0x56568f)] }), "class": _0x4c0812(266) }, { "default": withCtx((_0x1d675d, _0x118432, _0x486d0d, _0xbedb37) => {
            const _0x5176fb = _0x4c0812;
            if (_0x118432)
              _0x118432(ssrInterpolate(_0x3e0a7b[_0x5176fb(_0x3367be._0xc49e9b)]) + _0x5176fb(_0x3367be._0x4e9d9e) + ssrInterpolate(_0x3e0a7b["DateHum"]));
            else
              return [createTextVNode(toDisplayString(_0x3e0a7b[_0x5176fb(229)]) + _0x5176fb(_0x3367be._0x223d4b) + toDisplayString(_0x3e0a7b[_0x5176fb(252)]), 1)];
          }), "_": 2 }, _0x1c192a, _0x4081ba)), _0x430765(_0x4c0812(235) + _0x4081ba + _0x4c0812(_0x1c1116._0x564771) + ssrInterpolate(_0x3e0a7b[_0x4c0812(_0x1c1116._0x56568f)]) + "</div></div></div></div></div>");
        }), _0x430765(_0x4bc8c2(274) + _0x4081ba + _0x4bc8c2(247));
      else
        return [createVNode(_0x4bc8c2(_0x45a711._0x32b8c3), { "class": _0x4bc8c2(_0x45a711._0x2e158a) }, [createVNode(_0x1f9255, { "topic": _0x545771["topic"], "section_one": _0x545771[_0x4bc8c2(_0x45a711._0x366be0)], "section_two": _0x545771[_0x4bc8c2(_0x45a711._0x2b0e20)], "section_three": _0x545771[_0x4bc8c2(_0x45a711._0xe2f9f2)] }, null, 8, [_0x4bc8c2(228), "section_one", _0x4bc8c2(245), "section_three"])]), createVNode(_0x4bc8c2(_0x45a711._0x4e4f67), { "class": _0x4bc8c2(248) }, [createVNode("div", { "class": _0x4bc8c2(217) }, toDisplayString(_0x545771[_0x4bc8c2(228)]["name"]) + _0x4bc8c2(_0x45a711._0x471bd8) + toDisplayString(_0x545771["topic"]["description"]), 1), createVNode(_0x4bc8c2(_0x45a711._0x2d2447), { "class": _0x4bc8c2(220) }, [createVNode(_0x4bc8c2(205), { "class": _0x4bc8c2(264) }, [!_0x545771["posts"][_0x4bc8c2(_0x45a711._0x48626d)][_0x4bc8c2(_0x45a711._0x3a60fd)] ? (openBlock(), createBlock(_0x4bc8c2(_0x45a711._0x2d2447), { "key": 0, "class": _0x4bc8c2(_0x45a711._0x20081d) }, [createVNode("i", { "class": _0x4bc8c2(240) }), createVNode(_0x4bc8c2(_0x45a711._0x4e4f67), { "style": { "line-height": "16px" } }, [createVNode("div", { "class": _0x4bc8c2(223) }, _0x4bc8c2(211)), createVNode("div", { "class": _0x4bc8c2(256) }, [createVNode("p", { "class": "text-xs" }, _0x4bc8c2(_0x45a711._0xfd64bf))])])])) : createCommentVNode("", !![]), (openBlock(!![]), createBlock(Fragment, null, renderList(_0x545771["posts"]["data"], (_0xb2e483) => {
          const _0x394380 = _0x4bc8c2;
          return openBlock(), createBlock(_0x394380(205), { "class": _0x394380(269) }, [createVNode(_0x394380(205), { "class": _0x394380(_0x5d18a8._0xfde6e) }), createVNode("div", { "class": _0x394380(_0x5d18a8._0xa1189a) }, [createVNode("a", { "href": unref(route)(_0x394380(_0x5d18a8._0x58af10), { "username": _0xb2e483[_0x394380(231)] }) }, [createVNode(_0x394380(_0x5d18a8._0x1191b1), { "src": _0xb2e483[_0x394380(218)], "style": { "max-width": _0x394380(270) }, "class": _0x394380(238), "alt": _0x394380(283) }, null, 8, [_0x394380(232)])], 8, [_0x394380(261)]), createVNode(_0x394380(_0x5d18a8._0x45fe66), { "class": _0x394380(_0x5d18a8._0x3f5966), "style": { "flex-direction": _0x394380(275) } }, [createVNode("div", { "class": _0x394380(204) }, [createVNode(_0x3e2e73, { "href": unref(route)("forum.post", { "id": _0xb2e483["id"], "slug": _0xb2e483["seo"] }), "class": _0x394380(_0x5d18a8._0x55190a) }, { "default": withCtx(() => [createTextVNode(toDisplayString(_0xb2e483["name"]), 1)]), "_": 2 }, 1032, [_0x394380(261)]), createVNode(_0x394380(_0x5d18a8._0x53e14f)), createVNode(_0x3e2e73, { "href": unref(route)(_0x394380(263), { "username": _0xb2e483[_0x394380(231)] }), "class": _0x394380(266) }, { "default": withCtx(() => [createTextVNode(toDisplayString(_0xb2e483["display_name"]) + _0x394380(271) + toDisplayString(_0xb2e483[_0x394380(252)]), 1)]), "_": 2 }, 1032, [_0x394380(_0x5d18a8._0x25a9d1)]), createVNode("div", { "class": _0x394380(246) }, " @" + toDisplayString(_0xb2e483[_0x394380(_0x5d18a8._0x5d54a3)]), 1)])])])]);
        }), 256)), createVNode(_0x4bc8c2(_0x45a711._0x3c292a), { "class": "mx-1 my-3 divider" })])])])];
    }), "_": 1 }, _0x5974a6)), _0x35bf6f(ssrRenderComponent(_0xb4cc6f, null, null, _0x5974a6)), _0x35bf6f(_0x412e4a(237));
  };
} }), _sfc_setup = _sfc_main[_0x11ed20(276)];
_sfc_main["setup"] = (_0x158983, _0x555093) => {
  const _0x436114 = { _0x7ae5b3: 268, _0x1d7309: 279, _0x15e3a9: 242 }, _0x6b7bd3 = _0x11ed20, _0x2765b0 = useSSRContext();
  return (_0x2765b0[_0x6b7bd3(268)] || (_0x2765b0[_0x6b7bd3(_0x436114._0x7ae5b3)] = /* @__PURE__ */ new Set()))[_0x6b7bd3(_0x436114._0x1d7309)](_0x6b7bd3(_0x436114._0x15e3a9)), _sfc_setup ? _sfc_setup(_0x158983, _0x555093) : void 0;
};
export {
  _sfc_main as default
};
