function _0x49fb() {
  const _0xe892f0 = ['<div class="flex items-center gap-4"><button', "></div></div>", "56247SAWgvA", ' required autofocus autocomplete="name"><div class="mt-2"', "2391424ekRBLo", "1530295LzbVSV", "<section", "route", "232148JcNKOS", "6184272AKYCxs", '></div></div><div><label for="email" value="Email"></label><input id="email" type="email" class="block w-full mt-1"', "4293720TIrFDt", "processing", '</p><div style="', "message", "46yrGAbs", "add", "mustVerifyEmail", "<!---->", "verification-link-sent", "verification.send", "modules", " Click here to re-send the verification email. ", "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", "email", "setup", "value", "props", "name", '" class="mt-2 text-sm font-medium text-green-600"> A new verification link has been sent to your email address. </div></div>', "post", "status", "email_verified_at", "1401940BpVqxF", ' required autocomplete="email"><div class="mt-2"'];
  _0x49fb = function() {
    return _0xe892f0;
  };
  return _0x49fb();
}
const _0x25a3a2 = _0x51be;
(function(_0x19f8e6, _0x1d0217) {
  const _0x102189 = { _0x24c713: 263, _0x517710: 270, _0x8a680a: 274, _0x1eafd3: 273, _0x37ee89: 269 }, _0x1f09e5 = _0x51be, _0xf15fe6 = _0x19f8e6();
  while (!![]) {
    try {
      const _0x46abe9 = -parseInt(_0x1f09e5(_0x102189._0x24c713)) / 1 + -parseInt(_0x1f09e5(280)) / 2 * (parseInt(_0x1f09e5(267)) / 3) + parseInt(_0x1f09e5(276)) / 4 + parseInt(_0x1f09e5(_0x102189._0x517710)) / 5 + parseInt(_0x1f09e5(_0x102189._0x8a680a)) / 6 + -parseInt(_0x1f09e5(_0x102189._0x1eafd3)) / 7 + parseInt(_0x1f09e5(_0x102189._0x37ee89)) / 8;
      if (_0x46abe9 === _0x1d0217)
        break;
      else
        _0xf15fe6["push"](_0xf15fe6["shift"]());
    } catch (_0x55afd8) {
      _0xf15fe6["push"](_0xf15fe6["shift"]());
    }
  }
})(_0x49fb, 842798);
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, useForm, Link } from "@inertiajs/vue3";
const _sfc_main = defineComponent({ "__name": "UpdateProfileInformationForm", "__ssrInlineRender": !![], "props": { "mustVerifyEmail": Boolean, "status": String }, "setup"(_0x3160bc) {
  const _0x586abd = { _0x46d5ec: 257, _0x3c461b: 254 }, _0x220b32 = { _0xf5f752: 271, _0x538408: 258, _0x357c99: 275, _0x388a8b: 264, _0x582279: 247, _0x4d90b3: 260, _0x4c7da5: 253, _0x468d06: 249, _0x35dc79: 248, _0x1edd5d: 265 }, _0x35f6fc = { _0x29ca54: 252 }, _0x4ba977 = _0x51be, _0x39419d = _0x3160bc, _0x4da8aa = usePage()[_0x4ba977(_0x586abd._0x46d5ec)]["value"]["auth"]["user"], _0x34e2d7 = useForm({ "name": _0x4da8aa[_0x4ba977(258)], "email": _0x4da8aa[_0x4ba977(_0x586abd._0x3c461b)] });
  return (_0x26c23a, _0x411d2e, _0x365944, _0x30d5f4) => {
    const _0x1a1d16 = _0x4ba977;
    _0x411d2e(_0x1a1d16(_0x220b32._0xf5f752) + ssrRenderAttrs(_0x30d5f4) + '><form class="mt-6 space-y-6"><div><label for="name" value="Name"></label><input id="name" type="text" class="block w-full mt-1"' + ssrRenderAttr("value", unref(_0x34e2d7)[_0x1a1d16(_0x220b32._0x538408)]) + _0x1a1d16(268) + ssrRenderAttr(_0x1a1d16(279), unref(_0x34e2d7)["errors"][_0x1a1d16(_0x220b32._0x538408)]) + _0x1a1d16(_0x220b32._0x357c99) + ssrRenderAttr(_0x1a1d16(256), unref(_0x34e2d7)["email"]) + _0x1a1d16(_0x220b32._0x388a8b) + ssrRenderAttr(_0x1a1d16(279), unref(_0x34e2d7)["errors"][_0x1a1d16(254)]) + _0x1a1d16(266)), _0x39419d[_0x1a1d16(_0x220b32._0x582279)] && unref(_0x4da8aa)[_0x1a1d16(262)] === null ? (_0x411d2e('<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. '), _0x411d2e(ssrRenderComponent(unref(Link), { "href": _0x26c23a[_0x1a1d16(272)](_0x1a1d16(250)), "method": _0x1a1d16(_0x220b32._0x4d90b3), "as": "button", "class": _0x1a1d16(_0x220b32._0x4c7da5) }, { "default": withCtx((_0x991343, _0x2d5ab1, _0x44be26, _0x14d016) => {
      const _0x5f445f = _0x1a1d16;
      if (_0x2d5ab1)
        _0x2d5ab1(" Click here to re-send the verification email. ");
      else
        return [createTextVNode(_0x5f445f(_0x35f6fc._0x29ca54))];
    }), "_": 1 }, _0x365944)), _0x411d2e(_0x1a1d16(278) + ssrRenderStyle(_0x39419d[_0x1a1d16(261)] === _0x1a1d16(_0x220b32._0x468d06) ? null : { "display": "none" }) + _0x1a1d16(259))) : _0x411d2e(_0x1a1d16(_0x220b32._0x35dc79)), _0x411d2e(_0x1a1d16(_0x220b32._0x1edd5d) + (ssrIncludeBooleanAttr(unref(_0x34e2d7)[_0x1a1d16(277)]) ? " disabled" : "") + ">Save</button></div></form></section>");
  };
} }), _sfc_setup = _sfc_main[_0x25a3a2(255)];
function _0x51be(_0x395a9b, _0xc56add) {
  const _0x49fbe2 = _0x49fb();
  return _0x51be = function(_0x51beb9, _0x4fa58d) {
    _0x51beb9 = _0x51beb9 - 247;
    let _0x554e29 = _0x49fbe2[_0x51beb9];
    return _0x554e29;
  }, _0x51be(_0x395a9b, _0xc56add);
}
_sfc_main[_0x25a3a2(255)] = (_0x108847, _0x4fdd9f) => {
  const _0x3066f5 = { _0x8309e2: 251 }, _0x5e6d93 = _0x25a3a2, _0x460943 = useSSRContext();
  return (_0x460943[_0x5e6d93(251)] || (_0x460943[_0x5e6d93(_0x3066f5._0x8309e2)] = /* @__PURE__ */ new Set()))[_0x5e6d93(281)]("resources/js/Pages/Settings/Partials/UpdateProfileInformationForm.vue"), _sfc_setup ? _sfc_setup(_0x108847, _0x4fdd9f) : void 0;
};
export {
  _sfc_main as default
};
