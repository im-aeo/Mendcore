const _0x54180d = _0x13ea;
(function(_0xf6f548, _0x3b3c2a) {
  const _0x174b85 = { _0x22bab8: 255, _0x3f2d1b: 272, _0x7867ee: 270, _0x422509: 267, _0x48676f: 265 }, _0x283237 = _0x13ea, _0x546cb9 = _0xf6f548();
  while (!![]) {
    try {
      const _0x102f79 = -parseInt(_0x283237(268)) / 1 * (parseInt(_0x283237(_0x174b85._0x22bab8)) / 2) + -parseInt(_0x283237(_0x174b85._0x3f2d1b)) / 3 + -parseInt(_0x283237(271)) / 4 + -parseInt(_0x283237(253)) / 5 + parseInt(_0x283237(_0x174b85._0x7867ee)) / 6 * (-parseInt(_0x283237(264)) / 7) + parseInt(_0x283237(260)) / 8 * (parseInt(_0x283237(_0x174b85._0x422509)) / 9) + parseInt(_0x283237(_0x174b85._0x48676f)) / 10;
      if (_0x102f79 === _0x3b3c2a)
        break;
      else
        _0x546cb9["push"](_0x546cb9["shift"]());
    } catch (_0x97a62f) {
      _0x546cb9["push"](_0x546cb9["shift"]());
    }
  }
})(_0x32db, 493138);
import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
function _0x13ea(_0x9f1f21, _0x1adbce) {
  const _0x32db64 = _0x32db();
  return _0x13ea = function(_0x13eae3, _0x1fd836) {
    _0x13eae3 = _0x13eae3 - 253;
    let _0x152bbe = _0x32db64[_0x13eae3];
    return _0x152bbe;
  }, _0x13ea(_0x9f1f21, _0x1adbce);
}
import { useForm } from "@inertiajs/vue3";
const _sfc_main = defineComponent({ "__name": _0x54180d(266), "__ssrInlineRender": !![], "setup"(_0x46e4fe) {
  const _0x3feb83 = { _0x3ad8f6: 274, _0x589c97: 256, _0x4fd56d: 259, _0x5ed614: 257, _0x4329a0: 276, _0xc0a43f: 273, _0x5cd202: 277 };
  ref(null), ref(null);
  const _0x381dd3 = useForm({ "current_password": "", "password": "", "password_confirmation": "" });
  return (_0x2e4891, _0x2dfb6f, _0x397404, _0x53fa3d) => {
    const _0x57155c = _0x13ea;
    _0x2dfb6f(_0x57155c(_0x3feb83._0x3ad8f6) + ssrRenderAttrs(_0x53fa3d) + _0x57155c(275) + ssrRenderAttr(_0x57155c(262), unref(_0x381dd3)[_0x57155c(261)]) + _0x57155c(_0x3feb83._0x589c97) + ssrRenderAttr(_0x57155c(273), unref(_0x381dd3)[_0x57155c(_0x3feb83._0x4fd56d)][_0x57155c(261)]) + _0x57155c(263) + ssrRenderAttr(_0x57155c(262), unref(_0x381dd3)[_0x57155c(257)]) + ' type="password" class="block w-full mt-1" autocomplete="new-password"><input' + ssrRenderAttr(_0x57155c(273), unref(_0x381dd3)[_0x57155c(259)][_0x57155c(_0x3feb83._0x5ed614)]) + ' class="mt-2"></div><div><label for="password_confirmation" value="Confirm Password"></label><input id="password_confirmation"' + ssrRenderAttr(_0x57155c(262), unref(_0x381dd3)[_0x57155c(_0x3feb83._0x4329a0)]) + ' type="password" class="block w-full mt-1" autocomplete="new-password"><div' + ssrRenderAttr(_0x57155c(_0x3feb83._0xc0a43f), unref(_0x381dd3)["errors"]["password_confirmation"]) + _0x57155c(_0x3feb83._0x5cd202) + (ssrIncludeBooleanAttr(unref(_0x381dd3)["processing"]) ? " disabled" : "") + _0x57155c(254));
  };
} }), _sfc_setup = _sfc_main[_0x54180d(269)];
_sfc_main[_0x54180d(269)] = (_0x444f95, _0x450b34) => {
  const _0x4928bf = { _0x42997d: 278 }, _0x3e2ec2 = _0x54180d, _0x3aa038 = useSSRContext();
  return (_0x3aa038["modules"] || (_0x3aa038[_0x3e2ec2(_0x4928bf._0x42997d)] = /* @__PURE__ */ new Set()))[_0x3e2ec2(258)]("resources/js/Pages/Settings/Partials/UpdatePasswordForm.vue"), _sfc_setup ? _sfc_setup(_0x444f95, _0x450b34) : void 0;
};
function _0x32db() {
  const _0x44dd0c = ["add", "errors", "56QYfzzL", "current_password", "value", ' class="mt-2"></div></div><div><label for="password" value="New Password"></label><input id="password"', "924YgYcsB", "8598410sXgBRY", "UpdatePasswordForm", "1004463PRePhG", "1PXuwJc", "setup", "4620BFyzPo", "474448XaxEct", "425454vlpcDe", "message", "<section", '><form class="mt-6 space-y-6"><div><label for="current_password" value="Current Password"></label><input id="current_password"', "password_confirmation", ' class="mt-2"></div></div><div class="flex items-center gap-4"><button', "modules", "3098130KlUpDY", ">Save</button></div></form></section>", "332512WYOnJw", ' type="password" class="block w-full mt-1" autocomplete="current-password"><div', "password"];
  _0x32db = function() {
    return _0x44dd0c;
  };
  return _0x32db();
}
export {
  _sfc_main as default
};
