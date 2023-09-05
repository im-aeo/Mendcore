function _0x2b28() {
  const _0x3824b3 = ["Login", "<!--]-->", "<!--[-->", "1136760jVbJrA", "href", ' value="Log In"><a href="#" class="text-sm fw-semibold squish">Forgot Password?</a></div></form><div class="mx-1 my-3 divider"></div><a as="button"', "resources/js/Pages/Authentication/Login.vue", "password", "text-xs fw-bold text-muted text-uppercase", "value", ' class="my-2 mt-2 btn btn-secondary btn-block"><i class="fab fa-google me-1"></i> Log In with Google </a><button class="mt-2 btn btn-discord btn-block"><i class="fab fa-discord me-1"></i> Log In with Discord </button></div></div></main>', "<main", "resources/js/Components/PageProps/Login.vue", '</div><div class="align-middle flex-container align-justify"><input type="submit" class="', "errors", '"> Username </div><input type="text"', "username", " disabled", "2lzBcaW", "Login to Vestora.", "btn btn-success", "container grid-x w-50 align-center", "8394MGjbqm", "modules", "setup", ' class="mb-2 form" placeholder="Password...">', "2765HwpGnm", "auth.login.google", '</div><div class="mb-2"><div class="', "1790579EzSDKB", "4251672dNMbCN", "757242QBTnYe", ' class="form" placeholder="Username...">', "<!---->", '"> Password </div><input type="password"', "6881067OXULrh", "2294844ZHpNTg", "add"];
  _0x2b28 = function() {
    return _0x3824b3;
  };
  return _0x2b28();
}
const _0x38611c = _0x4b93;
(function(_0x14cbc0, _0x8d8850) {
  const _0x10a1be = { _0x38c46a: 129, _0x142fba: 136, _0x1cf933: 142 }, _0x1af586 = _0x4b93, _0x271899 = _0x14cbc0();
  while (!![]) {
    try {
      const _0x2d2192 = -parseInt(_0x1af586(138)) / 1 + parseInt(_0x1af586(125)) / 2 * (parseInt(_0x1af586(143)) / 3) + parseInt(_0x1af586(148)) / 4 + -parseInt(_0x1af586(133)) / 5 * (-parseInt(_0x1af586(_0x10a1be._0x38c46a)) / 6) + -parseInt(_0x1af586(_0x10a1be._0x142fba)) / 7 + parseInt(_0x1af586(137)) / 8 + -parseInt(_0x1af586(_0x10a1be._0x1cf933)) / 9;
      if (_0x2d2192 === _0x8d8850)
        break;
      else
        _0x271899["push"](_0x271899["shift"]());
    } catch (_0x1fabc1) {
      _0x271899["push"](_0x271899["shift"]());
    }
  }
})(_0x2b28, 576642);
import { defineComponent, ref, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _0x44867a } from "./Navbar-cfe40770.mjs";
import { route } from "momentum-trail";
import { _ as _0x2213bd } from "./AppHead-5e63564a.mjs";
import { useForm } from "@inertiajs/vue3";
import { F as _0x7e196a } from "./FlashMessages-6f05b06f.mjs";
import "axios";
import "dayjs";
function _0x4b93(_0xae96f, _0x307035) {
  const _0x2b28f4 = _0x2b28();
  return _0x4b93 = function(_0x4b93fe, _0x3cb9a9) {
    _0x4b93fe = _0x4b93fe - 124;
    let _0xb2d352 = _0x2b28f4[_0x4b93fe];
    return _0xb2d352;
  }, _0x4b93(_0xae96f, _0x307035);
}
import "./_plugin-vue_export-helper-7d6fdb2f.mjs";
const _sfc_main$1 = defineComponent({ "__name": _0x38611c(145), "__ssrInlineRender": !![], "props": { "canResetPassword": Boolean, "status": String }, "setup"(_0x21cb99) {
  const _0x2cefbc = { _0x3df368: 156, _0x5f4f7e: 128, _0x2fd5ec: 160, _0x1e7658: 154, _0x242bd2: 139, _0x261ea5: 159, _0x57bd24: 140, _0x363a84: 135, _0x2ee1df: 141, _0x51986d: 132, _0x206d53: 158, _0x5a90f4: 124, _0x391c4b: 150 }, _0x20030f = ref(![]), _0x4b75b1 = useForm({ "username": "", "password": "", "remember": ![] });
  return (_0xc0b320, _0x5b3d58, _0x42f4b1, _0x3b8a1f) => {
    const _0x39c48f = _0x4b93;
    _0x5b3d58(_0x39c48f(_0x2cefbc._0x3df368) + ssrRenderAttrs(mergeProps({ "class": _0x39c48f(_0x2cefbc._0x5f4f7e) }, _0x3b8a1f)) + ">"), _0x5b3d58(ssrRenderComponent(_0x7e196a, null, null, _0x42f4b1)), _0x5b3d58('<div class="cell medium-4"><div class="mb-2"><div class="text-2xl fw-semibold">Log In</div><div class="text-sm text-muted fw-semibold"> Don&#39;t have an account? <a href="#" class="d-inline-block squish">Sign Up</a></div></div><div></div><div class="card card-body"><form><div class="mb-2"><div class="' + ssrRenderClass([{ "text-danger": unref(_0x4b75b1)[_0x39c48f(159)]["username"] }, "text-xs fw-bold text-muted text-uppercase"]) + _0x39c48f(_0x2cefbc._0x2fd5ec) + ssrRenderAttr(_0x39c48f(_0x2cefbc._0x1e7658), unref(_0x4b75b1)["username"]) + _0x39c48f(_0x2cefbc._0x242bd2)), unref(_0x4b75b1)[_0x39c48f(_0x2cefbc._0x261ea5)][_0x39c48f(161)] ? _0x5b3d58('<div class="text-xs text-danger fw-semibold">' + ssrInterpolate(unref(_0x4b75b1)[_0x39c48f(_0x2cefbc._0x261ea5)][_0x39c48f(161)]) + "</div>") : _0x5b3d58(_0x39c48f(_0x2cefbc._0x57bd24)), _0x5b3d58(_0x39c48f(_0x2cefbc._0x363a84) + ssrRenderClass([{ "text-danger": unref(_0x4b75b1)["errors"][_0x39c48f(152)] }, _0x39c48f(153)]) + _0x39c48f(_0x2cefbc._0x2ee1df) + ssrRenderAttr("value", unref(_0x4b75b1)[_0x39c48f(152)]) + _0x39c48f(_0x2cefbc._0x51986d)), unref(_0x4b75b1)["errors"][_0x39c48f(152)] ? _0x5b3d58('<div class="text-xs text-danger fw-semibold">' + ssrInterpolate(unref(_0x4b75b1)["errors"]["password"]) + "</div>") : _0x5b3d58("<!---->"), _0x5b3d58(_0x39c48f(_0x2cefbc._0x206d53) + ssrRenderClass([{ "is-loading": _0x20030f["value"] }, _0x39c48f(127)]) + '"' + (ssrIncludeBooleanAttr(unref(_0x4b75b1)["processing"]) ? _0x39c48f(_0x2cefbc._0x5a90f4) : "") + _0x39c48f(_0x2cefbc._0x391c4b) + ssrRenderAttr(_0x39c48f(149), unref(route)(_0x39c48f(134))) + _0x39c48f(155));
  };
} }), _sfc_setup$1 = _sfc_main$1[_0x38611c(131)];
_sfc_main$1["setup"] = (_0x4f63a5, _0x3074cc) => {
  const _0x1351f6 = { _0x198739: 157 }, _0x23c0b5 = _0x38611c, _0x63c9c7 = useSSRContext();
  return (_0x63c9c7[_0x23c0b5(130)] || (_0x63c9c7["modules"] = /* @__PURE__ */ new Set()))[_0x23c0b5(144)](_0x23c0b5(_0x1351f6._0x198739)), _sfc_setup$1 ? _sfc_setup$1(_0x4f63a5, _0x3074cc) : void 0;
};
const _sfc_main = defineComponent({ "__name": "Login", "__ssrInlineRender": !![], "setup"(_0x36b4ba) {
  const _0x240971 = { _0x14def4: 145, _0x383798: 126, _0x43829e: 146 };
  return (_0x5b25fb, _0x3c1a35, _0x341a32, _0x43af73) => {
    const _0x576740 = _0x4b93;
    _0x3c1a35(_0x576740(147)), _0x3c1a35(ssrRenderComponent(_0x2213bd, { "pageTitle": _0x576740(_0x240971._0x14def4), "description": _0x576740(_0x240971._0x383798), "url": unref(route)("auth.login.page") }, null, _0x341a32)), _0x3c1a35(ssrRenderComponent(_0x44867a, null, { "default": withCtx((_0x3e1c47, _0x21b275, _0x544667, _0x28e3eb) => {
      if (_0x21b275)
        _0x21b275(ssrRenderComponent(_sfc_main$1, null, null, _0x544667, _0x28e3eb));
      else
        return [createVNode(_sfc_main$1)];
    }), "_": 1 }, _0x341a32)), _0x3c1a35(_0x576740(_0x240971._0x43829e));
  };
} }), _sfc_setup = _sfc_main[_0x38611c(131)];
_sfc_main[_0x38611c(131)] = (_0x2575d5, _0x355e89) => {
  const _0x2d673f = { _0x10fecc: 144, _0x4f878f: 151 }, _0x5e2474 = _0x38611c, _0x531c66 = useSSRContext();
  return (_0x531c66[_0x5e2474(130)] || (_0x531c66[_0x5e2474(130)] = /* @__PURE__ */ new Set()))[_0x5e2474(_0x2d673f._0x10fecc)](_0x5e2474(_0x2d673f._0x4f878f)), _sfc_setup ? _sfc_setup(_0x2575d5, _0x355e89) : void 0;
};
export {
  _sfc_main as default
};
