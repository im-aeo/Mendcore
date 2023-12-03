const _0x5a6c7d = _0x3f16;
(function(_0x2e6219, _0x1e1156) {
  const _0x5a9a3f = { _0x300a18: 341, _0x87a23f: 319, _0x1e102e: 351, _0x2a42cd: 306 }, _0x5707f3 = _0x3f16, _0x1375c0 = _0x2e6219();
  while (!![]) {
    try {
      const _0x2d8b7d = parseInt(_0x5707f3(333)) / 1 * (-parseInt(_0x5707f3(354)) / 2) + -parseInt(_0x5707f3(358)) / 3 * (parseInt(_0x5707f3(336)) / 4) + parseInt(_0x5707f3(_0x5a9a3f._0x300a18)) / 5 * (-parseInt(_0x5707f3(_0x5a9a3f._0x87a23f)) / 6) + parseInt(_0x5707f3(_0x5a9a3f._0x1e102e)) / 7 * (-parseInt(_0x5707f3(295)) / 8) + -parseInt(_0x5707f3(268)) / 9 * (-parseInt(_0x5707f3(376)) / 10) + -parseInt(_0x5707f3(308)) / 11 * (-parseInt(_0x5707f3(_0x5a9a3f._0x2a42cd)) / 12) + parseInt(_0x5707f3(273)) / 13 * (parseInt(_0x5707f3(276)) / 14);
      if (_0x2d8b7d === _0x1e1156)
        break;
      else
        _0x1375c0["push"](_0x1375c0["shift"]());
    } catch (_0x41b8cf) {
      _0x1375c0["push"](_0x1375c0["shift"]());
    }
  }
})(_0x18c0, 971036);
function _0x3f16(_0x1f8ca4, _0x5b61d2) {
  const _0x18c007 = _0x18c0();
  return _0x3f16 = function(_0x3f1621, _0x3cf6a9) {
    _0x3f1621 = _0x3f1621 - 264;
    let _0x126e02 = _0x18c007[_0x3f1621];
    return _0x126e02;
  }, _0x3f16(_0x1f8ca4, _0x5b61d2);
}
import { defineComponent, mergeProps, unref, useSSRContext, ref, watch, computed, withCtx, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { usePage, router, Link } from "@inertiajs/vue3";
import _0x4dc3e6 from "axios";
import { route, current } from "momentum-trail";
const __default__$1 = { "props": { "locales": Object }, "methods": { "showModal"(_0x3c1e8f) {
  const _0x4f832c = { _0x47fc56: 345 }, _0x409a2c = _0x3f16, _0x3ec659 = document[_0x409a2c(_0x4f832c._0x47fc56)](_0x3c1e8f);
  _0x3ec659 && _0x3ec659[_0x409a2c(326)][_0x409a2c(296)]("active");
}, "setLocale"(_0x1727a0) {
  const _0x4cf623 = { _0x4a56de: 356, _0x9745c2: 403 }, _0x3fafd4 = _0x3f16;
  router[_0x3fafd4(_0x4cf623._0x4a56de)](route(_0x3fafd4(_0x4cf623._0x9745c2), { "language": _0x1727a0 }));
} } }, _sfc_main$1 = defineComponent({ ...__default__$1, "__name": _0x5a6c7d(367), "__ssrInlineRender": !![], "setup"(_0xcb6281) {
  const _0xd20e30 = { _0x52c2ab: 297 }, _0x4bf1cf = { _0x96a0d2: 340, _0x59d9fe: 369, _0x5b2494: 405, _0x3cb21: 279, _0x4cb7ba: 414 }, _0x34d1a7 = _0x5a6c7d, _0x213988 = usePage()["props"][_0x34d1a7(_0xd20e30._0x52c2ab)], _0x19a9c7 = usePage()["props"][_0x34d1a7(314)];
  return (_0x18d875, _0x48a8cb, _0x48358f, _0x49a1b4) => {
    const _0x3df3bb = { _0x48eb40: 338, _0x503292: 290, _0x438f10: 291, _0x3e2393: 402 }, _0x599389 = _0x34d1a7;
    _0x48a8cb(_0x599389(385) + ssrRenderAttrs(mergeProps({ "class": _0x599389(_0x4bf1cf._0x96a0d2), "id": "LanguageSettings" }, _0x49a1b4)) + _0x599389(_0x4bf1cf._0x59d9fe) + ssrRenderStyle({ "margin-right": _0x599389(_0x4bf1cf._0x5b2494) }) + _0x599389(_0x4bf1cf._0x3cb21)), ssrRenderList(unref(_0x19a9c7), (_0x11d278, _0x35f479) => {
      const _0x330414 = _0x599389;
      _0x48a8cb('<div class="cell large-6"><div class="' + ssrRenderClass([{ "language-active": unref(_0x213988) === _0x35f479 }, _0x330414(_0x3df3bb._0x48eb40)]) + _0x330414(_0x3df3bb._0x503292) + ssrRenderStyle({ "cursor": _0x330414(_0x3df3bb._0x438f10) }) + _0x330414(_0x3df3bb._0x3e2393) + ssrRenderStyle({ "min-width": "0" }) + '"><div class="selection-circle language"><i class="fa-solid fa-check"></i></div><div class="text-lg fw-semibold text-truncate">' + ssrInterpolate(_0x11d278) + "</div></div></div></div></div>");
    }), _0x48a8cb(_0x599389(_0x4bf1cf._0x4cb7ba));
  };
} }), _sfc_setup$1 = _sfc_main$1["setup"];
_sfc_main$1[_0x5a6c7d(269)] = (_0x1c2859, _0x5b454f) => {
  const _0x4f87ab = { _0xf22d05: 285, _0x24c0b1: 408 }, _0x5831f0 = _0x5a6c7d, _0x10e849 = useSSRContext();
  return (_0x10e849[_0x5831f0(_0x4f87ab._0xf22d05)] || (_0x10e849["modules"] = /* @__PURE__ */ new Set()))["add"](_0x5831f0(_0x4f87ab._0x24c0b1)), _sfc_setup$1 ? _sfc_setup$1(_0x1c2859, _0x5b454f) : void 0;
};
const __default__ = { "methods": { "showModal"(_0x49e6b6) {
  const _0x446e4d = { _0xc6797b: 373 }, _0x35bb4e = _0x5a6c7d, _0x357550 = document["getElementById"](_0x49e6b6);
  _0x357550 && _0x357550["classList"]["toggle"](_0x35bb4e(_0x446e4d._0xc6797b));
}, "addActiveClass"(_0x39eb09) {
  const _0x40ff6b = { _0x296c8d: 326 }, _0x172611 = _0x5a6c7d, _0xdfd77b = document["getElementById"](_0x39eb09);
  _0xdfd77b && _0xdfd77b[_0x172611(_0x40ff6b._0x296c8d)]["toggle"](_0x172611(373));
}, "sidebarOpen"() {
  const _0x2972bf = { _0x3b193f: 270, _0x9cb1b9: 326 }, _0x26a86d = _0x5a6c7d, _0x36a0b7 = document[_0x26a86d(345)](_0x26a86d(_0x2972bf._0x3b193f));
  _0x36a0b7 && _0x36a0b7[_0x26a86d(_0x2972bf._0x9cb1b9)]["toggle"]("show-for-large");
}, "addActiveClassSSInput"(_0x33cf01) {
  const _0x474901 = { _0x19a713: 311 }, _0x295635 = _0x5a6c7d, _0x595a15 = document[_0x295635(345)](_0x33cf01), _0x5000cb = (_0x4eab98) => !_0x4eab98[_0x295635(339)]()[_0x295635(406)];
  _0x595a15 && _0x595a15[_0x295635(_0x474901._0x19a713)]("input", function() {
    const _0x1e6417 = _0x295635;
    if (_0x5000cb(this["value"]))
      return;
    else
      _0x595a15[_0x1e6417(326)][_0x1e6417(296)](_0x1e6417(382));
  });
} } }, _sfc_main = defineComponent({ ...__default__, "__name": "Navbar", "__ssrInlineRender": !![], "props": { "isActive": { "type": Boolean, "default": ![] }, "chat_toggle": { "type": Boolean, "default": ![] } }, "setup"(_0xf33a7f) {
  const _0x27d026 = { _0x430b6d: 399, _0x346b91: 360, _0x3b49a6: 305, _0x663a60: 393, _0x356001: 286, _0x59dac6: 344 }, _0x1cf355 = { _0x2f1a23: 343, _0x2b46a1: 417, _0x53a82b: 398, _0x35e818: 265, _0x4196de: 320, _0x7dd783: 412, _0x4b75b3: 416, _0x3c8f2c: 315, _0x4be224: 378, _0x4c8aae: 292, _0x372086: 303, _0x18e340: 352, _0x3bc227: 277, _0x3bdc06: 400, _0x562f3a: 320, _0x84e445: 348, _0x3907c5: 320, _0x4d6dc7: 320, _0xaa7854: 418, _0x4880cd: 334, _0x52f801: 329, _0x127996: 412, _0x33e04e: 412, _0x496cf0: 418, _0x525111: 412, _0x387dc6: 412, _0x49f1d0: 418, _0x1e205e: 416, _0x16b8e7: 418, _0x2d5471: 318, _0x534b09: 304, _0x1e6f6a: 416, _0xad0f7f: 384, _0x119f83: 312, _0x13a616: 312, _0x955191: 266, _0x5df76b: 293, _0x133153: 264 }, _0x5bd974 = { _0x4650e4: 381, _0x22d6c4: 410 }, _0x54a8c9 = { _0x3b885c: 292 }, _0x3fac90 = { _0x343cca: 377, _0x422aca: 386, _0x2559e6: 379, _0x2ba631: 288, _0x338174: 419, _0x5e7f10: 422, _0x5bce13: 412 }, _0x293ed8 = { _0x42a7fe: 398, _0x4fbb97: 398 }, _0xcc484f = { _0x306587: 398, _0x3825ff: 321, _0x3966d9: 283 }, _0x445856 = { _0xdc4122: 372 }, _0x54b9e3 = _0x5a6c7d, _0x40b0ec = () => {
    const _0x5b6725 = _0x3f16;
    router[_0x5b6725(_0x445856._0xdc4122)](route(_0x5b6725(365)));
  }, _0x25bf54 = ref(""), _0x553221 = ref([]), _0x1af150 = () => {
    const _0xda6096 = _0x3f16;
    _0x25bf54[_0xda6096(398)] !== "" ? _0x4dc3e6[_0xda6096(356)](route(_0xda6096(355), { "search": _0x25bf54[_0xda6096(_0x293ed8._0x42a7fe)] }))["then"]((_0x441ec3) => {
      const _0x3487f7 = _0xda6096;
      _0x553221[_0x3487f7(_0xcc484f._0x306587)] = _0x441ec3[_0x3487f7(_0xcc484f._0x3825ff)][_0x3487f7(_0xcc484f._0x3966d9)];
    })["catch"]((_0x3c3e35) => console[_0xda6096(389)](_0x3c3e35)) : _0x553221[_0xda6096(_0x293ed8._0x4fbb97)] = [];
  };
  watch(() => _0x25bf54[_0x54b9e3(398)], () => {
    _0x1af150();
  }, { "immediate": !![] });
  const _0x4ce479 = [{ "url": "#", "active_link": "games.*", "en": { "title": _0x54b9e3(_0x27d026._0x430b6d) }, "ru": { "title": _0x54b9e3(_0x27d026._0x346b91) }, "jp": { "title": _0x54b9e3(_0x27d026._0x3b49a6) } }, { "url": route(_0x54b9e3(337)), "active_link": _0x54b9e3(316), "en": { "title": _0x54b9e3(331) }, "ru": { "title": "Рынок" }, "jp": { "title": "市場" } }, { "url": route(_0x54b9e3(_0x27d026._0x663a60), { "id": 1 }), "active_link": _0x54b9e3(302), "en": { "title": _0x54b9e3(278) }, "ru": { "title": _0x54b9e3(_0x27d026._0x356001) }, "jp": { "title": "議論" } }, { "url": "#", "active_link": _0x54b9e3(280), "en": { "title": _0x54b9e3(_0x27d026._0x59dac6) }, "ru": { "title": _0x54b9e3(404) }, "jp": { "title": "発展" } }], _0x51b08b = computed(() => usePage()[_0x54b9e3(412)][_0x54b9e3(297)]);
  return computed(() => usePage()[_0x54b9e3(412)]["auth"]["user"]), usePage(), usePage(), (_0x1efad9, _0xa21e00, _0x4210f8, _0x5ed973) => {
    const _0x435b57 = { _0x163141: 313 }, _0x4d0ea6 = { _0x2992b2: 353, _0x241128: 396 }, _0x111287 = { _0x12bc2a: 327 }, _0x42f6b5 = { _0x561f5d: 310 }, _0x4da1c4 = { _0x341918: 299, _0x541118: 388, _0x22657d: 398, _0x1c9a13: 383, _0x23890e: 350, _0x542014: 299, _0x43ac9d: 363, _0x23657d: 346 }, _0x528cae = { _0x327ee0: 289, _0x13a94a: 407 }, _0x10cbb6 = _0x54b9e3;
    _0xa21e00(_0x10cbb6(392)), _0xa21e00(ssrRenderComponent(_sfc_main$1, null, null, _0x4210f8)), _0xa21e00(_0x10cbb6(361)), _0xa21e00(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x10cbb6(390)), "class": _0x10cbb6(_0x1cf355._0x2f1a23) }, { "default": withCtx((_0x54894c, _0x465ad5, _0x47efb0, _0x14c093) => {
      const _0x525227 = _0x10cbb6;
      if (_0x465ad5)
        _0x465ad5(_0x525227(_0x3fac90._0x343cca) + ssrRenderAttr(_0x525227(294), unref(usePage)()["props"]["site"]["logo"]) + ' class="show-for-medium" width="180"' + _0x14c093 + _0x525227(287) + ssrRenderAttr(_0x525227(294), unref(usePage)()[_0x525227(412)][_0x525227(288)][_0x525227(_0x3fac90._0x422aca)]) + _0x525227(357) + _0x14c093 + ">");
      else
        return [createVNode(_0x525227(_0x3fac90._0x2559e6), { "src": unref(usePage)()["props"][_0x525227(_0x3fac90._0x2ba631)]["logo"], "class": _0x525227(_0x3fac90._0x338174), "width": _0x525227(_0x3fac90._0x5e7f10) }, null, 8, [_0x525227(294)]), createVNode(_0x525227(379), { "src": unref(usePage)()[_0x525227(_0x3fac90._0x5bce13)][_0x525227(288)]["icon"], "class": "show-for-small-only", "width": "43" }, null, 8, [_0x525227(294)])];
    }), "_": 1 }, _0x4210f8)), _0xa21e00(_0x10cbb6(_0x1cf355._0x2b46a1)), ssrRenderList(_0x4ce479, (_0x4b4132) => {
      const _0x59b6e8 = { _0x3b8817: 398, _0x5b7f01: 420 }, _0xcf973a = _0x10cbb6;
      _0xa21e00(_0xcf973a(_0x528cae._0x327ee0)), _0xa21e00(ssrRenderComponent(unref(Link), { "class": [_0xcf973a(343), [unref(current)(_0x4b4132["active_link"]) ? _0xcf973a(373) : ""]], "href": _0x4b4132[_0xcf973a(_0x528cae._0x13a94a)] }, { "default": withCtx((_0x89f3fa, _0x818a1c, _0x1eeb21, _0x7bd012) => {
        const _0xcb4a80 = _0xcf973a;
        if (_0x818a1c)
          _0x818a1c(_0xcb4a80(300) + _0x7bd012 + ">" + ssrInterpolate(_0x4b4132[_0x51b08b[_0xcb4a80(_0x59b6e8._0x3b8817)]][_0xcb4a80(420)]) + "</span>");
        else
          return [createVNode(_0xcb4a80(363), null, toDisplayString(_0x4b4132[_0x51b08b[_0xcb4a80(398)]][_0xcb4a80(_0x59b6e8._0x5b7f01)]), 1)];
      }), "_": 2 }, _0x4210f8)), _0xa21e00(_0xcf973a(366));
    }), _0xa21e00('<!--]--><li class="mx-1 align-middle nav-item cell auto nav-search mx-md-3"><input' + ssrRenderAttr(_0x10cbb6(_0x1cf355._0x53a82b), _0x25bf54[_0x10cbb6(398)]) + _0x10cbb6(387) + ssrRenderClass([_0x10cbb6(_0x1cf355._0x35e818), { "hide": _0x25bf54[_0x10cbb6(398)] === "" }]) + '" id="global-search-results"><li class="dropdown-title">Quick Results</li><!--[-->'), ssrRenderList(_0x553221[_0x10cbb6(_0x1cf355._0x53a82b)], (_0xc49afb) => {
      const _0x4669b0 = { _0xac053d: 380, _0x17aee9: 287, _0xb4847d: 374, _0x464203: 332, _0x19b077: 301, _0x154167: 330, _0x2a6e1b: 409, _0x45ec1d: 379, _0x11e504: 281, _0x2dc2c8: 298 }, _0xcaf68 = _0x10cbb6;
      _0xa21e00('<li class="dropdown-item">'), _0xa21e00(ssrRenderComponent(unref(Link), { "href": _0xc49afb["url"], "class": _0xcaf68(370) }, { "default": withCtx((_0x3ee707, _0x1823fe, _0x376f15, _0xc5ae58) => {
        const _0x4c49bd = _0xcaf68;
        if (_0x1823fe)
          _0x1823fe(_0x4c49bd(_0x4669b0._0xac053d) + _0xc5ae58 + _0x4c49bd(347) + _0xc5ae58 + _0x4c49bd(_0x4669b0._0x17aee9) + ssrRenderAttr("src", _0xc49afb[_0x4c49bd(_0x4669b0._0xb4847d)]) + _0x4c49bd(282) + _0xc5ae58 + _0x4c49bd(_0x4669b0._0x464203) + _0xc5ae58 + ">" + ssrInterpolate(_0xc49afb[_0x4c49bd(_0x4669b0._0x19b077)]) + '</div></div><i class="px-1 fas fa-chevron-right text-muted"' + _0xc5ae58 + _0x4c49bd(323));
        else
          return [createVNode(_0x4c49bd(_0x4669b0._0x154167), { "class": _0x4c49bd(_0x4669b0._0x2a6e1b) }, [createVNode(_0x4c49bd(330), { "class": _0x4c49bd(335) }, [createVNode(_0x4c49bd(_0x4669b0._0x45ec1d), { "src": _0xc49afb[_0x4c49bd(374)], "class": _0x4c49bd(_0x4669b0._0x11e504), "alt": _0x4c49bd(_0x4669b0._0x2dc2c8), "width": "40" }, null, 8, [_0x4c49bd(294)]), createVNode(_0x4c49bd(330), null, toDisplayString(_0xc49afb[_0x4c49bd(_0x4669b0._0x19b077)]), 1)]), createVNode("i", { "class": _0x4c49bd(346) })])];
      }), "_": 2 }, _0x4210f8)), _0xa21e00(_0xcaf68(_0x54a8c9._0x3b885c));
    }), _0xa21e00(_0x10cbb6(284)), _0xa21e00(ssrRenderComponent(unref(Link), { "href": "#", "class": _0x10cbb6(370) }, { "default": withCtx((_0x390a1c, _0x42c17c, _0x4d896f, _0x2df1bc) => {
      const _0x31da6d = _0x10cbb6;
      if (_0x42c17c)
        _0x42c17c(_0x31da6d(380) + _0x2df1bc + _0x31da6d(347) + _0x2df1bc + _0x31da6d(307) + ssrRenderStyle({ "height": _0x31da6d(_0x4da1c4._0x341918), "width": _0x31da6d(299) }) + '"' + _0x2df1bc + _0x31da6d(_0x4da1c4._0x541118) + _0x2df1bc + _0x31da6d(317) + _0x2df1bc + ">" + ssrInterpolate(_0x25bf54[_0x31da6d(_0x4da1c4._0x22657d)]) + _0x31da6d(_0x4da1c4._0x1c9a13) + _0x2df1bc + _0x31da6d(323));
      else
        return [createVNode("div", { "class": "align-middle flex-container align-justify" }, [createVNode(_0x31da6d(330), { "class": _0x31da6d(335) }, [createVNode("i", { "class": _0x31da6d(_0x4da1c4._0x23890e), "style": { "height": _0x31da6d(_0x4da1c4._0x542014), "width": _0x31da6d(_0x4da1c4._0x542014) } }), createVNode("div", null, [createTextVNode(' Show all results for "'), createVNode(_0x31da6d(_0x4da1c4._0x43ac9d), { "class": _0x31da6d(421) }, toDisplayString(_0x25bf54[_0x31da6d(398)]), 1), createTextVNode('" ')])]), createVNode("i", { "class": _0x31da6d(_0x4da1c4._0x23657d) })])];
    }), "_": 1 }, _0x4210f8)), _0xa21e00(_0x10cbb6(349)), !_0x1efad9[_0x10cbb6(_0x1cf355._0x4196de)][_0x10cbb6(_0x1cf355._0x7dd783)][_0x10cbb6(418)][_0x10cbb6(_0x1cf355._0x4b75b3)] ? (_0xa21e00('<li class="nav-item cell shrink me-1">'), _0xa21e00(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x10cbb6(_0x1cf355._0x3c8f2c)), "class": _0x10cbb6(_0x1cf355._0x4be224) }, { "default": withCtx((_0x576252, _0x31182a, _0x46958d, _0xcf3dc0) => {
      const _0x1cfd84 = _0x10cbb6;
      if (_0x31182a)
        _0x31182a(_0x1cfd84(_0x42f6b5._0x561f5d));
      else
        return [createTextVNode("Get Started")];
    }), "_": 1 }, _0x4210f8)), _0xa21e00(_0x10cbb6(_0x1cf355._0x4c8aae))) : _0xa21e00("<!---->"), !_0x1efad9[_0x10cbb6(_0x1cf355._0x4196de)][_0x10cbb6(_0x1cf355._0x7dd783)][_0x10cbb6(418)]["user"] ? (_0xa21e00(_0x10cbb6(272)), _0xa21e00(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x10cbb6(395)), "class": "btn btn-info" }, { "default": withCtx((_0x2ae083, _0x7424e5, _0x1d9597, _0x48c63e) => {
      const _0x4e2e9a = _0x10cbb6;
      if (_0x7424e5)
        _0x7424e5(_0x4e2e9a(322));
      else
        return [createTextVNode(_0x4e2e9a(322))];
    }), "_": 1 }, _0x4210f8)), _0xa21e00("</li>")) : _0xa21e00(_0x10cbb6(_0x1cf355._0x372086)), _0x1efad9[_0x10cbb6(320)][_0x10cbb6(412)]["auth"][_0x10cbb6(416)] ? _0xa21e00('<li class="position-relative nav-item cell shrink"><div class="show-for-small-only position-relative"><a href="#" class="px-2 btn-circle squish text-body"><span class="notification-circle"></span><i class="text-xl fas fa-bell"></i></a></div><div class="dropdown show-for-medium position-relative" id="notification_dropdown"><div class="btn-circle squish"><button class="px-2 text-body" data-tooltip-title="Notifications" data-tooltip-placement="bottom"><span class="notification-circle"></span><i class="text-xl fas fa-bell"></i></button></div><ul class="dropdown-menu dropdown-menu-end" style="' + ssrRenderStyle({ "width": "340px" }) + _0x10cbb6(_0x1cf355._0x18e340) + ssrRenderStyle({ "line-height": _0x10cbb6(_0x1cf355._0x3bc227) }) + _0x10cbb6(274) + ssrRenderStyle({ "height": _0x10cbb6(_0x1cf355._0x3bdc06), "width": _0x10cbb6(400) }) + _0x10cbb6(362)) : _0xa21e00("<!---->"), _0x1efad9[_0x10cbb6(_0x1cf355._0x562f3a)][_0x10cbb6(_0x1cf355._0x7dd783)][_0x10cbb6(418)][_0x10cbb6(416)] ? _0xa21e00(_0x10cbb6(375) + ssrRenderStyle({ "line-height": "20px" }) + _0x10cbb6(_0x1cf355._0x84e445) + ssrRenderStyle({ "width": _0x10cbb6(359) }) + '"></i>10 </div><div class="text-success"><i class="fas fa-money-bill-1-wave" style="' + ssrRenderStyle({ "width": _0x10cbb6(359) }) + _0x10cbb6(328)) : _0xa21e00(_0x10cbb6(303)), _0x1efad9[_0x10cbb6(_0x1cf355._0x3907c5)]["props"][_0x10cbb6(418)][_0x10cbb6(416)] ? (_0xa21e00('<li class="dropdown position-relative nav-item cell shrink ms-1" id="user_dropdown"><button class="gap-2 align-middle flex-container squish"><img src="/assets/img/dummy_headshot.png" class="headshot" alt="headshot" width="40"><div class="text-start show-for-large"><div class="text-sm fw-semibold text-body">' + ssrInterpolate(_0x1efad9[_0x10cbb6(_0x1cf355._0x4d6dc7)][_0x10cbb6(_0x1cf355._0x7dd783)][_0x10cbb6(_0x1cf355._0xaa7854)]["user"][_0x10cbb6(_0x1cf355._0x4880cd)]) + _0x10cbb6(_0x1cf355._0x52f801) + ssrInterpolate("@" + _0x1efad9["$page"][_0x10cbb6(_0x1cf355._0x127996)][_0x10cbb6(418)][_0x10cbb6(_0x1cf355._0x4b75b3)][_0x10cbb6(384)]) + ' • Lvl. 2 </div></div><i class="text-sm fas fa-chevron-down text-muted show-for-large"></i></button><ul class="dropdown-menu dropdown-menu-end"><div class="show-for-small hide-for-large"><div class="gap-2 px-2 py-1 align-middle flex-container"><img src="/assets/img/dummy_headshot.png" class="headshot flex-child-shrink" alt="headshot" width="40"><div class="text-start" style="' + ssrRenderStyle({ "line-height": _0x10cbb6(342) }) + _0x10cbb6(309) + ssrInterpolate(_0x1efad9[_0x10cbb6(320)][_0x10cbb6(_0x1cf355._0x33e04e)][_0x10cbb6(_0x1cf355._0x496cf0)][_0x10cbb6(_0x1cf355._0x4b75b3)][_0x10cbb6(334)]) + _0x10cbb6(394) + ssrInterpolate("@" + _0x1efad9["$page"][_0x10cbb6(_0x1cf355._0x525111)][_0x10cbb6(418)][_0x10cbb6(416)][_0x10cbb6(384)]) + '</div><div class="text-xs text-muted fw-semibold"> Lvl. 2 </div></div></div><li class="dropdown-item"><a href="#" class="dropdown-link dropdown-link-has-icon text-warning"><i class="fas fa-coins text-warning dropdown-icon"></i>' + ssrInterpolate(unref(usePage)()[_0x10cbb6(_0x1cf355._0x387dc6)][_0x10cbb6(_0x1cf355._0x49f1d0)][_0x10cbb6(_0x1cf355._0x1e205e)][_0x10cbb6(271)]) + ' Coins</a></li><li class="dropdown-item"><a href="#" class="dropdown-link dropdown-link-has-icon text-success"><i class="fas fa-money-bill-1-wave text-success dropdown-icon"></i>' + ssrInterpolate(unref(usePage)()[_0x10cbb6(412)][_0x10cbb6(_0x1cf355._0x16b8e7)][_0x10cbb6(416)][_0x10cbb6(_0x1cf355._0x2d5471)]) + ' Cash</a></li></div><div class="align-middle flex-container"><div class="dropdown-title">Account</div><li class="divider flex-child-grow"></li></div><li class="dropdown-item">'), _0xa21e00(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x10cbb6(_0x1cf355._0x534b09), { "username": _0x1efad9[_0x10cbb6(320)][_0x10cbb6(412)][_0x10cbb6(418)][_0x10cbb6(_0x1cf355._0x1e6f6a)][_0x10cbb6(_0x1cf355._0xad0f7f)] }), "class": _0x10cbb6(_0x1cf355._0x119f83) }, { "default": withCtx((_0x1c1fd8, _0x161388, _0x31f01e, _0x256dd8) => {
      const _0x4cbafa = _0x10cbb6;
      if (_0x161388)
        _0x161388(_0x4cbafa(_0x111287._0x12bc2a) + _0x256dd8 + "></i>Profile");
      else
        return [createVNode("i", { "class": _0x4cbafa(364) }), createTextVNode("Profile")];
    }), "_": 1 }, _0x4210f8)), _0xa21e00(_0x10cbb6(415)), _0xa21e00(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x10cbb6(325)), "class": _0x10cbb6(_0x1cf355._0x13a616) }, { "default": withCtx((_0x3d79b5, _0x3a2783, _0x41e6a7, _0x32ae5c) => {
      const _0x2614d1 = _0x10cbb6;
      if (_0x3a2783)
        _0x3a2783(_0x2614d1(397) + _0x32ae5c + _0x2614d1(_0x4d0ea6._0x2992b2));
      else
        return [createVNode("i", { "class": "fas fa-edit dropdown-icon" }), createTextVNode(_0x2614d1(_0x4d0ea6._0x241128))];
    }), "_": 1 }, _0x4210f8)), _0xa21e00('</li><li class="dropdown-item">'), _0xa21e00(ssrRenderComponent(unref(Link), { "href": unref(route)("user.settings.page", { "category": _0x10cbb6(275) }), "class": "dropdown-link dropdown-link-has-icon" }, { "default": withCtx((_0x44cc32, _0x24988f, _0x1ed6ae, _0x28bb76) => {
      const _0x348f94 = _0x10cbb6;
      if (_0x24988f)
        _0x24988f(_0x348f94(_0x435b57._0x163141) + _0x28bb76 + _0x348f94(267));
      else
        return [createVNode("i", { "class": "fas fa-cogs dropdown-icon" }), createTextVNode(_0x348f94(401))];
    }), "_": 1 }, _0x4210f8)), _0xa21e00(_0x10cbb6(413)), _0xa21e00(ssrRenderComponent(unref(Link), { "onClick": _0x40b0ec, "class": _0x10cbb6(_0x1cf355._0x955191) }, { "default": withCtx((_0xe1587c, _0xcea9f8, _0x249dec, _0x48d881) => {
      const _0x215f94 = _0x10cbb6;
      if (_0xcea9f8)
        _0xcea9f8(_0x215f94(_0x5bd974._0x4650e4) + _0x48d881 + _0x215f94(_0x5bd974._0x22d6c4));
      else
        return [createVNode("i", { "class": "fas fa-sign-out text-danger dropdown-icon" }), createTextVNode("Logout")];
    }), "_": 1 }, _0x4210f8)), _0xa21e00(_0x10cbb6(324))) : _0xa21e00(_0x10cbb6(303)), _0xa21e00(_0x10cbb6(_0x1cf355._0x5df76b)), ssrRenderSlot(_0x1efad9[_0x10cbb6(368)], _0x10cbb6(391), {}, null, _0xa21e00, _0x4210f8), _0xa21e00(_0x10cbb6(_0x1cf355._0x133153));
  };
} }), _sfc_setup = _sfc_main[_0x5a6c7d(269)];
function _0x18c0() {
  const _0x2100b7 = ["data", "Log In", "></i></div>", "</li></ul></li>", "avatar.page", "classList", '<i class="fas fa-user dropdown-icon"', '"></i>10 </div></a></li>', '</div><div class="text-xs text-muted fw-semibold">', "div", "Market", "><div", "430177GFtQPO", "display_name", "gap-2 align-middle flex-container", "180EcFFco", "store.page", "squish card card-body card-inner mb-lg-0", "trim", "modal", "5HaWlYk", "12px", "nav-link", "Develop", "getElementById", "px-1 fas fa-chevron-right text-muted", '><div class="gap-2 align-middle flex-container"', '" data-tooltip-html="" data-tooltip-title="&lt;div&gt;10 Coins&lt;/div&gt; &lt;div&gt;10 Bucks&lt;/div&gt;" data-tooltip-placement="bottom"><div class="text-warning"><i class="fas fa-coins" style="', '</li></ul><button content="Search" data-tooltip-placement="bottom"><i class="fas fa-search"></i></button></li>', "text-xl align-middle fas fa-telescope headshot text-muted flex-container align-center flex-child-grow", "22106OAmRHM", '"><div class="align-middle flex-container"><div class="dropdown-title">Notifications</div><li class="divider flex-child-grow"></li></div><li class="px-2 py-2 text-center dropdown-item"><div class="gap-3 flex-container flex-dir-column"><i class="text-5xl fas fa-face-sleeping text-muted"></i><div style="', "></i>Character", "2juzuYv", "api.search", "get", ' class="show-for-small-only" width="43"', "37137KtdPVf", "22px", "Игры", '<nav class="navbar"><ul class="navbar-nav grid-x"><li class="nav-item cell shrink me-2">', '"></i><div class="text-sm"> Show All Notifications </div></div><i class="px-1 text-sm fas fa-chevron-right text-muted"></i></div></a></li></ul></div></li>', "span", "fas fa-user dropdown-icon", "auth.logout", "</li></li>", "LanguageModal", "$slots", '><div class="modal-card modal-card-body"><div class="section-borderless"><div class="gap-2 align-middle flex-container align-justify"><div class="text-lg fw-semibold"> Change Language </div><button class="btn-circle" data-toggle-modal="#following-modal" style="', "dropdown-link", "add", "post", "active", "image", '<li class="nav-item cell shrink show-for-large"><a href="#" class="text-sm nav-link" style="', "1780GHUBKe", "<img", "btn btn-success", "img", '<div class="align-middle flex-container align-justify"', '<i class="fas fa-sign-out text-danger dropdown-icon"', "hide", '</span>&quot; </div></div><i class="px-1 fas fa-chevron-right text-muted"', "username", "<div", "icon", ' type="text" class="form" id="global-search-bar" autocomplete="nope" placeholder="Search..."><ul class="', "></i><div", "log", "Welcome", "default", "<!--[-->", "forum.page", '</div><div class="mb-1 text-xs text-muted fw-semibold">', "auth.login.page", "Character", '<i class="fas fa-edit dropdown-icon"', "value", "Games", "38px", "Settings", '"><div class="align-middle"><div class="gap-2 align-start flex-container" style="', "auth.language", "Развивать", "-10px", "length", "url", "resources/js/Components/Modal/LanguageModal.vue", "align-middle flex-container align-justify", "></i>Logout", "resources/js/Components/LayoutParts/Navbar.vue", "props", '</li><li class="divider"></li><li class="dropdown-item">', "<!--]--></div></div></div></div></div>", '</li><li class="dropdown-item">', "user", "</li><!--[-->", "auth", "show-for-medium", "title", "search-keyword", "180", "<!--]-->", "dropdown-menu", "dropdown-link dropdown-link-has-icon text-danger", "></i>Settings", "73107RxKERU", "setup", "sidebar", "coins", '<li class="nav-item cell shrink ms-1">', "36041525oZorFy", '"><div class="text-xs fw-bold text-muted text-uppercase"> No Notifications </div><div class="text-xs text-muted fw-semibold"> You have not recieved any notifications recently. </div></div></div></li><li class="divider"></li><li class="dropdown-item"><a href="#" class="dropdown-link"><div class="align-middle flex-container align-justify"><div class="gap-2 align-middle flex-container"><i class="text-lg align-middle fas fa-bell headshot text-muted flex-container align-center flex-child-grow" style="', "general", "14RkeElG", "16px", "Discuss", '"><i class="fas fa-times"></i></button></div></div><div class="section-borderless"><div class="section"><div id="theme-switcher-container" class="grid-x grid-margin-x grid-padding-y"><!--[-->', "develop.*", "headshot flex-child-grow", ' class="headshot flex-child-grow" alt="headshot" width="40"', "results", '<!--]--><li class="divider"></li><li class="dropdown-item">', "modules", "Обсуждать", "><img", "site", '<li class="nav-item cell shrink show-for-large"><li class="side-item">', '" style="', "pointer", "</li>", "</ul></nav>", "src", "2136OaTdAH", "toggle", "locale", "headshot", "40px", "<span", "name", "forum.*", "<!---->", "user.profile", "ゲーム", "24DbDslo", '><i class="text-xl align-middle fas fa-telescope headshot text-muted flex-container align-center flex-child-grow" style="', "1403776pEfvuC", '"><div class="text-sm fw-semibold">', "Get Started", "addEventListener", "dropdown-link dropdown-link-has-icon", '<i class="fas fa-cogs dropdown-icon"', "locales", "auth.register.page", "store.*", '> Show all results for &quot;<span class="search-keyword"', "cash", "10032582TWDWZx", "$page"];
  _0x18c0 = function() {
    return _0x2100b7;
  };
  return _0x18c0();
}
_sfc_main["setup"] = (_0x215e6f, _0x4ecec5) => {
  const _0x149782 = { _0x3ae0e6: 371 }, _0x43a941 = _0x5a6c7d, _0xf137cd = useSSRContext();
  return (_0xf137cd["modules"] || (_0xf137cd[_0x43a941(285)] = /* @__PURE__ */ new Set()))[_0x43a941(_0x149782._0x3ae0e6)](_0x43a941(411)), _sfc_setup ? _sfc_setup(_0x215e6f, _0x4ecec5) : void 0;
};
export {
  _sfc_main as _
};
