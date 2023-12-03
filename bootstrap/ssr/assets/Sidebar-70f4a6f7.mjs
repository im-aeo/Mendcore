const _0xd8f761 = _0x9862;
(function(_0x1c98de, _0x1eda99) {
  const _0x1faa61 = { _0x3afbf7: 196, _0x549e50: 225, _0x57c82b: 154, _0x4769bc: 172, _0xdc0016: 230, _0x5c06a8: 241 }, _0x41d4ed = _0x9862, _0x4b7fe4 = _0x1c98de();
  while (!![]) {
    try {
      const _0x10d547 = parseInt(_0x41d4ed(209)) / 1 + parseInt(_0x41d4ed(_0x1faa61._0x3afbf7)) / 2 * (parseInt(_0x41d4ed(187)) / 3) + -parseInt(_0x41d4ed(284)) / 4 * (-parseInt(_0x41d4ed(_0x1faa61._0x549e50)) / 5) + parseInt(_0x41d4ed(271)) / 6 * (parseInt(_0x41d4ed(_0x1faa61._0x57c82b)) / 7) + -parseInt(_0x41d4ed(176)) / 8 + parseInt(_0x41d4ed(_0x1faa61._0x4769bc)) / 9 + -parseInt(_0x41d4ed(_0x1faa61._0xdc0016)) / 10 * (parseInt(_0x41d4ed(_0x1faa61._0x5c06a8)) / 11);
      if (_0x10d547 === _0x1eda99)
        break;
      else
        _0x4b7fe4["push"](_0x4b7fe4["shift"]());
    } catch (_0x30440c) {
      _0x4b7fe4["push"](_0x4b7fe4["shift"]());
    }
  }
})(_0xc932, 290693);
import { defineComponent, ref, onMounted, computed, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import _0x27b46 from "axios";
import { route, current } from "momentum-trail";
function _0x9862(_0x1519fd, _0x2a309f) {
  const _0xc9327c = _0xc932();
  return _0x9862 = function(_0x9862b2, _0x4a9bd0) {
    _0x9862b2 = _0x9862b2 - 142;
    let _0x4a93e3 = _0xc9327c[_0x9862b2];
    return _0x4a93e3;
  }, _0x9862(_0x1519fd, _0x2a309f);
}
const __default__ = { "data"() {
  return { "messages": [] };
}, "created"() {
  const _0x13be46 = { _0x4b5eb5: 202 }, _0x119d77 = { _0x5e790e: 162, _0x4540e9: 243 }, _0x5bc064 = _0x9862;
  this[_0x5bc064(_0x13be46._0x4b5eb5)](), window[_0x5bc064(221)]["private"]("chat")["listen"](_0x5bc064(279), (_0xbebec0) => {
    const _0x19bd18 = _0x5bc064;
    this[_0x19bd18(_0x119d77._0x5e790e)][_0x19bd18(265)]({ "message": _0xbebec0["message"][_0x19bd18(246)], "user": _0xbebec0[_0x19bd18(_0x119d77._0x4540e9)] });
  });
}, "methods": { "fetchMessages"() {
  const _0x299179 = { _0xfd9aa2: 263 }, _0x247928 = { _0x24a06c: 212 }, _0x122018 = _0x9862;
  _0x27b46[_0x122018(_0x299179._0xfd9aa2)](route("api.messages"))[_0x122018(226)]((_0x3ed009) => {
    const _0x32aa8f = _0x122018;
    this[_0x32aa8f(162)] = _0x3ed009[_0x32aa8f(_0x247928._0x24a06c)];
  });
}, "addMessage"(_0x38bdb5) {
  const _0x53ff98 = { _0x1bd2b1: 265 }, _0x2bf1a6 = { _0x1127cf: 147 }, _0x50dac9 = _0x9862;
  this[_0x50dac9(162)][_0x50dac9(_0x53ff98._0x1bd2b1)](_0x38bdb5), _0x27b46["post"](route(_0x50dac9(277), { "message": _0x38bdb5 }))["then"]((_0x1a59cc) => {
    const _0x1852e6 = _0x50dac9;
    console[_0x1852e6(_0x2bf1a6._0x1127cf)](_0x1a59cc[_0x1852e6(212)]);
  });
}, "showModal"(_0x68ca84) {
  const _0xa30d91 = { _0x5106d9: 242, _0x5bc566: 254 }, _0x25b236 = _0x9862, _0x34dfd5 = document[_0x25b236(_0xa30d91._0x5106d9)](_0x68ca84);
  _0x34dfd5 && _0x34dfd5["classList"][_0x25b236(_0xa30d91._0x5bc566)]("active");
}, "addActiveClass"(_0x587dd5) {
  const _0x3b9138 = { _0x514fd4: 242, _0x262866: 254, _0x26d112: 258 }, _0x162fa9 = _0x9862, _0x91e3b9 = document[_0x162fa9(_0x3b9138._0x514fd4)](_0x587dd5);
  _0x91e3b9 && _0x91e3b9["classList"][_0x162fa9(_0x3b9138._0x262866)](_0x162fa9(_0x3b9138._0x26d112));
}, "sidebarOpen"() {
  const _0x1b865c = { _0x4df8f0: 242, _0x2d3b5e: 237, _0x35db48: 193, _0x472782: 249 }, _0x2c8167 = _0x9862, _0x5b62f5 = document[_0x2c8167(_0x1b865c._0x4df8f0)](_0x2c8167(_0x1b865c._0x2d3b5e));
  _0x5b62f5 && _0x5b62f5[_0x2c8167(_0x1b865c._0x35db48)][_0x2c8167(254)](_0x2c8167(_0x1b865c._0x472782));
}, "addActiveClassSSInput"(_0x372ec5) {
  const _0x20e54d = { _0x8737bf: 167, _0x3eb4af: 235 }, _0x3854ae = { _0x47777c: 204, _0x5b7fe3: 233 }, _0x481b7f = _0x9862, _0x3e6a68 = document["getElementById"](_0x372ec5), _0x4605f4 = (_0x5b9a5b) => !_0x5b9a5b[_0x481b7f(143)]()[_0x481b7f(171)];
  _0x3e6a68 && _0x3e6a68[_0x481b7f(_0x20e54d._0x8737bf)](_0x481b7f(_0x20e54d._0x3eb4af), function() {
    const _0x1e4b14 = _0x481b7f;
    if (_0x4605f4(this[_0x1e4b14(_0x3854ae._0x47777c)]))
      return;
    else
      _0x3e6a68["classList"]["toggle"](_0x1e4b14(_0x3854ae._0x5b7fe3));
  });
} } }, _sfc_main = defineComponent({ ...__default__, "__name": _0xd8f761(169), "__ssrInlineRender": !![], "setup"(_0x5c4260) {
  const _0x861d0d = { _0x1cf210: 213, _0x156a3d: 229, _0x1a79b7: 184, _0x349068: 203, _0x9a9a53: 272, _0x1ecaf4: 214, _0x41d556: 220, _0x3841e9: 195, _0x3bd32d: 166, _0x13d0e7: 206, _0xb61d9f: 276, _0x31d48f: 206, _0x4f2853: 268, _0x3353be: 194, _0x971208: 255, _0x467557: 269, _0x281e69: 206, _0x2887f3: 215, _0x2df2f4: 227, _0x10e184: 240, _0x5d81d1: 161, _0x4279fa: 144, _0x4a5955: 274, _0x164954: 192, _0x51d5f2: 161, _0x1fff8d: 173, _0xf6fe90: 142, _0x2b205a: 259, _0x2779b4: 261, _0x2afa81: 183 }, _0x5d96c3 = { _0x18ee04: 152, _0x2667cc: 158, _0x21244a: 218, _0x38c802: 256, _0x3eea8c: 191, _0x292736: 146, _0x470076: 152, _0x3f2be3: 182, _0x35f822: 275, _0x36bfca: 211, _0x5ad321: 278, _0x5b16e9: 223, _0x371a12: 204, _0x8d47e2: 205, _0x1ecea5: 239, _0x3bf732: 156, _0x33ad28: 253, _0x5e7840: 234, _0x3cfe52: 186, _0x21b88d: 159, _0x59ce10: 228, _0x1302e7: 189 }, _0x235c0e = { _0xd0eb71: 160, _0x30ef9d: 160 }, _0x4f75c6 = { _0x2bab3e: 204, _0x36b35c: 179, _0x23a9ee: 250, _0x3ff968: 266 }, _0x547fc0 = { _0x1bcc46: 148 }, _0x3950b7 = { _0x3f48a7: 236 }, _0x407023 = { _0x45c86b: 204 }, _0x211849 = _0xd8f761, _0x27bc82 = ref(![]), _0x56fa43 = _0x211849(_0x861d0d._0x1cf210), _0x518382 = ref(![]);
  async function _0x51f07e() {
    const _0x1113be = _0x211849;
    try {
      await fetch(new Request(_0x56fa43))[_0x1113be(244)](() => _0x518382[_0x1113be(204)] = !![]);
    } catch (_0x42ebca) {
      _0x518382[_0x1113be(_0x407023._0x45c86b)] = !![];
    }
  }
  onMounted(() => {
    _0x51f07e();
  });
  const _0x1bbd66 = [{ "en": { "name": _0x211849(206) }, "ru": { "name": _0x211849(_0x861d0d._0x156a3d) }, "jp": { "name": "ナビゲーション" } }, { "en": { "name": _0x211849(161) }, "ru": { "name": _0x211849(_0x861d0d._0x1a79b7) }, "jp": { "name": _0x211849(245) } }, { "en": { "name": _0x211849(_0x861d0d._0x349068) }, "ru": { "name": _0x211849(_0x861d0d._0x9a9a53) }, "jp": { "title": _0x211849(_0x861d0d._0x1ecaf4) } }, { "en": { "name": _0x211849(_0x861d0d._0x41d556) }, "ru": { "name": _0x211849(281) }, "jp": { "name": _0x211849(_0x861d0d._0x3841e9) } }], _0xb5341a = [{ "url": "#", "active_link": _0x211849(_0x861d0d._0x3bd32d), "section": _0x211849(_0x861d0d._0x13d0e7), "icon": _0x211849(163), "en": { "title": "Games" }, "ru": { "title": _0x211849(_0x861d0d._0xb61d9f) }, "jp": { "title": _0x211849(195) } }, { "url": route("store.page"), "section": _0x211849(_0x861d0d._0x31d48f), "active_link": _0x211849(200), "icon": _0x211849(_0x861d0d._0x4f2853), "en": { "title": _0x211849(_0x861d0d._0x3353be) }, "ru": { "title": "Рынок" }, "jp": { "title": "市場" } }, { "url": route(_0x211849(170), { "id": 1 }), "active_link": _0x211849(_0x861d0d._0x971208), "icon": _0x211849(_0x861d0d._0x467557), "section": _0x211849(_0x861d0d._0x281e69), "en": { "title": _0x211849(252) }, "ru": { "title": _0x211849(_0x861d0d._0x2887f3) }, "jp": { "title": "議論" } }, { "url": "#", "section": _0x211849(_0x861d0d._0x31d48f), "active_link": _0x211849(_0x861d0d._0x2df2f4), "icon": "fas fa-code", "en": { "title": _0x211849(283) }, "ru": { "title": _0x211849(208) }, "jp": { "title": "発展" } }, { "url": route(_0x211849(_0x861d0d._0x10e184)), "active_link": "user.*", "section": _0x211849(_0x861d0d._0x5d81d1), "icon": "fas fa-users", "en": { "title": _0x211849(_0x861d0d._0x4279fa) }, "ru": { "title": _0x211849(251) }, "jp": { "title": "発展" } }, { "url": "#", "section": _0x211849(161), "active_link": _0x211849(286), "icon": _0x211849(_0x861d0d._0x4a5955), "en": { "title": "Spaces" }, "ru": { "title": _0x211849(_0x861d0d._0x164954) }, "jp": { "title": _0x211849(153) } }, { "url": "#", "section": _0x211849(_0x861d0d._0x51d5f2), "active_link": "leaderboard.*", "icon": _0x211849(_0x861d0d._0x1fff8d), "en": { "title": _0x211849(_0x861d0d._0xf6fe90) }, "ru": { "title": _0x211849(150) }, "jp": { "title": _0x211849(_0x861d0d._0x2b205a) } }, { "url": "#", "icon": _0x211849(155), "active_link": _0x211849(_0x861d0d._0x2779b4), "section": _0x211849(220), "en": { "title": "Upgrade" }, "ru": { "title": _0x211849(_0x861d0d._0x2afa81) }, "jp": { "title": _0x211849(260) } }], _0x4dbc88 = computed(() => usePage()["props"][_0x211849(285)]);
  return usePage(), usePage(), (_0x91839d, _0x549e39, _0x12470a, _0x794a8) => {
    const _0x23cf5a = { _0x3c4a7b: 190 }, _0x45102b = { _0x22c77d: 201 }, _0x4edce2 = { _0x706f05: 199, _0x421138: 198 }, _0x37f9c1 = _0x211849;
    _0x549e39('<!--[--><nav class="sidebar show-for-large" id="sidebar"><ul class="sidebar-nav">'), !_0x91839d[_0x37f9c1(_0x5d96c3._0x18ee04)]["props"][_0x37f9c1(275)][_0x37f9c1(243)] ? (_0x549e39(_0x37f9c1(267)), _0x549e39(ssrRenderComponent(unref(Link), { "href": unref(route)("auth.register.page"), "class": _0x37f9c1(191) }, { "default": withCtx((_0x2f18a5, _0x40757f, _0x714cf4, _0x4df2bf) => {
      const _0x28d2f9 = _0x37f9c1;
      if (_0x40757f)
        _0x40757f('<i class="fas fa-user-plus side-icon"' + _0x4df2bf + _0x28d2f9(_0x4edce2._0x706f05) + _0x4df2bf + _0x28d2f9(177));
      else
        return [createVNode("i", { "class": "fas fa-user-plus side-icon" }), createVNode(_0x28d2f9(257), null, _0x28d2f9(_0x4edce2._0x421138))];
    }), "_": 1 }, _0x12470a)), _0x549e39(_0x37f9c1(_0x5d96c3._0x2667cc)), _0x549e39(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x37f9c1(_0x5d96c3._0x21244a)), "class": "side-link" }, { "default": withCtx((_0x559510, _0x283d33, _0x439423, _0x27b605) => {
      const _0x3ff68e = _0x37f9c1;
      if (_0x283d33)
        _0x283d33(_0x3ff68e(_0x3950b7._0x3f48a7) + _0x27b605 + "></i><span" + _0x27b605 + _0x3ff68e(188));
      else
        return [createVNode("i", { "class": _0x3ff68e(262) }), createVNode(_0x3ff68e(257), null, "Log In")];
    }), "_": 1 }, _0x12470a)), _0x549e39(_0x37f9c1(_0x5d96c3._0x38c802))) : _0x549e39(_0x37f9c1(175)), _0x549e39('<li class="side-item">'), _0x549e39(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x37f9c1(207)), "class": [[unref(current)(_0x37f9c1(185)) ? "active" : ""], _0x37f9c1(_0x5d96c3._0x3eea8c)] }, { "default": withCtx((_0x5b399f, _0x3f4492, _0xd3737c, _0x137fbf) => {
      const _0x5ca154 = _0x37f9c1;
      if (_0x3f4492)
        _0x3f4492(_0x5ca154(157) + _0x137fbf + _0x5ca154(199) + _0x137fbf + ">Home</span>");
      else
        return [createVNode("i", { "class": _0x5ca154(_0x547fc0._0x1bcc46) }), createVNode(_0x5ca154(257), null, _0x5ca154(181))];
    }), "_": 1 }, _0x12470a)), _0x549e39("</li><!--[-->"), ssrRenderList(_0x1bbd66, (_0xd75542) => {
      const _0x2e58c2 = _0x37f9c1;
      _0x549e39(_0x2e58c2(180) + ssrInterpolate(_0xd75542[_0x4dbc88[_0x2e58c2(_0x4f75c6._0x2bab3e)]]["name"]) + _0x2e58c2(_0x4f75c6._0x36b35c)), ssrRenderList(_0xb5341a[_0x2e58c2(_0x4f75c6._0x23a9ee)]((_0x2ac553) => _0x2ac553[_0x2e58c2(149)] === _0xd75542["en"][_0x2e58c2(239)]), (_0x298469) => {
        const _0xcb2364 = { _0x293a0c: 232, _0x22520a: 151, _0x158b23: 204, _0x2994cb: 216 }, _0x3ea3d7 = _0x2e58c2;
        _0x549e39(_0x3ea3d7(222)), _0x549e39(ssrRenderComponent(unref(Link), { "class": ["side-link", [unref(current)(_0x298469["active_link"]) ? _0x3ea3d7(258) : ""]], "href": _0x298469[_0x3ea3d7(_0x45102b._0x22c77d)] }, { "default": withCtx((_0x215ad6, _0x4b8962, _0x3f0f5d, _0x985db2) => {
          const _0x2dc134 = _0x3ea3d7;
          if (_0x4b8962)
            _0x4b8962(_0x2dc134(_0xcb2364._0x293a0c) + ssrRenderClass([_0x298469[_0x2dc134(_0xcb2364._0x22520a)], "side-icon"]) + '"' + _0x985db2 + "></i><span" + _0x985db2 + ">" + ssrInterpolate(_0x298469[_0x4dbc88[_0x2dc134(_0xcb2364._0x158b23)]][_0x2dc134(_0xcb2364._0x2994cb)]) + "</span>");
          else
            return [createVNode("i", { "class": [_0x2dc134(224), _0x298469[_0x2dc134(_0xcb2364._0x22520a)]] }, null, 2), createVNode("span", null, toDisplayString(_0x298469[_0x4dbc88[_0x2dc134(204)]]["title"]), 1)];
        }), "_": 2 }, _0x12470a)), _0x549e39(_0x3ea3d7(278));
      }), _0x549e39(_0x2e58c2(_0x4f75c6._0x3ff968));
    }), _0x549e39(_0x37f9c1(_0x5d96c3._0x292736)), _0x91839d[_0x37f9c1(_0x5d96c3._0x470076)][_0x37f9c1(_0x5d96c3._0x3f2be3)][_0x37f9c1(_0x5d96c3._0x35f822)]["user"] ? _0x549e39(_0x37f9c1(273)) : _0x549e39("<!---->"), _0x91839d[_0x37f9c1(152)][_0x37f9c1(182)][_0x37f9c1(275)]["user"] ? (_0x549e39('<li class="side-item">'), _0x549e39(ssrRenderComponent(unref(Link), { "href": "#", "class": _0x37f9c1(_0x5d96c3._0x36bfca) }, { "default": withCtx((_0x543277, _0x540abd, _0x3ad589, _0x1b2985) => {
      const _0x44700a = _0x37f9c1;
      if (_0x540abd)
        _0x540abd(_0x44700a(168) + _0x1b2985 + _0x44700a(174) + _0x1b2985 + _0x44700a(264) + _0x1b2985 + ">Project Eclipse</span>");
      else
        return [createVNode(_0x44700a(257), { "class": _0x44700a(231) }, [createVNode(_0x44700a(197), { "src": _0x44700a(_0x23cf5a._0x3c4a7b) })]), createVNode(_0x44700a(257), null, _0x44700a(145))];
    }), "_": 1 }, _0x12470a)), _0x549e39(_0x37f9c1(_0x5d96c3._0x5ad321))) : _0x549e39("<!---->"), _0x549e39(_0x37f9c1(_0x5d96c3._0x5b16e9)), _0x518382[_0x37f9c1(_0x5d96c3._0x371a12)] ? _0x549e39(_0x37f9c1(165) + ssrInterpolate(unref(usePage)()[_0x37f9c1(182)][_0x37f9c1(_0x5d96c3._0x8d47e2)][_0x37f9c1(_0x5d96c3._0x1ecea5)]) + _0x37f9c1(238)) : _0x549e39(_0x37f9c1(175)), unref(usePage)()[_0x37f9c1(182)]["site_config"][_0x37f9c1(_0x5d96c3._0x3bf732)] ? (_0x549e39('<div class="py-2 mb-2 text-center text-white alert alert-warning"><div class="gap-2 align-middle flex-container align-justify"><i class="text-lg far fa-hammer pe-2"></i><div>You are currently in maintenance mode. '), _0x549e39(ssrRenderComponent(unref(Link), { "href": unref(route)("maintenance.exit"), "class": "text-white fw-semibold" }, { "default": withCtx((_0xe5e7e9, _0x1e3390, _0x3e897d, _0x2573a1) => {
      const _0x3fb9bf = _0x37f9c1;
      if (_0x1e3390)
        _0x1e3390(_0x3fb9bf(_0x235c0e._0xd0eb71));
      else
        return [createTextVNode(_0x3fb9bf(_0x235c0e._0x30ef9d))];
    }), "_": 1 }, _0x12470a)), _0x549e39(_0x37f9c1(_0x5d96c3._0x33ad28))) : _0x549e39(_0x37f9c1(175)), _0x549e39(_0x37f9c1(217)), ssrRenderSlot(_0x91839d["$slots"], _0x37f9c1(210), {}, null, _0x549e39, _0x12470a), unref(usePage)()[_0x37f9c1(182)][_0x37f9c1(275)][_0x37f9c1(243)] ? (_0x549e39(_0x37f9c1(_0x5d96c3._0x5e7840) + ssrRenderStyle({ "right": "66px", "z-index": _0x37f9c1(270) }) + _0x37f9c1(_0x5d96c3._0x3cfe52) + ssrRenderStyle({ "cursor": _0x37f9c1(_0x5d96c3._0x21b88d) }) + _0x37f9c1(247)), _0x27bc82[_0x37f9c1(204)] ? (_0x549e39('<div class="chat-main"><div class="chat-body card-chat card-chat-body no-corners"><ul><!--[-->'), ssrRenderList(_0x91839d["messages"], (_0x36146d) => {
      const _0x1eba65 = _0x37f9c1;
      _0x549e39(_0x1eba65(219) + ssrInterpolate(_0x36146d) + "</li>");
    }), _0x549e39(_0x37f9c1(_0x5d96c3._0x59ce10))) : _0x549e39(_0x37f9c1(175)), _0x549e39(_0x37f9c1(_0x5d96c3._0x1302e7))) : _0x549e39(_0x37f9c1(175)), _0x549e39(_0x37f9c1(280));
  };
} }), _sfc_setup = _sfc_main[_0xd8f761(178)];
_sfc_main[_0xd8f761(178)] = (_0x19af09, _0x210001) => {
  const _0xe052f1 = { _0x2aacd7: 282 }, _0x362b98 = _0xd8f761, _0x24d83c = useSSRContext();
  return (_0x24d83c[_0x362b98(248)] || (_0x24d83c[_0x362b98(248)] = /* @__PURE__ */ new Set()))[_0x362b98(164)](_0x362b98(_0xe052f1._0x2aacd7)), _sfc_setup ? _sfc_setup(_0x19af09, _0x210001) : void 0;
};
function _0xc932() {
  const _0xdb4299 = ["data", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "私のスペース", "Обсуждать", "title", '<div class="grid-x grid-margin-x align-center">', "auth.login.page", "<li>", "BOOST YOUR ACCOUNT", "Echo", '<li class="side-item">', '</ul></nav><main class="container">', "side-icon", "695IeUEXl", "then", "develop.*", "<!--]--></ul></div></div>", "НАВИГАЦИЯ", "10OzebTp", "side-img", '<i class="', "hide", '<div id="chat-container" class="chat-container chat-vis focused" style="', "input", '<i class="fas fa-sign-in side-icon"', "sidebar", ' by telling your friends about us!</div><i class="text-lg far fa-triangle-exclamation pe-2"></i></div></div>', "name", "user.page", "2265340idkOvS", "getElementById", "user", "catch", "ソーシャル", "message", '" class="chat-windows-header chat-header bg-info hover"><div class="chat-header-action"><i class="chat-icon fas fa-message-xmark chat-link-icon"></i><i class="chat-icon fas fa-cog chat-link-icon"></i><i class="chat-icon fas fa-gamepad-modern chat-link-icon"></i></div><div class="chat-header-label"><span class="chat-caption-header text-overflow chat-header-title"> Chats </span></div></div>', "modules", "show-for-large", "filter", "Игроки", "Discuss", '</div><i class="text-lg far fa-hammer pe-2"></i></div></div>', "toggle", "forum.page.*", "</li></div>", "span", "active", "リーダーボード", "アップグレード", "upgade.*", "fas fa-sign-in side-icon", "get", "></span><span", "push", "<!--]--><!--]-->", '<div class="hide-for-large"><li class="side-item side-title">Account</li><li class="side-item">', "fas fa-store", "fas fa-messages", "1060", "6ICtpxB", "МОИ ПРОСТРАНСТВА", '<li class="side-item side-title">My Spaces</li>', "fas fa-planet-ringed", "auth", "Игры", "api.messages.new", "</li>", "MessageSent", "</div></main><!--]-->", "เกม", "resources/js/Components/LayoutParts/Sidebar.vue", "Develop", "1156iCuiYL", "locale", "spaces.*", "Leaderboard", "trim", "Players", "Project Eclipse", "<!--]-->", "log", "fas fa-home side-icon", "section", "Таблица лидеров", "icon", "$page", "スペース", "1160173onEIwx", "fas fa-rocket-launch", "in_maintenance", '<i class="fas fa-home side-icon"', '</li><li class="side-item">', "pointer", "Exit", "SOCIAL", "messages", "fas fa-gamepad-modern", "add", '<div class="py-2 mb-4 text-center alert alert-danger fw-semibold"><div class="gap-2 align-middle flex-container align-justify"><i class="text-lg far fa-triangle-exclamation pe-2"></i><div>It looks like you use an ad blocker (so do we). You can support ', "games.*", "addEventListener", '<span class="side-img"', "Sidebar", "forum.page", "length", "3066390yFKOyE", "fas fa-list-ol", '><img src="/assets/img/icon.png"', "<!---->", "2504424DPrpIe", ">Get Started</span>", "setup", "</li><!--[-->", '<!--[--><li class="side-item side-title">', "Home", "props", "модернизировать", "СОЦИАЛЬНОЕ", "my.dashboard.*", '"><div style="', "12171kWZFyF", ">Log In</span>", "</div>", "/assets/img/icon.png", "side-link", "Пространства", "classList", "Market", "ゲーム", "38DmIRdf", "img", "Get Started", "></i><span", "store.*", "url", "fetchMessages", "MY SPACES", "value", "site", "NAVIGATION", "Welcome", "Развивать", "185983qOSAti", "default", "side-link side-link-has-img"];
  _0xc932 = function() {
    return _0xdb4299;
  };
  return _0xc932();
}
export {
  _sfc_main as _
};
