const _0x3dcd14 = _0x1bdd;
(function(_0x570dde, _0x1b4366) {
  const _0x13ac5c = { _0x5ac135: 437, _0x3dd634: 405, _0x4c86b5: 375 }, _0x610c94 = _0x1bdd, _0x5adf1a = _0x570dde();
  while (!![]) {
    try {
      const _0x4b321b = -parseInt(_0x610c94(_0x13ac5c._0x5ac135)) / 1 + -parseInt(_0x610c94(434)) / 2 * (-parseInt(_0x610c94(_0x13ac5c._0x3dd634)) / 3) + -parseInt(_0x610c94(426)) / 4 + parseInt(_0x610c94(370)) / 5 * (parseInt(_0x610c94(443)) / 6) + -parseInt(_0x610c94(388)) / 7 * (parseInt(_0x610c94(404)) / 8) + parseInt(_0x610c94(440)) / 9 * (-parseInt(_0x610c94(421)) / 10) + -parseInt(_0x610c94(422)) / 11 * (-parseInt(_0x610c94(_0x13ac5c._0x4c86b5)) / 12);
      if (_0x4b321b === _0x1b4366)
        break;
      else
        _0x5adf1a["push"](_0x5adf1a["shift"]());
    } catch (_0x2b1bc1) {
      _0x5adf1a["push"](_0x5adf1a["shift"]());
    }
  }
})(_0x1baa, 777996);
import { defineComponent, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _0x3b7927 } from "./Navbar-cfe40770.mjs";
import { F as _0x4d461a } from "./Footer-52d2ed2b.mjs";
import { _ as _0xa650b3 } from "./Sidebar-d98a6955.mjs";
import { route } from "momentum-trail";
function _0x1bdd(_0x237efd, _0x31fe36) {
  const _0x1baa42 = _0x1baa();
  return _0x1bdd = function(_0x1bdd63, _0xaf2334) {
    _0x1bdd63 = _0x1bdd63 - 369;
    let _0x2f57f6 = _0x1baa42[_0x1bdd63];
    return _0x2f57f6;
  }, _0x1bdd(_0x237efd, _0x31fe36);
}
import _0x146042 from "axios";
import { Link } from "@inertiajs/vue3";
function _0x1baa() {
  const _0x44365a = ['<div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="', "button", "fetchUserStatus", '<div class="', "text-sm fw-semibold text-body", "offline", "div", '>Users</div><div class="grid-x align-center"', "mb-3", "then", "getUserList", "api.user.online", ">Follow User</button></div>", "><!--[-->", "59050kTeSph", "111793duolWz", "/users/discover", "Follow User", "<!--]-->", "5729480TgpQzL", "error", "<!--[-->", "log", "userstat", '><div class="mb-2 text-3xl fw-semibold align-center"', '></div></div></div></div><div class="mx-1 my-2 divider"', "mb-3 row card avatar card-body mx-2", "2MfcKEq", "username", "Users", "963238rYbqpa", "tags", "text-md", "432KLFMSo", '><div class="gap-2 align-middle flex-container"', "gap-2 align-middle flex-container", "3205590pTDmJv", ' style="', "btn btn-info btn-block", "dname", "<div", "fetchingStatus", "column", "img", "href", "5jSkaRC", "src", "Index", "2oddMacs1", '></div><button class="btn btn-info btn-block"', "2400zjrKZe", "userStatusClass", "<img", "></div>", "text-start", "catch", "border img-fluid headshot rounded-circle border-secondary bg-dark", "card", "success", "modules", "card-body", "get", "mx-1 my-2 divider", "21jXgPYM", "data", "grid-x align-center", "user.profile", '><div class="text-start"', "add", '<!--]--></div><div class="mx-3 my-3 divider"', "mx-3 my-3 divider", "pagedata", "Offline", "setup", "avatar", '<div class="cell small-12"', "cell small-12", "online", "65px", "1039832yDbWvh", "3840348VWRgVy", "users"];
  _0x1baa = function() {
    return _0x44365a;
  };
  return _0x1baa();
}
import "./_plugin-vue_export-helper-7d6fdb2f.mjs";
const __default__ = { "methods": { "getUserList"(_0x2b03f9) {
  const _0x24709b = { _0x5e487a: 423, _0x239092: 386, _0x3be3e8: 416 }, _0x43e50 = { _0xa4d91d: 389, _0x1a49b5: 406 }, _0xc51850 = _0x1bdd;
  var _0x415800 = this, _0x283b95 = _0x2b03f9 ? "/users/discover/?page=" + _0x2b03f9 : _0xc51850(_0x24709b._0x5e487a);
  _0x146042[_0xc51850(_0x24709b._0x239092)](_0x283b95)[_0xc51850(_0x24709b._0x3be3e8)](function(_0x4ab94e) {
    const _0x10b7a6 = _0xc51850;
    _0x4ab94e["data"]["hasOwnProperty"](_0x10b7a6(383)) && (_0x415800[_0x10b7a6(406)] = _0x4ab94e[_0x10b7a6(389)][_0x10b7a6(406)], _0x415800[_0x10b7a6(438)] = _0x4ab94e[_0x10b7a6(_0x43e50._0xa4d91d)][_0x10b7a6(_0x43e50._0x1a49b5)][_0x10b7a6(_0x43e50._0xa4d91d)]);
  })[_0xc51850(380)](function(_0x290962) {
    const _0x2e5b7f = _0xc51850;
    console[_0x2e5b7f(429)](_0x290962);
  });
}, async "fetchUserStatus"() {
  const _0x1b8ef4 = { _0x120bad: 448, _0x309ee5: 430, _0x49ee00: 430, _0x29cf5d: 402, _0x5be1ca: 427 }, _0x5d4e4c = _0x1bdd;
  this["userstat"][_0x5d4e4c(_0x1b8ef4._0x120bad)] = !![];
  const _0x323809 = this[_0x5d4e4c(_0x1b8ef4._0x309ee5)][_0x5d4e4c(402)];
  try {
    const _0x50f874 = await _0x146042["get"](route(_0x5d4e4c(418), { "id": this[_0x5d4e4c(430)]["id"] }));
    this[_0x5d4e4c(_0x1b8ef4._0x49ee00)][_0x5d4e4c(_0x1b8ef4._0x29cf5d)] = _0x50f874["data"][_0x5d4e4c(_0x1b8ef4._0x29cf5d)];
  } catch (_0x23a346) {
    console[_0x5d4e4c(_0x1b8ef4._0x5be1ca)](_0x23a346), this[_0x5d4e4c(430)][_0x5d4e4c(402)] = _0x323809;
  } finally {
    this["userstat"][_0x5d4e4c(_0x1b8ef4._0x120bad)] = ![];
  }
} }, "data"() {
  const _0x2fd680 = _0x1bdd;
  return { "userstat": { "online": ![], "id": this[_0x2fd680(406)]["id"], "fetchingStatus": ![] } };
}, "created"() {
  const _0x34fcb3 = { _0x120b6e: 409 }, _0x363f5c = _0x1bdd;
  this[_0x363f5c(_0x34fcb3._0x120b6e)]();
}, "computed": { "userStatus"() {
  const _0x101368 = { _0xdee33: 402 }, _0x2951a3 = _0x1bdd;
  return this[_0x2951a3(430)][_0x2951a3(_0x101368._0xdee33)] ? "Online" : _0x2951a3(397);
}, "userStatusClass"() {
  const _0x26aed0 = { _0x35ac58: 402 }, _0x275d8a = _0x1bdd;
  return this[_0x275d8a(430)][_0x275d8a(_0x26aed0._0x35ac58)] ? _0x275d8a(402) : _0x275d8a(412);
} } }, _sfc_main = defineComponent({ ...__default__, "__name": _0x3dcd14(372), "__ssrInlineRender": !![], "props": { "users": { "type": Object } }, "setup"(_0x507a9c) {
  const _0x3b86bd = { _0x30b077: 428, _0x1bcafe: 425 };
  return (_0x30907f, _0x3f8024, _0x4defca, _0xe9dbda) => {
    const _0x50edb2 = { _0x10c386: 400, _0xc2c93d: 414, _0x484b0f: 420, _0x54ab5a: 406, _0xe8e566: 417, _0x38f28d: 413, _0x49b771: 395 }, _0x13f0d2 = { _0x57c6d9: 376, _0x43ecce: 379, _0x3df54a: 391, _0x38186a: 435, _0x5cd4b3: 411, _0xefc19: 369, _0x3595d5: 413, _0x56cdf4: 408, _0x3f4a21: 424 }, _0x4bba8d = { _0x14b0d1: 415, _0x429d64: 382, _0x2231b1: 385, _0x4c372e: 376, _0x76c428: 433, _0x2f9e89: 449, _0x1e4716: 392, _0x3e0a91: 447, _0x4f158c: 378, _0x39742f: 411 }, _0x526ea1 = _0x1bdd, _0x5ea90e = resolveComponent("AeoPagination");
    _0x3f8024(_0x526ea1(_0x3b86bd._0x30b077)), _0x3f8024(ssrRenderComponent(_0x3b7927, null, null, _0x4defca)), _0x3f8024(ssrRenderComponent(_0xa650b3, null, { "default": withCtx((_0x32e18f, _0x5a0811, _0x5cb827, _0x2ddc79) => {
      const _0x310352 = { _0x12b0e2: 435 }, _0x1ae706 = { _0x55bdc3: 377, _0x32b426: 371, _0x41e324: 444, _0x56d609: 450, _0x5f2748: 381, _0x5aba5c: 373 }, _0x3db099 = _0x526ea1;
      if (_0x5a0811)
        _0x5a0811(_0x3db099(_0x50edb2._0x10c386) + _0x2ddc79 + _0x3db099(431) + _0x2ddc79 + _0x3db099(_0x50edb2._0xc2c93d) + _0x2ddc79 + _0x3db099(_0x50edb2._0x484b0f)), ssrRenderList(_0x507a9c[_0x3db099(_0x50edb2._0x54ab5a)][_0x3db099(389)], (_0x44ff12) => {
          const _0x3e9fe3 = _0x3db099;
          _0x5a0811(_0x3e9fe3(410) + ssrRenderClass([[_0x3e9fe3(_0x4bba8d._0x14b0d1), _0x3e9fe3(_0x4bba8d._0x429d64), _0x3e9fe3(_0x4bba8d._0x2231b1), "card-status", _0x30907f[_0x3e9fe3(_0x4bba8d._0x4c372e)]], _0x3e9fe3(_0x4bba8d._0x76c428)]) + '"' + _0x2ddc79 + _0x3e9fe3(441) + _0x2ddc79 + ">"), _0x5a0811(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x3e9fe3(391), { "username": _0x44ff12["username"] }) }, { "default": withCtx((_0x3d8db, _0x5a5e94, _0x10e2fe, _0x3ddc87) => {
            const _0x41f23d = _0x3e9fe3;
            if (_0x5a5e94)
              _0x5a5e94(_0x41f23d(_0x1ae706._0x55bdc3) + ssrRenderAttr(_0x41f23d(_0x1ae706._0x32b426), _0x44ff12[_0x41f23d(399)]) + _0x41f23d(_0x1ae706._0x41e324) + ssrRenderStyle({ "max-width": "65px" }) + '" class="border img-fluid headshot rounded-circle border-secondary bg-dark" alt="2oddMacs1"' + _0x3ddc87 + ">");
            else
              return [createVNode(_0x41f23d(_0x1ae706._0x56d609), { "src": _0x44ff12[_0x41f23d(399)], "style": { "max-width": "65px" }, "class": _0x41f23d(_0x1ae706._0x5f2748), "alt": _0x41f23d(_0x1ae706._0x5aba5c) }, null, 8, [_0x41f23d(_0x1ae706._0x32b426)])];
          }), "_": 2 }, _0x5cb827, _0x2ddc79)), _0x5a0811(_0x3e9fe3(407) + ssrRenderStyle({ "flex-direction": _0x3e9fe3(_0x4bba8d._0x2f9e89) }) + '"' + _0x2ddc79 + _0x3e9fe3(_0x4bba8d._0x1e4716) + _0x2ddc79 + ">"), _0x5a0811(ssrRenderComponent(unref(Link), { "href": unref(route)("user.profile", { "username": _0x44ff12[_0x3e9fe3(435)] }), "class": "text-md" }, { "default": withCtx((_0x41d487, _0x1051ce, _0xa2ca67, _0x199dbd) => {
            const _0x4e1b34 = _0x3e9fe3;
            if (_0x1051ce)
              _0x1051ce("" + ssrInterpolate(_0x44ff12[_0x4e1b34(446)]));
            else
              return [createTextVNode(toDisplayString(_0x44ff12[_0x4e1b34(446)]), 1)];
          }), "_": 2 }, _0x5cb827, _0x2ddc79)), _0x5a0811(_0x3e9fe3(_0x4bba8d._0x3e0a91) + _0x2ddc79 + _0x3e9fe3(_0x4bba8d._0x4f158c)), _0x5a0811(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x3e9fe3(391), { "username": _0x44ff12[_0x3e9fe3(435)] }), "class": _0x3e9fe3(_0x4bba8d._0x39742f) }, { "default": withCtx((_0x5e2e1a, _0x316435, _0x337ec0, _0x7ec6a8) => {
            const _0x5cdd2 = _0x3e9fe3;
            if (_0x316435)
              _0x316435("" + ssrInterpolate("@" + _0x44ff12[_0x5cdd2(_0x310352._0x12b0e2)]));
            else
              return [createTextVNode(toDisplayString("@" + _0x44ff12["username"]), 1)];
          }), "_": 2 }, _0x5cb827, _0x2ddc79)), _0x5a0811("<div" + _0x2ddc79 + _0x3e9fe3(432) + _0x2ddc79 + _0x3e9fe3(374) + _0x2ddc79 + _0x3e9fe3(419));
        }), _0x5a0811(_0x3db099(394) + _0x2ddc79 + _0x3db099(378)), _0x5a0811(ssrRenderComponent(_0x5ea90e, { "pagedata": _0x507a9c[_0x3db099(406)], "onPageClicked": _0x30907f[_0x3db099(_0x50edb2._0xe8e566)] }, null, _0x5cb827, _0x2ddc79)), _0x5a0811("</div>");
      else
        return [createVNode(_0x3db099(_0x50edb2._0x38f28d), { "class": _0x3db099(401) }, [createVNode(_0x3db099(_0x50edb2._0x38f28d), { "class": "mb-2 text-3xl fw-semibold align-center" }, _0x3db099(436)), createVNode(_0x3db099(_0x50edb2._0x38f28d), { "class": _0x3db099(390) }, [(openBlock(!![]), createBlock(Fragment, null, renderList(_0x507a9c[_0x3db099(_0x50edb2._0x54ab5a)][_0x3db099(389)], (_0xf009fb) => {
          const _0x4266bf = _0x3db099;
          return openBlock(), createBlock(_0x4266bf(413), { "class": [_0x4266bf(433), [_0x4266bf(415), _0x4266bf(382), _0x4266bf(385), "card-status", _0x30907f[_0x4266bf(_0x13f0d2._0x57c6d9)]]], "key": _0x507a9c[_0x4266bf(406)]["id"] }, [createVNode(_0x4266bf(413), { "class": _0x4266bf(442) }, [createVNode(unref(Link), { "href": unref(route)("user.profile", { "username": _0xf009fb["username"] }) }, { "default": withCtx(() => [createVNode(_0x4266bf(450), { "src": _0xf009fb[_0x4266bf(399)], "style": { "max-width": _0x4266bf(403) }, "class": _0x4266bf(381), "alt": _0x4266bf(373) }, null, 8, ["src"])]), "_": 2 }, 1032, [_0x4266bf(369)]), createVNode(_0x4266bf(413), { "class": "flex-wrap col-md-4 d-flex justify-content-center align-content-start", "style": { "flex-direction": "column" } }, [createVNode("div", { "class": _0x4266bf(_0x13f0d2._0x43ecce) }, [createVNode(unref(Link), { "href": unref(route)(_0x4266bf(391), { "username": _0xf009fb[_0x4266bf(435)] }), "class": _0x4266bf(439) }, { "default": withCtx(() => [createTextVNode(toDisplayString(_0xf009fb["dname"]), 1)]), "_": 2 }, 1032, [_0x4266bf(369)]), createVNode("div"), createVNode(unref(Link), { "href": unref(route)(_0x4266bf(_0x13f0d2._0x3df54a), { "username": _0xf009fb[_0x4266bf(_0x13f0d2._0x38186a)] }), "class": _0x4266bf(_0x13f0d2._0x5cd4b3) }, { "default": withCtx(() => [createTextVNode(toDisplayString("@" + _0xf009fb[_0x4266bf(435)]), 1)]), "_": 2 }, 1032, [_0x4266bf(_0x13f0d2._0xefc19)]), createVNode(_0x4266bf(_0x13f0d2._0x3595d5))])])]), createVNode(_0x4266bf(_0x13f0d2._0x3595d5), { "class": _0x4266bf(387) }), createVNode(_0x4266bf(_0x13f0d2._0x56cdf4), { "class": _0x4266bf(445) }, _0x4266bf(_0x13f0d2._0x3f4a21))], 2);
        }), 128))]), createVNode(_0x3db099(413), { "class": _0x3db099(_0x50edb2._0x49b771) }), createVNode(_0x5ea90e, { "pagedata": _0x507a9c[_0x3db099(_0x50edb2._0x54ab5a)], "onPageClicked": _0x30907f[_0x3db099(417)] }, null, 8, [_0x3db099(396), "onPageClicked"])])];
    }), "_": 1 }, _0x4defca)), _0x3f8024(ssrRenderComponent(_0x4d461a, null, null, _0x4defca)), _0x3f8024(_0x526ea1(_0x3b86bd._0x1bcafe));
  };
} }), _sfc_setup = _sfc_main["setup"];
_sfc_main[_0x3dcd14(398)] = (_0x5d0dde, _0x8f5088) => {
  const _0x1e02d0 = _0x3dcd14, _0x17a2ee = useSSRContext();
  return (_0x17a2ee[_0x1e02d0(384)] || (_0x17a2ee["modules"] = /* @__PURE__ */ new Set()))[_0x1e02d0(393)]("resources/js/Pages/Users/Index.vue"), _sfc_setup ? _sfc_setup(_0x5d0dde, _0x8f5088) : void 0;
};
export {
  _sfc_main as default
};
