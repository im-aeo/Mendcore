const _0x42ac06 = _0x53a5;
(function(_0x4284e9, _0x5e12c2) {
  const _0x250122 = { _0x58fb2c: 359, _0x546653: 365, _0x2dc5ca: 387 }, _0x2f890d = _0x53a5, _0x31391a = _0x4284e9();
  while (!![]) {
    try {
      const _0x51e2bd = parseInt(_0x2f890d(413)) / 1 * (parseInt(_0x2f890d(_0x250122._0x58fb2c)) / 2) + -parseInt(_0x2f890d(377)) / 3 + -parseInt(_0x2f890d(415)) / 4 + parseInt(_0x2f890d(420)) / 5 + -parseInt(_0x2f890d(_0x250122._0x546653)) / 6 + -parseInt(_0x2f890d(422)) / 7 + -parseInt(_0x2f890d(_0x250122._0x2dc5ca)) / 8 * (-parseInt(_0x2f890d(419)) / 9);
      if (_0x51e2bd === _0x5e12c2)
        break;
      else
        _0x31391a["push"](_0x31391a["shift"]());
    } catch (_0x485f9f) {
      _0x31391a["push"](_0x31391a["shift"]());
    }
  }
})(_0x2ba0, 200051);
import { defineComponent, resolveComponent, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
function _0x53a5(_0x2ef9db, _0x5b9692) {
  const _0x2ba025 = _0x2ba0();
  return _0x53a5 = function(_0x53a522, _0x36c198) {
    _0x53a522 = _0x53a522 - 355;
    let _0x1fbcb7 = _0x2ba025[_0x53a522];
    return _0x1fbcb7;
  }, _0x53a5(_0x2ef9db, _0x5b9692);
}
import { _ as _0x27d7b7 } from "./Navbar-354467b7.mjs";
import { _ as _0x4d4444 } from "./Footer-21dd745d.mjs";
import { _ as _0x1e453b } from "./Sidebar-70f4a6f7.mjs";
import { route } from "momentum-trail";
import _0x485672 from "axios";
import { Link } from "@inertiajs/vue3";
function _0x2ba0() {
  const _0x3b043d = ["userstat", "userStatusClass", "></div>", "column", "user.profile", "href", "21648HAKzMb", "Online", "<img", "mb-2 text-3xl fw-semibold align-center", "text-start", "add", "hasOwnProperty", "div", "mx-3 my-3 divider", ">Follow User</button></div>", '><div class="mb-2 text-3xl fw-semibold align-center"', "</div>", "<!--]-->", "65px", "onPageClicked", "username", "modules", "Index", "avatar", "then", '><div class="gap-2 align-middle flex-container"', "dname", "2oddMacs1", "setup", "gap-2 align-middle flex-container", '" class="border img-fluid headshot rounded-circle border-secondary bg-dark" alt="2oddMacs1"', "1FLsrLD", "Offline", "584612HdAaFa", "success", "mx-2 mb-3 row card avatar card-body", "card-body", "360lKhToo", "1835260dbtISt", "text-md", "342006lUiFxd", '></div></div></div></div><div class="mx-1 my-2 divider"', "get", '<!--]--></div><div class="mx-3 my-3 divider"', "mx-1 my-2 divider", "flex-wrap col-md-4 d-flex justify-content-center align-content-start", "online", "card-status", "data", "resources/js/Pages/Users/Index.vue", "mb-3", "137588yhrOhw", "Users", "Follow User", "users", "img", "cell small-12", "207186niMALf", "<div", "pagedata", "catch", "offline", "border img-fluid headshot rounded-circle border-secondary bg-dark", "button", "<!--[-->", "AeoPagination", "tags", "src", "text-sm fw-semibold text-body", "343479ptbhcF", "fetchUserStatus", "getUserList", "card"];
  _0x2ba0 = function() {
    return _0x3b043d;
  };
  return _0x2ba0();
}
const __default__ = { "methods": { "getUserList"(_0x2b0018) {
  const _0x2ed99d = { _0xd9dc0d: 368 }, _0x196f08 = { _0x2ec3db: 356, _0x31ce66: 362, _0x4ac4e4: 374, _0x494bc3: 362 }, _0x32d441 = _0x53a5;
  var _0x40e5af = this, _0x407561 = _0x2b0018 ? "/users/discover/?page=" + _0x2b0018 : "/users/discover";
  _0x485672["get"](_0x407561)[_0x32d441(406)](function(_0x363924) {
    const _0x517c1a = _0x32d441;
    _0x363924[_0x517c1a(_0x196f08._0x2ec3db)][_0x517c1a(393)](_0x517c1a(416)) && (_0x40e5af[_0x517c1a(_0x196f08._0x31ce66)] = _0x363924[_0x517c1a(356)]["users"], _0x40e5af[_0x517c1a(_0x196f08._0x4ac4e4)] = _0x363924[_0x517c1a(356)][_0x517c1a(_0x196f08._0x494bc3)]["data"]);
  })[_0x32d441(_0x2ed99d._0xd9dc0d)](function(_0x10862b) {
    console["log"](_0x10862b);
  });
}, async "fetchUserStatus"() {
  const _0x50fc94 = { _0x356f6c: 381, _0x95cdaa: 428, _0x153205: 356 }, _0x5c39cc = _0x53a5;
  this[_0x5c39cc(381)]["fetchingStatus"] = !![];
  const _0x5e3238 = this[_0x5c39cc(_0x50fc94._0x356f6c)][_0x5c39cc(428)];
  try {
    const _0xb14d = await _0x485672[_0x5c39cc(424)](route("api.user.online", { "id": this[_0x5c39cc(381)]["id"] }));
    this["userstat"][_0x5c39cc(_0x50fc94._0x95cdaa)] = _0xb14d[_0x5c39cc(_0x50fc94._0x153205)][_0x5c39cc(_0x50fc94._0x95cdaa)];
  } catch (_0x19ea82) {
    console["error"](_0x19ea82), this[_0x5c39cc(381)]["online"] = _0x5e3238;
  } finally {
    this[_0x5c39cc(381)]["fetchingStatus"] = ![];
  }
} }, "data"() {
  const _0x318eb1 = { _0x28403d: 362 }, _0x427cda = _0x53a5;
  return { "userstat": { "online": ![], "id": this[_0x427cda(_0x318eb1._0x28403d)]["data"]["id"], "fetchingStatus": ![] } };
}, "created"() {
  const _0x45a490 = _0x53a5;
  this[_0x45a490(378)]();
}, "computed": { "userStatus"() {
  const _0x24f03c = { _0x4a154c: 381, _0x41d246: 388 }, _0x340a67 = _0x53a5;
  return this[_0x340a67(_0x24f03c._0x4a154c)][_0x340a67(428)] ? _0x340a67(_0x24f03c._0x41d246) : _0x340a67(414);
}, "userStatusClass"() {
  const _0x3fc97e = { _0xfec7a0: 381, _0x426fbe: 428, _0x59238e: 428, _0xddd972: 369 }, _0x2f411b = _0x53a5;
  return this[_0x2f411b(_0x3fc97e._0xfec7a0)][_0x2f411b(_0x3fc97e._0x426fbe)] ? _0x2f411b(_0x3fc97e._0x59238e) : _0x2f411b(_0x3fc97e._0xddd972);
} } }, _sfc_main = defineComponent({ ...__default__, "__name": _0x42ac06(404), "__ssrInlineRender": !![], "props": { "users": { "type": Object } }, "setup"(_0x43aaeb) {
  const _0x459fd8 = { _0x5c8242: 373, _0x3c85bb: 372 };
  return (_0x1f353c, _0x56fa90, _0xb63969, _0x2b88d9) => {
    const _0x194c39 = { _0xbe1cdc: 397, _0x413fb8: 362, _0x390514: 360, _0x28ac36: 394, _0x5e69f9: 379, _0x5a40fa: 367, _0xa2beb: 401 }, _0xbb3f94 = { _0x1bed00: 417, _0x16c09c: 358, _0x161f0e: 380, _0xf2ee21: 418, _0x20b48e: 427, _0x5b3335: 384, _0x24539a: 394, _0x1991c4: 391, _0x4a7640: 402, _0x482884: 386, _0x3aa920: 385, _0x2d783a: 402, _0x327108: 371 }, _0x5e62eb = { _0xde4203: 358, _0x478931: 380, _0x4d967: 355, _0x45fa6b: 417, _0x5c9018: 407, _0x329819: 385, _0x48b2c7: 384, _0x3a64f: 366, _0x324a34: 402, _0x372b2d: 376, _0x2fcc78: 423, _0x1e496b: 396 }, _0x4aef8f = _0x53a5, _0x49bfdd = resolveComponent(_0x4aef8f(_0x459fd8._0x5c8242));
    _0x56fa90(_0x4aef8f(_0x459fd8._0x3c85bb)), _0x56fa90(ssrRenderComponent(_0x27d7b7, null, null, _0xb63969)), _0x56fa90(ssrRenderComponent(_0x1e453b, null, { "default": withCtx((_0x2ee5ff, _0x156f52, _0x42e0d5, _0x527e77) => {
      const _0x1ffa3f = _0x4aef8f;
      if (_0x156f52)
        _0x156f52('<div class="cell small-12"' + _0x527e77 + _0x1ffa3f(_0x194c39._0xbe1cdc) + _0x527e77 + '>Users</div><div class="grid-x align-center"' + _0x527e77 + "><!--[-->"), ssrRenderList(_0x43aaeb[_0x1ffa3f(362)]["data"], (_0x4df6ae) => {
          const _0xf97107 = { _0x509fa2: 402 }, _0x28d0a6 = { _0x4e0487: 389, _0x3ee9ff: 375, _0x5e7d9a: 409 }, _0x356ff8 = _0x1ffa3f;
          _0x156f52('<div class="' + ssrRenderClass([[_0x356ff8(_0x5e62eb._0xde4203), _0x356ff8(_0x5e62eb._0x478931), "card-body", _0x356ff8(_0x5e62eb._0x4d967), _0x1f353c[_0x356ff8(382)]], _0x356ff8(_0x5e62eb._0x45fa6b)]) + '"' + _0x527e77 + _0x356ff8(_0x5e62eb._0x5c9018) + _0x527e77 + ">"), _0x156f52(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x356ff8(_0x5e62eb._0x329819), { "username": _0x4df6ae[_0x356ff8(402)] }) }, { "default": withCtx((_0x202df7, _0x4e9888, _0x21e5a7, _0x30434c) => {
            const _0x44a4b6 = _0x356ff8;
            if (_0x4e9888)
              _0x4e9888(_0x44a4b6(_0x28d0a6._0x4e0487) + ssrRenderAttr(_0x44a4b6(_0x28d0a6._0x3ee9ff), _0x4df6ae["avatar"]) + ' style="' + ssrRenderStyle({ "max-width": _0x44a4b6(400) }) + _0x44a4b6(412) + _0x30434c + ">");
            else
              return [createVNode("img", { "src": _0x4df6ae[_0x44a4b6(405)], "style": { "max-width": "65px" }, "class": "border img-fluid headshot rounded-circle border-secondary bg-dark", "alt": _0x44a4b6(_0x28d0a6._0x5e7d9a) }, null, 8, [_0x44a4b6(375)])];
          }), "_": 2 }, _0x42e0d5, _0x527e77)), _0x156f52('<div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start" style="' + ssrRenderStyle({ "flex-direction": _0x356ff8(_0x5e62eb._0x48b2c7) }) + '"' + _0x527e77 + '><div class="text-start"' + _0x527e77 + ">"), _0x156f52(ssrRenderComponent(unref(Link), { "href": unref(route)("user.profile", { "username": _0x4df6ae[_0x356ff8(402)] }), "class": "text-md" }, { "default": withCtx((_0x183e57, _0x51467a, _0x5db17a, _0x2bf78b) => {
            if (_0x51467a)
              _0x51467a("" + ssrInterpolate(_0x4df6ae["dname"]));
            else
              return [createTextVNode(toDisplayString(_0x4df6ae["dname"]), 1)];
          }), "_": 2 }, _0x42e0d5, _0x527e77)), _0x156f52(_0x356ff8(_0x5e62eb._0x3a64f) + _0x527e77 + "></div>"), _0x156f52(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x356ff8(385), { "username": _0x4df6ae[_0x356ff8(_0x5e62eb._0x324a34)] }), "class": _0x356ff8(_0x5e62eb._0x372b2d) }, { "default": withCtx((_0x3a6542, _0x2c5f36, _0x71dc1b, _0x54e520) => {
            const _0x10eabb = _0x356ff8;
            if (_0x2c5f36)
              _0x2c5f36("" + ssrInterpolate("@" + _0x4df6ae[_0x10eabb(_0xf97107._0x509fa2)]));
            else
              return [createTextVNode(toDisplayString("@" + _0x4df6ae[_0x10eabb(402)]), 1)];
          }), "_": 2 }, _0x42e0d5, _0x527e77)), _0x156f52("<div" + _0x527e77 + _0x356ff8(_0x5e62eb._0x2fcc78) + _0x527e77 + '></div><button class="btn btn-info btn-block"' + _0x527e77 + _0x356ff8(_0x5e62eb._0x1e496b));
        }), _0x156f52(_0x1ffa3f(425) + _0x527e77 + _0x1ffa3f(383)), _0x156f52(ssrRenderComponent(_0x49bfdd, { "pagedata": _0x43aaeb[_0x1ffa3f(_0x194c39._0x413fb8)], "onPageClicked": _0x1f353c["getUserList"] }, null, _0x42e0d5, _0x527e77)), _0x156f52(_0x1ffa3f(398));
      else
        return [createVNode(_0x1ffa3f(394), { "class": _0x1ffa3f(364) }, [createVNode(_0x1ffa3f(394), { "class": _0x1ffa3f(390) }, _0x1ffa3f(_0x194c39._0x390514)), createVNode(_0x1ffa3f(_0x194c39._0x28ac36), { "class": "grid-x align-center" }, [(openBlock(!![]), createBlock(Fragment, null, renderList(_0x43aaeb[_0x1ffa3f(_0x194c39._0x413fb8)]["data"], (_0x89c885) => {
          const _0x342293 = _0x1ffa3f;
          return openBlock(), createBlock(_0x342293(394), { "class": [_0x342293(_0xbb3f94._0x1bed00), [_0x342293(_0xbb3f94._0x16c09c), _0x342293(_0xbb3f94._0x161f0e), _0x342293(_0xbb3f94._0xf2ee21), _0x342293(355), _0x1f353c["userStatusClass"]]], "key": _0x43aaeb[_0x342293(362)]["id"] }, [createVNode("div", { "class": _0x342293(411) }, [createVNode(unref(Link), { "href": unref(route)("user.profile", { "username": _0x89c885["username"] }) }, { "default": withCtx(() => [createVNode(_0x342293(363), { "src": _0x89c885[_0x342293(405)], "style": { "max-width": _0x342293(400) }, "class": _0x342293(370), "alt": _0x342293(409) }, null, 8, ["src"])]), "_": 2 }, 1032, [_0x342293(386)]), createVNode(_0x342293(394), { "class": _0x342293(_0xbb3f94._0x20b48e), "style": { "flex-direction": _0x342293(_0xbb3f94._0x5b3335) } }, [createVNode(_0x342293(_0xbb3f94._0x24539a), { "class": _0x342293(_0xbb3f94._0x1991c4) }, [createVNode(unref(Link), { "href": unref(route)(_0x342293(385), { "username": _0x89c885[_0x342293(_0xbb3f94._0x4a7640)] }), "class": _0x342293(421) }, { "default": withCtx(() => [createTextVNode(toDisplayString(_0x89c885[_0x342293(408)]), 1)]), "_": 2 }, 1032, [_0x342293(_0xbb3f94._0x482884)]), createVNode(_0x342293(394)), createVNode(unref(Link), { "href": unref(route)(_0x342293(_0xbb3f94._0x3aa920), { "username": _0x89c885[_0x342293(_0xbb3f94._0x2d783a)] }), "class": _0x342293(376) }, { "default": withCtx(() => [createTextVNode(toDisplayString("@" + _0x89c885[_0x342293(402)]), 1)]), "_": 2 }, 1032, [_0x342293(386)]), createVNode("div")])])]), createVNode(_0x342293(394), { "class": _0x342293(426) }), createVNode(_0x342293(_0xbb3f94._0x327108), { "class": "btn btn-info btn-block" }, _0x342293(361))], 2);
        }), 128))]), createVNode(_0x1ffa3f(_0x194c39._0x28ac36), { "class": _0x1ffa3f(395) }), createVNode(_0x49bfdd, { "pagedata": _0x43aaeb[_0x1ffa3f(362)], "onPageClicked": _0x1f353c[_0x1ffa3f(_0x194c39._0x5e69f9)] }, null, 8, [_0x1ffa3f(_0x194c39._0x5a40fa), _0x1ffa3f(_0x194c39._0xa2beb)])])];
    }), "_": 1 }, _0xb63969)), _0x56fa90(ssrRenderComponent(_0x4d4444, null, null, _0xb63969)), _0x56fa90(_0x4aef8f(399));
  };
} }), _sfc_setup = _sfc_main[_0x42ac06(410)];
_sfc_main[_0x42ac06(410)] = (_0x59fca1, _0x4a5a4e) => {
  const _0xee166e = { _0x11800a: 403 }, _0x50ffe5 = _0x42ac06, _0x5c6d37 = useSSRContext();
  return (_0x5c6d37[_0x50ffe5(403)] || (_0x5c6d37[_0x50ffe5(_0xee166e._0x11800a)] = /* @__PURE__ */ new Set()))[_0x50ffe5(392)](_0x50ffe5(357)), _sfc_setup ? _sfc_setup(_0x59fca1, _0x4a5a4e) : void 0;
};
export {
  _sfc_main as default
};
