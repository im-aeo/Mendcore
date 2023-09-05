const _0x1a5a40 = _0x57e6;
(function(_0x41b795, _0x3f2687) {
  const _0x8d2bfd = { _0x1e8f65: 523, _0x330b3f: 525, _0x13a5ff: 498, _0x322f03: 508, _0x9da4ac: 574, _0x495b22: 548, _0x25c733: 564, _0x5e68d0: 575 }, _0x4474e1 = _0x57e6, _0x2785ee = _0x41b795();
  while (!![]) {
    try {
      const _0x9c3865 = -parseInt(_0x4474e1(_0x8d2bfd._0x1e8f65)) / 1 * (-parseInt(_0x4474e1(557)) / 2) + parseInt(_0x4474e1(534)) / 3 + -parseInt(_0x4474e1(_0x8d2bfd._0x330b3f)) / 4 * (parseInt(_0x4474e1(_0x8d2bfd._0x13a5ff)) / 5) + -parseInt(_0x4474e1(_0x8d2bfd._0x322f03)) / 6 * (-parseInt(_0x4474e1(_0x8d2bfd._0x9da4ac)) / 7) + -parseInt(_0x4474e1(_0x8d2bfd._0x495b22)) / 8 * (-parseInt(_0x4474e1(_0x8d2bfd._0x25c733)) / 9) + -parseInt(_0x4474e1(536)) / 10 + parseInt(_0x4474e1(582)) / 11 * (-parseInt(_0x4474e1(_0x8d2bfd._0x5e68d0)) / 12);
      if (_0x9c3865 === _0x3f2687)
        break;
      else
        _0x2785ee["push"](_0x2785ee["shift"]());
    } catch (_0x23f9ea) {
      _0x2785ee["push"](_0x2785ee["shift"]());
    }
  }
})(_0x387c, 592310);
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext, ref, createVNode } from "vue";
import { ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import _0x50a935 from "axios";
import { Link } from "@inertiajs/vue3";
import { route } from "momentum-trail";
import { _ as _0x4ef3a3 } from "./Navbar-cfe40770.mjs";
import { _ as _0x392820 } from "./Sidebar-d98a6955.mjs";
import { F as _0x29bc7e } from "./Footer-52d2ed2b.mjs";
import { _ as _0x2b6e9b } from "./AppHead-5e63564a.mjs";
import { _ as _0x1a1cde } from "./_plugin-vue_export-helper-7d6fdb2f.mjs";
import "dayjs";
const __default__$1 = { "data"() {
  const _0x101b93 = _0x57e6;
  return { "userstat": { "online": ![], "following": ![], "id": this[_0x101b93(550)]["id"], "fetchingStatus": ![] } };
}, "created"() {
  this["fetchUserStatus"]();
}, "computed": { "userStatus"() {
  const _0x1cf9d1 = { _0x137938: 527 }, _0x3b83f9 = _0x57e6;
  return this[_0x3b83f9(561)]["online"] ? "Online" : _0x3b83f9(_0x1cf9d1._0x137938);
}, "userStatusClass"() {
  const _0x3abca6 = _0x57e6;
  return this["userstat"][_0x3abca6(567)] ? "online" : "offline";
} }, "methods": { async "fetchUserStatus"() {
  const _0x55c6da = { _0x4b16e7: 561, _0x55c5dd: 521, _0x1f4abf: 567, _0x4908c4: 567 }, _0x3f9df0 = _0x57e6;
  this[_0x3f9df0(561)][_0x3f9df0(502)] = !![];
  const _0x5929ac = this[_0x3f9df0(_0x55c6da._0x4b16e7)]["online"];
  try {
    const _0xc4f353 = await _0x50a935["get"](route(_0x3f9df0(_0x55c6da._0x55c5dd), { "id": this[_0x3f9df0(_0x55c6da._0x4b16e7)]["id"] }));
    this[_0x3f9df0(561)][_0x3f9df0(_0x55c6da._0x1f4abf)] = _0xc4f353[_0x3f9df0(541)][_0x3f9df0(567)];
  } catch (_0x461e5d) {
    console["error"](_0x461e5d), this[_0x3f9df0(561)][_0x3f9df0(_0x55c6da._0x4908c4)] = _0x5929ac;
  } finally {
    this["userstat"][_0x3f9df0(502)] = ![];
  }
}, async "fetchFollowStatus"() {
  const _0x46086f = { _0xb5c9c4: 502, _0x59377e: 572, _0x36f184: 541, _0x4610dd: 568, _0x25ce2f: 561 }, _0x3bf941 = _0x57e6;
  this[_0x3bf941(561)][_0x3bf941(_0x46086f._0xb5c9c4)] = !![], this["userstat"][_0x3bf941(_0x46086f._0x59377e)];
  try {
    const _0x16e89a = await _0x50a935["get"](route(_0x3bf941(521), { "id": this["userstat"]["id"] }));
    this[_0x3bf941(561)][_0x3bf941(_0x46086f._0x59377e)] = _0x16e89a[_0x3bf941(_0x46086f._0x36f184)]["following"];
  } catch (_0x345946) {
    console[_0x3bf941(_0x46086f._0x4610dd)](_0x345946), this[_0x3bf941(_0x46086f._0x25ce2f)][_0x3bf941(567)] = cachedOnlineStatus;
  } finally {
    this[_0x3bf941(561)]["fetchingStatus"] = ![];
  }
}, "showModal"(_0x4399df) {
  const _0x1dfdff = { _0x3b7a5a: 579, _0xb2f9df: 583 }, _0x38ef44 = _0x57e6, _0x79b481 = document["getElementById"](_0x4399df);
  _0x79b481 && _0x79b481[_0x38ef44(_0x1dfdff._0x3b7a5a)]["toggle"](_0x38ef44(_0x1dfdff._0xb2f9df));
} } }, _sfc_main$1 = defineComponent({ ...__default__$1, "__name": _0x1a5a40(509), "__ssrInlineRender": !![], "props": { "user": { "type": Object } }, "setup"(_0x7fe5ae) {
  const _0x3c595c = { _0x52705d: 550, _0x63ce9d: 516, _0xe025f3: 569, _0x5bf76f: 499, _0x5dc2c3: 512, _0x364314: 550, _0x5d2a9d: 566, _0x469ef4: 554, _0x4958df: 506, _0x20e826: 495, _0x20134b: 550, _0x53a41a: 507, _0x1f5144: 563, _0x5815b1: 558, _0x2b0092: 558, _0xa4ec09: 530, _0x99505f: 511, _0x20de0d: 537, _0x55a97e: 504, _0x38115a: 504, _0x2d3fe2: 518, _0x114313: 532, _0x42e3c1: 546, _0x256454: 546, _0x295a4e: 576 }, _0x360e10 = { _0x33a570: 496, _0x360014: 581, _0x2f9e13: 522 }, _0x56c465 = { _0x5ec89d: 496, _0x132537: 577 };
  return (_0x472c3b, _0x2c07b9, _0x2b178d, _0x1f2d64) => {
    const _0x3b5d2f = _0x57e6;
    _0x2c07b9('<!--[--><div class="modal" id="following-modal"><div class="modal-card modal-card-body"><div class="section-borderless"><div class="gap-2 align-middle flex-container align-justify"><div class="text-lg fw-semibold">' + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(_0x3c595c._0x52705d)][_0x3b5d2f(_0x3c595c._0x63ce9d)]) + _0x3b5d2f(556) + ssrRenderStyle({ "margin-right": _0x3b5d2f(499) }) + _0x3b5d2f(580)), ssrRenderList(_0x7fe5ae[_0x3b5d2f(550)][_0x3b5d2f(529)], (_0x5ea690) => {
      const _0x149ad2 = _0x3b5d2f;
      _0x2c07b9(_0x149ad2(_0x56c465._0x5ec89d) + ssrInterpolate(_0x5ea690[_0x149ad2(516)]) + _0x149ad2(_0x56c465._0x132537) + ssrInterpolate(_0x5ea690["username"]) + _0x149ad2(581)), _0x2c07b9(ssrRenderComponent(unref(Link), { "href": unref(route)(_0x149ad2(545), { "username": _0x5ea690[_0x149ad2(546)] }), "class": "min-w-0 btn btn-info btn-sm text-truncate" }, { "default": withCtx((_0x586dea, _0x3ebd45, _0x286dfc, _0x2cfbf6) => {
        const _0x32ac45 = _0x149ad2;
        if (_0x3ebd45)
          _0x3ebd45(_0x32ac45(514));
        else
          return [createTextVNode(_0x32ac45(514))];
      }), "_": 2 }, _0x2b178d)), _0x2c07b9(_0x149ad2(522));
    }), _0x2c07b9(_0x3b5d2f(549) + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(550)]["display_name"]) + _0x3b5d2f(_0x3c595c._0xe025f3) + ssrRenderStyle({ "margin-right": _0x3b5d2f(_0x3c595c._0x5bf76f) }) + _0x3b5d2f(580)), ssrRenderList(_0x7fe5ae["user"][_0x3b5d2f(578)], (_0x51e749) => {
      const _0x27017b = _0x3b5d2f;
      _0x2c07b9(_0x27017b(_0x360e10._0x33a570) + ssrInterpolate(_0x51e749[_0x27017b(546)]) + _0x27017b(577) + ssrInterpolate(_0x51e749["username"]) + _0x27017b(_0x360e10._0x360014)), _0x2c07b9(ssrRenderComponent(unref(Link), { "href": _0x27017b(570), "class": "min-w-0 btn btn-info btn-sm text-truncate" }, { "default": withCtx((_0x441535, _0x4c8751, _0x345496, _0x4761a8) => {
        const _0x58a39b = _0x27017b;
        if (_0x4c8751)
          _0x4c8751(_0x58a39b(514));
        else
          return [createTextVNode(" View Profile ")];
      }), "_": 2 }, _0x2b178d)), _0x2c07b9(_0x27017b(_0x360e10._0x2f9e13));
    }), _0x2c07b9('<!--]--></div></div></div></div><div class="cell medium-3"><div class="mb-3 card card-body">' + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(550)][_0x3b5d2f(520)]) + _0x3b5d2f(540) + ssrRenderStyle({ "line-height": "16px" }) + _0x3b5d2f(_0x3c595c._0x5dc2c3) + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(_0x3c595c._0x364314)]["display_name"]) + '</div><div class="text-sm text-muted fw-semibold">' + ssrInterpolate("@" + _0x7fe5ae["user"]["username"]) + _0x3b5d2f(543) + ssrRenderStyle({ "margin-right": _0x3b5d2f(584) }) + '"><button class="text-sm far fa-ellipsis-vertical btn-circle" data-tooltip-title="More" data-tooltip-placement="bottom"></button><ul class="dropdown-menu dropdown-menu-end"><li class="dropdown-item"><a href="#" class="dropdown-link dropdown-link-has-icon"><i class="fas fa-exchange dropdown-icon"></i> Send Trade </a></li><li class="dropdown-item"><a href="#" class="dropdown-link dropdown-link-has-icon"><i class="fas fa-flag dropdown-icon"></i> Report </a></li><div class="align-middle flex-container"><div class="dropdown-title">Moderation</div><li class="divider flex-child-grow"></li></div><li class="dropdown-item"><a href="#" class="dropdown-link dropdown-link-has-icon text-danger"><i class="fas fa-gavel text-danger dropdown-icon"></i> View in Panel </a></li></ul></div></div><div class="' + ssrRenderClass([_0x3b5d2f(553), _0x3b5d2f(542), "card-body", _0x3b5d2f(_0x3c595c._0x5d2a9d), _0x472c3b[_0x3b5d2f(_0x3c595c._0x469ef4)]]) + '"><img' + ssrRenderAttr("src", _0x7fe5ae[_0x3b5d2f(550)][_0x3b5d2f(_0x3c595c._0x4958df)]) + _0x3b5d2f(571) + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(_0x3c595c._0x52705d)][_0x3b5d2f(517)]) + _0x3b5d2f(_0x3c595c._0x20e826) + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(_0x3c595c._0x20134b)][_0x3b5d2f(_0x3c595c._0x53a41a)]) + _0x3b5d2f(_0x3c595c._0x1f5144)), _0x7fe5ae["user"][_0x3b5d2f(503)] ? _0x2c07b9(_0x3b5d2f(501)) : _0x2c07b9("<!---->"), _0x2c07b9(_0x3b5d2f(526) + ssrRenderClass([{ "btn-info": _0x472c3b["followed"], "btn-danger": !_0x472c3b[_0x3b5d2f(_0x3c595c._0x5815b1)] }, "btn btn-info btn-sm text-truncate w-100"]) + '">' + ssrInterpolate(_0x472c3b[_0x3b5d2f(_0x3c595c._0x2b0092)] ? _0x3b5d2f(_0x3c595c._0xa4ec09) : _0x3b5d2f(_0x3c595c._0x99505f)) + _0x3b5d2f(547) + ssrRenderStyle({ "line-height": _0x3b5d2f(551) }) + '"><div class="text-xs text-truncate fw-bold text-muted text-uppercase"> Primary Space </div><div class="text-sm text-truncate fw-semibold text-body"> Namesnipe </div></div></a></div><div class="mb-1 text-xl fw-semibold">About Me</div><div class="mb-3 card card-body">' + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(550)][_0x3b5d2f(539)]) + _0x3b5d2f(_0x3c595c._0x20de0d) + ssrRenderStyle({ "width": _0x3b5d2f(504) }) + '"></i> Premium Subscriber </div><div class="text-sm w-100"><i class="text-center fas fa-medal text-muted" style="' + ssrRenderStyle({ "width": _0x3b5d2f(_0x3c595c._0x55a97e) }) + _0x3b5d2f(535) + ssrRenderStyle({ "width": _0x3b5d2f(504) }) + _0x3b5d2f(510) + ssrInterpolate(_0x7fe5ae["user"][_0x3b5d2f(565)]) + '</div><div class="text-sm w-100"><i class="text-center fas fa-clock text-muted" style="' + ssrRenderStyle({ "width": _0x3b5d2f(_0x3c595c._0x38115a) }) + '"></i> Last seen ' + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(550)]["DateHum"]) + _0x3b5d2f(_0x3c595c._0x2d3fe2) + ssrRenderStyle({ "width": "26px" }) + '"></i> 124 Discussion Posts </div></div></div><div class="mb-1 text-xl fw-semibold">Spaces</div><div class="mb-3 card card-body"><div class="gap-3 text-center flex-container flex-dir-column"><i class="text-5xl fas fa-planet-ringed text-muted"></i><div style="' + ssrRenderStyle({ "line-height": _0x3b5d2f(_0x3c595c._0x114313) }) + _0x3b5d2f(562) + ssrInterpolate(_0x7fe5ae["user"][_0x3b5d2f(_0x3c595c._0x42e3c1)]) + _0x3b5d2f(519) + ssrRenderStyle({ "height": "6px" }) + '"></div><div class="mb-1 align-middle flex-container align-justify"><div class="mb-1 text-xl fw-semibold">Achievements</div><a href="#" class="btn btn-secondary btn-sm">View All</a></div><div class="mb-3 card card-body"><div class="gap-3 text-center flex-container flex-dir-column"><i class="text-5xl fas fa-award text-muted"></i><div style="' + ssrRenderStyle({ "line-height": _0x3b5d2f(532) }) + _0x3b5d2f(560) + ssrInterpolate(_0x7fe5ae["user"][_0x3b5d2f(_0x3c595c._0x256454)]) + _0x3b5d2f(_0x3c595c._0x295a4e) + ssrRenderStyle({ "line-height": _0x3b5d2f(532) }) + _0x3b5d2f(573) + ssrInterpolate(_0x7fe5ae[_0x3b5d2f(550)][_0x3b5d2f(546)]) + " has not posted anything to their feed. </div></div></div></div></div></div><!--]-->");
  };
} }), _sfc_setup$1 = _sfc_main$1[_0x1a5a40(559)];
_sfc_main$1[_0x1a5a40(559)] = (_0x4f78af, _0x30fc7a) => {
  const _0x5290eb = { _0x29339d: 524 }, _0xc62760 = _0x1a5a40, _0x21bbfa = useSSRContext();
  return (_0x21bbfa[_0xc62760(_0x5290eb._0x29339d)] || (_0x21bbfa[_0xc62760(524)] = /* @__PURE__ */ new Set()))[_0xc62760(533)](_0xc62760(505)), _sfc_setup$1 ? _sfc_setup$1(_0x4f78af, _0x30fc7a) : void 0;
};
function _0x57e6(_0x50a359, _0x57bb0d) {
  const _0x387c9b = _0x387c();
  return _0x57e6 = function(_0x57e6b1, _0x5cd67f) {
    _0x57e6b1 = _0x57e6b1 - 495;
    let _0x3282c5 = _0x387c9b[_0x57e6b1];
    return _0x3282c5;
  }, _0x57e6(_0x50a359, _0x57bb0d);
}
const __default__ = { "data"() {
  return { "userstat": { "online": ![], "id": this["user"]["id"], "fetchingStatus": ![] } };
}, "created"() {
  this["fetchUserStatus"]();
}, "computed": { "userStatus"() {
  const _0x268a21 = { _0x55d95f: 567, _0x29c236: 527 }, _0x363e0c = _0x1a5a40;
  return this[_0x363e0c(561)][_0x363e0c(_0x268a21._0x55d95f)] ? _0x363e0c(500) : _0x363e0c(_0x268a21._0x29c236);
}, "userStatusClass"() {
  const _0x231f3d = { _0x2830eb: 561, _0xfe53ee: 528 }, _0x572288 = _0x1a5a40;
  return this[_0x572288(_0x231f3d._0x2830eb)][_0x572288(567)] ? _0x572288(567) : _0x572288(_0x231f3d._0xfe53ee);
} }, "methods": { async "fetchUserStatus"() {
  const _0x4972c9 = { _0x444eec: 561, _0x26578b: 561, _0x5b8bca: 567, _0x3a0b8e: 502 }, _0x459cb3 = _0x1a5a40;
  this[_0x459cb3(_0x4972c9._0x444eec)]["fetchingStatus"] = !![];
  const _0x3ec473 = this["userstat"]["online"];
  try {
    const _0x1287ed = await _0x50a935[_0x459cb3(515)](route(_0x459cb3(521), { "id": this[_0x459cb3(_0x4972c9._0x26578b)]["id"] }));
    this[_0x459cb3(561)][_0x459cb3(_0x4972c9._0x5b8bca)] = _0x1287ed["data"]["online"];
  } catch (_0x32da7c) {
    console[_0x459cb3(568)](_0x32da7c), this["userstat"][_0x459cb3(_0x4972c9._0x5b8bca)] = _0x3ec473;
  } finally {
    this[_0x459cb3(561)][_0x459cb3(_0x4972c9._0x3a0b8e)] = ![];
  }
}, "showModal"(_0x44f3ad) {
  const _0x5c0e13 = { _0x329bde: 531, _0x322154: 583 }, _0x513101 = _0x1a5a40, _0x1862ec = document[_0x513101(_0x5c0e13._0x329bde)](_0x44f3ad);
  _0x1862ec && _0x1862ec["classList"]["toggle"](_0x513101(_0x5c0e13._0x322154));
} } }, _sfc_main = defineComponent({ ...__default__, "__name": "Profile", "__ssrInlineRender": !![], "props": { "user": { "type": Object, "required": !![] } }, "setup"(_0x303a47) {
  const _0x1e54c4 = { _0x371810: 546, _0x381bcc: 550, _0x4d55bf: 506, _0x131e9d: 550, _0x33996: 546 }, _0x5b774b = { _0x191b95: 550 };
  return ref(![]), ref(![]), (_0x2b4546, _0x5af900, _0x1e2395, _0x5db93d) => {
    const _0x4d6928 = _0x57e6;
    _0x5af900(_0x4d6928(497)), _0x5af900(ssrRenderComponent(_0x2b6e9b, { "pageTitle": _0x303a47["user"][_0x4d6928(_0x1e54c4._0x371810)], "description": _0x303a47[_0x4d6928(_0x1e54c4._0x381bcc)][_0x4d6928(513)], "cover": _0x303a47[_0x4d6928(550)][_0x4d6928(_0x1e54c4._0x4d55bf)], "url": unref(route)("user.profile", { "username": _0x303a47[_0x4d6928(_0x1e54c4._0x131e9d)][_0x4d6928(_0x1e54c4._0x33996)] }) }, null, _0x1e2395)), _0x5af900(ssrRenderComponent(_0x4ef3a3, null, null, _0x1e2395)), _0x5af900(ssrRenderComponent(_0x392820, null, { "default": withCtx((_0x424b1f, _0x32db97, _0x54df90, _0x276ce2) => {
      const _0x4fa4d6 = _0x4d6928;
      if (_0x32db97)
        _0x32db97(ssrRenderComponent(_sfc_main$1, { "user": _0x303a47[_0x4fa4d6(_0x5b774b._0x191b95)] }, null, _0x54df90, _0x276ce2));
      else
        return [createVNode(_sfc_main$1, { "user": _0x303a47[_0x4fa4d6(550)] }, null, 8, [_0x4fa4d6(550)])];
    }), "_": 1 }, _0x1e2395)), _0x5af900(ssrRenderComponent(_0x29bc7e, null, null, _0x1e2395)), _0x5af900(_0x4d6928(544));
  };
} }), Profile_vue_vue_type_style_index_0_scoped_278d5a8d_lang = "", _sfc_setup = _sfc_main[_0x1a5a40(559)];
_sfc_main[_0x1a5a40(559)] = (_0x48a18d, _0x177726) => {
  const _0x5b34ed = { _0x161350: 524, _0x397880: 555 }, _0x3013ab = _0x1a5a40, _0x5d8449 = useSSRContext();
  return (_0x5d8449[_0x3013ab(_0x5b34ed._0x161350)] || (_0x5d8449["modules"] = /* @__PURE__ */ new Set()))[_0x3013ab(533)](_0x3013ab(_0x5b34ed._0x397880)), _sfc_setup ? _sfc_setup(_0x48a18d, _0x177726) : void 0;
};
const Profile = _0x1a1cde(_sfc_main, [[_0x1a5a40(552), _0x1a5a40(538)]]);
function _0x387c() {
  const _0x43545d = ["__scopeId", "mb-3", "userStatusClass", "resources/js/Pages/Users/Profile.vue", '&#39;s Following </div><button class="btn-circle" data-toggle-modal="#following-modal" style="', "1282yTjPEn", "followed", "setup", '"><div class="text-xs fw-bold text-muted text-uppercase"> No Achievements </div><div class="text-xs text-muted fw-semibold">', "userstat", '"><div class="text-xs fw-bold text-muted text-uppercase"> No Spaces </div><div class="text-xs text-muted fw-semibold">', "</span> Followers </button></div>", "9wsBOqA", "joindate", "card-status", "online", "error", '&#39;s Followers </div><button class="btn-circle" data-toggle-modal="#followers-modal" style="', "route(`user.profile`, { username: followerUser.username })", '><div class="mt-3 text-center"><div class="gap-3 text-sm flex-container align-center"><button class="min-w-0 px-0 text-center fw-semibold text-muted text-truncate"><span class="text-body">', "follow", '"><div class="text-xs fw-bold text-muted text-uppercase"> No Posts </div><div class="text-xs text-muted fw-semibold">', "168PxFnNj", "57276XCAZJn", ' has not made any achievements. </div></div></div></div><div class="mb-3 card card-body"><div class="section"><ul class="tabs"><li class="tab-item"><a href="#" class="tab-link active squish">Posts</a></li><li class="tab-item"><a href="#" class="tab-link squish">Inventory</a></li></ul></div><div class="section"><div class="gap-3 text-center flex-container flex-dir-column"><i class="text-5xl fas fa-face-sleeping text-muted"></i><div style="', '</div><div class="text-sm fw-semibold text-muted"> @', "followers", "classList", '"><i class="fas fa-times"></i></button></div></div><div class="section-borderless"><div class="section"><!--[-->', "</div></div></div>", "2277kAgVPh", "active", "-14px", '</span> Following </button><button class="min-w-0 px-0 text-center fw-semibold text-muted text-truncate"><span class="text-body">', '<div class="gap-2 align-middle flex-container align-justify"><div class="gap-2 align-middle flex-container"><img src="/assets/img/dummy_headshot.png" class="headshot" width="50"><div class="w-100"><div class="fw-semibold">', "<!--[-->", "395KRnfoj", "-10px", "Online", '<div class="text-sm text-info fw-semibold"> Follows you </div>', "fetchingStatus", "followsYou", "26px", "resources/js/Components/PageProps/Profile.vue", "avatar", "following_count", "143718XjYNTC", "Profile", '"></i> Joined on ', "Follow", '"><div class="mb-1 fw-semibold">', "description", " View Profile ", "get", "display_name", "followers_count", '</div><div class="text-sm w-100"><i class="text-center fas fa-messages text-muted" style="', ' has not joined any spaces. </div></div></div></div></div><div class="cell medium-8"><div class="mb-3 text-center alert alert-success fw-semibold"> You are now following this user! </div><div style="', "status", "api.user.online", "</div>", "1837xNfISC", "modules", "50108GSNYai", '</div><div class="min-w-0 gap-2 mt-3 flex-container"><button class="', "Offline", "offline", "following", "Unfollow", "getElementById", "16px", "add", "807132HubauP", '"></i> Rank Lvl. 2 </div><div class="text-sm w-100"><i class="text-center fas fa-users-medical text-muted" style="', "2513520mJNQxS", '</div><div class="mb-1 text-xl fw-semibold">Statistics</div><div class="mb-3 card card-body"><div class="gap-1 align-middle flex-container flex-dir-column"><div class="text-sm text-membership fw-semibold w-100"><i class="text-center fas fa-rocket-launch text-membership" style="', "data-v-278d5a8d", "about_me", '</div><div class="mb-2 align-middle flex-container align-justify"><div class="gap-3 align-middle flex-container"><div class="text-xl" style="', "data", "card", '</div></div></div><div class="dropdown position-relative" style="', "<!--]-->", "user.profile", "username", '</button><button class="btn btn-success btn-sm text-truncate w-100"> Chat </button></div><a class="gap-2 p-2 mt-3 align-middle card card-inner flex-container"><img src="/assets/img/space_placeholder.png" class="headshot" width="40"><div class="min-w-0" style="', "6398984YwpooF", '<!--]--></div></div></div></div><div class="modal" id="followers-modal"><div class="modal-card modal-card-body"><div class="section-borderless"><div class="gap-2 align-middle flex-container align-justify"><div class="text-lg fw-semibold">', "user", "14px"];
  _0x387c = function() {
    return _0x43545d;
  };
  return _0x387c();
}
export {
  Profile as default
};
