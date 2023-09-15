const _0x111dd6 = _0x11bd;
(function(_0x38fb66, _0x27c42b) {
  const _0x5bcac0 = { _0x4babfb: 508, _0x53d590: 488, _0x250800: 499, _0x302146: 494, _0x47c3ae: 506, _0x3bf469: 492, _0x51db1e: 496 }, _0x452bd8 = _0x11bd, _0x3e1593 = _0x38fb66();
  while (!![]) {
    try {
      const _0x16f986 = -parseInt(_0x452bd8(_0x5bcac0._0x4babfb)) / 1 + -parseInt(_0x452bd8(_0x5bcac0._0x53d590)) / 2 + -parseInt(_0x452bd8(_0x5bcac0._0x250800)) / 3 * (-parseInt(_0x452bd8(_0x5bcac0._0x302146)) / 4) + parseInt(_0x452bd8(_0x5bcac0._0x47c3ae)) / 5 * (-parseInt(_0x452bd8(_0x5bcac0._0x3bf469)) / 6) + parseInt(_0x452bd8(500)) / 7 * (parseInt(_0x452bd8(491)) / 8) + -parseInt(_0x452bd8(_0x5bcac0._0x51db1e)) / 9 + parseInt(_0x452bd8(498)) / 10;
      if (_0x16f986 === _0x27c42b)
        break;
      else
        _0x3e1593["push"](_0x3e1593["shift"]());
    } catch (_0x5b159a) {
      _0x3e1593["push"](_0x3e1593["shift"]());
    }
  }
})(_0x284a, 766898);
import { defineComponent, ref, unref, useSSRContext, withCtx, createVNode } from "vue";
function _0x11bd(_0x12664c, _0x5a87bc) {
  const _0x284a49 = _0x284a();
  return _0x11bd = function(_0x11bd00, _0x430a32) {
    _0x11bd00 = _0x11bd00 - 483;
    let _0x576748 = _0x284a49[_0x11bd00];
    return _0x576748;
  }, _0x11bd(_0x12664c, _0x5a87bc);
}
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _0x441565 } from "./Navbar-354467b7.mjs";
import { route } from "momentum-trail";
import { _ as _0x3541cb } from "./AppHead-dd2f4462.mjs";
function _0x284a() {
  const _0x3647a0 = ["Login", "value", "setup", "Login to Vestora.", '<div class="text-xs text-danger fw-semibold">', "text-xs fw-bold text-muted text-uppercase", "1734202fmToBS", "<!--[-->", '"> Password </div><input type="password"', "1072oxByHa", "109110tWeack", ' class="mb-2 form" placeholder="Password...">', "1143748fwQQQC", '"> Username </div><input type="text"', "7816338SqKfLK", "add", "7808040naMFci", "12AEsvvL", "76181faYoIh", "errors", '</div><div class="mb-2"><div class="', '<div class="cell medium-4"><div class="mb-2"><div class="text-2xl fw-semibold">Log In</div><div class="text-sm text-muted fw-semibold"> Don&#39;t have an account? <a href="#" class="d-inline-block squish">Sign Up</a></div></div><div></div><div class="card card-body"><form><div class="mb-2"><div class="', "btn btn-success", ' class="form" placeholder="Username...">', "75YIHLFM", "password", "607618SUmElV", "modules", "resources/js/Components/PageProps/Login.vue", "username", "resources/js/Pages/Authentication/Login.vue", '</div><div class="align-middle flex-container align-justify"><input type="submit" class="', "auth.login.google", "<!---->"];
  _0x284a = function() {
    return _0x3647a0;
  };
  return _0x284a();
}
import { useForm } from "@inertiajs/vue3";
import { _ as _0x4a5871 } from "./FlashMessages-ac395c0e.mjs";
import { _ as _0xdc4a2e } from "./Sidebar-70f4a6f7.mjs";
import "axios";
import "dayjs";
const _sfc_main$1 = defineComponent({ "__name": "Login", "__ssrInlineRender": !![], "props": { "canResetPassword": Boolean, "status": String }, "setup"(_0x308555) {
  const _0x1557dc = { _0x3315b2: 489, _0x3b0aa4: 511, _0x250210: 483, _0x6ae6dd: 505, _0x26bee8: 501, _0x4783de: 515, _0x450952: 502, _0x4cfc42: 507, _0xfe330d: 490, _0x29f283: 483, _0x2bb589: 513, _0x46d86b: 514 }, _0x20f661 = ref(![]), _0xc64486 = useForm({ "username": "", "password": "", "remember": ![] });
  return (_0x3b1646, _0x2fc55b, _0x3fbf94, _0x481ba2) => {
    const _0x5d6681 = _0x11bd;
    _0x2fc55b(_0x5d6681(_0x1557dc._0x3315b2)), _0x2fc55b(ssrRenderComponent(_0x4a5871, null, null, _0x3fbf94)), _0x2fc55b(_0x5d6681(503) + ssrRenderClass([{ "text-danger": unref(_0xc64486)[_0x5d6681(501)][_0x5d6681(_0x1557dc._0x3b0aa4)] }, _0x5d6681(487)]) + _0x5d6681(495) + ssrRenderAttr(_0x5d6681(_0x1557dc._0x250210), unref(_0xc64486)[_0x5d6681(511)]) + _0x5d6681(_0x1557dc._0x6ae6dd)), unref(_0xc64486)[_0x5d6681(_0x1557dc._0x26bee8)][_0x5d6681(_0x1557dc._0x3b0aa4)] ? _0x2fc55b('<div class="text-xs text-danger fw-semibold">' + ssrInterpolate(unref(_0xc64486)[_0x5d6681(501)][_0x5d6681(_0x1557dc._0x3b0aa4)]) + "</div>") : _0x2fc55b(_0x5d6681(_0x1557dc._0x4783de)), _0x2fc55b(_0x5d6681(_0x1557dc._0x450952) + ssrRenderClass([{ "text-danger": unref(_0xc64486)["errors"][_0x5d6681(_0x1557dc._0x4cfc42)] }, _0x5d6681(487)]) + _0x5d6681(_0x1557dc._0xfe330d) + ssrRenderAttr(_0x5d6681(_0x1557dc._0x29f283), unref(_0xc64486)[_0x5d6681(507)]) + _0x5d6681(493)), unref(_0xc64486)[_0x5d6681(501)][_0x5d6681(507)] ? _0x2fc55b(_0x5d6681(486) + ssrInterpolate(unref(_0xc64486)[_0x5d6681(_0x1557dc._0x26bee8)]["password"]) + "</div>") : _0x2fc55b(_0x5d6681(_0x1557dc._0x4783de)), _0x2fc55b(_0x5d6681(_0x1557dc._0x2bb589) + ssrRenderClass([{ "is-loading": _0x20f661["value"] }, _0x5d6681(504)]) + '"' + (ssrIncludeBooleanAttr(unref(_0xc64486)["processing"]) ? " disabled" : "") + ' value="Log In"><a href="#" class="text-sm fw-semibold squish">Forgot Password?</a></div></form><div class="mx-1 my-3 divider"></div><a as="button"' + ssrRenderAttr("href", unref(route)(_0x5d6681(_0x1557dc._0x46d86b))) + ' class="my-2 mt-2 btn btn-secondary btn-block"><i class="fab fa-google me-1"></i> Log In with Google </a><button class="mt-2 btn btn-discord btn-block"><i class="fab fa-discord me-1"></i> Log In with Discord </button></div></div><!--]-->');
  };
} }), _sfc_setup$1 = _sfc_main$1["setup"];
_sfc_main$1[_0x111dd6(484)] = (_0x4b880d, _0x519746) => {
  const _0x17e85a = { _0xdedfc5: 509 }, _0x18761a = _0x111dd6, _0x35a0b4 = useSSRContext();
  return (_0x35a0b4["modules"] || (_0x35a0b4[_0x18761a(_0x17e85a._0xdedfc5)] = /* @__PURE__ */ new Set()))["add"](_0x18761a(510)), _sfc_setup$1 ? _sfc_setup$1(_0x4b880d, _0x519746) : void 0;
};
const _sfc_main = defineComponent({ "__name": _0x111dd6(516), "__ssrInlineRender": !![], "setup"(_0x215cb8) {
  const _0x3ad5c1 = { _0x3961e8: 489, _0x79a565: 485 };
  return (_0x1ae799, _0x310888, _0x2a5c6c, _0x261bb7) => {
    const _0x14ba4f = _0x11bd;
    _0x310888(_0x14ba4f(_0x3ad5c1._0x3961e8)), _0x310888(ssrRenderComponent(_0x3541cb, { "pageTitle": _0x14ba4f(516), "description": _0x14ba4f(_0x3ad5c1._0x79a565), "url": unref(route)("auth.login.page") }, null, _0x2a5c6c)), _0x310888(ssrRenderComponent(_0x441565, null, null, _0x2a5c6c)), _0x310888(ssrRenderComponent(_0xdc4a2e, null, { "default": withCtx((_0x47a68d, _0x41835c, _0x296f7c, _0x36b2d9) => {
      if (_0x41835c)
        _0x41835c(ssrRenderComponent(_sfc_main$1, null, null, _0x296f7c, _0x36b2d9));
      else
        return [createVNode(_sfc_main$1)];
    }), "_": 1 }, _0x2a5c6c)), _0x310888("<!--]-->");
  };
} }), _sfc_setup = _sfc_main[_0x111dd6(484)];
_sfc_main[_0x111dd6(484)] = (_0xa6a7a1, _0x13e44f) => {
  const _0x424d6a = { _0x5e4fbd: 509, _0x157971: 497 }, _0x4413dd = _0x111dd6, _0x479c27 = useSSRContext();
  return (_0x479c27["modules"] || (_0x479c27[_0x4413dd(_0x424d6a._0x5e4fbd)] = /* @__PURE__ */ new Set()))[_0x4413dd(_0x424d6a._0x157971)](_0x4413dd(512)), _sfc_setup ? _sfc_setup(_0xa6a7a1, _0x13e44f) : void 0;
};
export {
  _sfc_main as default
};
