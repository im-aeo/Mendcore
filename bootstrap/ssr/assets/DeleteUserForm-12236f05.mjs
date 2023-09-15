const _0x10e6c7 = _0x4a34;
(function(_0x3518d6, _0x1334d6) {
  const _0x8cb3ae = { _0x2a40dc: 381, _0x1ee61d: 398, _0x27ed4a: 389, _0xf4026: 386 }, _0x3dee25 = _0x4a34, _0x222660 = _0x3518d6();
  while (!![]) {
    try {
      const _0x1bcacd = parseInt(_0x3dee25(394)) / 1 + parseInt(_0x3dee25(_0x8cb3ae._0x2a40dc)) / 2 + -parseInt(_0x3dee25(_0x8cb3ae._0x1ee61d)) / 3 * (-parseInt(_0x3dee25(400)) / 4) + -parseInt(_0x3dee25(_0x8cb3ae._0x27ed4a)) / 5 + -parseInt(_0x3dee25(387)) / 6 * (parseInt(_0x3dee25(382)) / 7) + -parseInt(_0x3dee25(_0x8cb3ae._0xf4026)) / 8 + parseInt(_0x3dee25(391)) / 9;
      if (_0x1bcacd === _0x1334d6)
        break;
      else
        _0x222660["push"](_0x222660["shift"]());
    } catch (_0x7fa255) {
      _0x222660["push"](_0x222660["shift"]());
    }
  }
})(_0x3bca, 807714);
import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
function _0x4a34(_0xed209b, _0x2d972e) {
  const _0x3bca3d = _0x3bca();
  return _0x4a34 = function(_0x4a345f, _0x2c59c2) {
    _0x4a345f = _0x4a345f - 380;
    let _0x8793ee = _0x3bca3d[_0x4a345f];
    return _0x8793ee;
  }, _0x4a34(_0xed209b, _0x2d972e);
}
import { useForm } from "@inertiajs/vue3";
import "momentum-trail";
const _sfc_main = defineComponent({ "__name": "DeleteUserForm", "__ssrInlineRender": !![], "setup"(_0x4f5cf3) {
  const _0x203527 = { _0xf1ea0f: 385, _0x542e3d: 388, _0x1d5ed0: 402, _0x158ed3: 392 }, _0x5d3bcc = ref(![]);
  ref(null);
  const _0x5600ec = useForm({ "password": "" });
  return (_0x56b443, _0x2c0951, _0x1ceece, _0x382d61) => {
    const _0x38f8c8 = _0x4a34;
    _0x2c0951(_0x38f8c8(395) + ssrRenderClass([{ "active": _0x5d3bcc[_0x38f8c8(384)] }, _0x38f8c8(_0x203527._0xf1ea0f)]) + '" id="DeleteAcceountModal"><form><div class="modal-card modal-card-body modal-card-sm"><div class="section-borderless"><div class="gap-2 align-middle flex-container align-justify"><div class="text-lg fw-semibold">Delete Account</div><button class="btn-circle" style="' + ssrRenderStyle({ "margin-right": _0x38f8c8(401) }) + '"><i class="fas fa-times"></i></button></div></div><div class="section-borderless"><div class="mb-2"><p class="fw-semibold text-muted text-md">Are you sure you want to delete your account?</p><div class="text-xs fw-bold text-muted text-uppercase"> Password </div><div class="field"><div class="control"><input id="password"' + ssrRenderAttr(_0x38f8c8(384), unref(_0x5600ec)[_0x38f8c8(402)]) + _0x38f8c8(_0x203527._0x542e3d) + ssrRenderAttr(_0x38f8c8(393), unref(_0x5600ec)[_0x38f8c8(380)][_0x38f8c8(_0x203527._0x1d5ed0)]) + _0x38f8c8(397) + (ssrIncludeBooleanAttr(unref(_0x5600ec)[_0x38f8c8(390)]) ? " disabled" : "") + _0x38f8c8(_0x203527._0x158ed3));
  };
} }), _sfc_setup = _sfc_main[_0x10e6c7(383)];
_sfc_main[_0x10e6c7(383)] = (_0x4e18b1, _0x7d2f84) => {
  const _0x47af2a = { _0x545d19: 399, _0x385838: 399 }, _0x8be9a8 = _0x10e6c7, _0x2c98b1 = useSSRContext();
  return (_0x2c98b1[_0x8be9a8(_0x47af2a._0x545d19)] || (_0x2c98b1[_0x8be9a8(_0x47af2a._0x385838)] = /* @__PURE__ */ new Set()))["add"](_0x8be9a8(396)), _sfc_setup ? _sfc_setup(_0x4e18b1, _0x7d2f84) : void 0;
};
function _0x3bca() {
  const _0x57b3c7 = ["23317398zrGgLo", "> Close Account </button></div></div></div></div></form></div><!--]-->", "message", "905682pDMxtt", '<!--[--><button class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></button><div class="', "resources/js/Pages/Settings/Partials/DeleteUserForm.vue", ' class="mt-2"></div><div class="text-xs text-muted fw-semibold"> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </div><div class="min-w-0 gap-2 mt-3 flex-container"><button class="btn btn-info btn-sm text-truncate w-100">Cancel</button><button class="btn btn-danger btn-sm text-truncate w-100"', "69357RlTkzb", "modules", "96JNTEZg", "-10px", "password", "errors", "542910umQxuA", "1907948hjsTLC", "setup", "value", "modal", "10653488ArbPlj", "18sdVUFi", ' type="password" class="form" placeholder="Password"></div></div><div', "6828615SdFhHb", "processing"];
  _0x3bca = function() {
    return _0x57b3c7;
  };
  return _0x3bca();
}
export {
  _sfc_main as default
};
