const _0x5d30c5 = _0x4745;
(function(_0x4a4d82, _0x344a62) {
  const _0x35bc4d = { _0x574ce6: 183, _0x5f3080: 172, _0x1a00b6: 144, _0x184dfd: 152, _0x4f3b91: 181 }, _0x3e06aa = _0x4745, _0x1850b8 = _0x4a4d82();
  while (!![]) {
    try {
      const _0x4e87ec = -parseInt(_0x3e06aa(_0x35bc4d._0x574ce6)) / 1 + -parseInt(_0x3e06aa(_0x35bc4d._0x5f3080)) / 2 + -parseInt(_0x3e06aa(165)) / 3 + parseInt(_0x3e06aa(157)) / 4 + -parseInt(_0x3e06aa(_0x35bc4d._0x1a00b6)) / 5 * (-parseInt(_0x3e06aa(_0x35bc4d._0x184dfd)) / 6) + -parseInt(_0x3e06aa(_0x35bc4d._0x4f3b91)) / 7 + parseInt(_0x3e06aa(164)) / 8;
      if (_0x4e87ec === _0x344a62)
        break;
      else
        _0x1850b8["push"](_0x1850b8["shift"]());
    } catch (_0xaa433c) {
      _0x1850b8["push"](_0x1850b8["shift"]());
    }
  }
})(_0x48db, 836869);
import { defineComponent, computed, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _0x558b34 } from "./Navbar-354467b7.mjs";
import { usePage } from "@inertiajs/vue3";
function _0x4745(_0x42639f, _0x488173) {
  const _0x48dbfd = _0x48db();
  return _0x4745 = function(_0x474561, _0xc87758) {
    _0x474561 = _0x474561 - 141;
    let _0x52673c = _0x48dbfd[_0x474561];
    return _0x52673c;
  }, _0x4745(_0x42639f, _0x488173);
}
import { route } from "momentum-trail";
import { _ as _0x31c0d6 } from "./Footer-21dd745d.mjs";
import { _ as _0x1134cc } from "./AppHead-dd2f4462.mjs";
import "axios";
import "dayjs";
const _sfc_main$1 = defineComponent({ "__name": _0x5d30c5(162), "__ssrInlineRender": !![], "props": { "UserCount": { "type": Number, "default": "0" } }, "setup"(_0xa9e3e9) {
  const _0x1f52da = { _0x343794: 151, _0x5332cc: 171, _0x4b5834: 154, _0x263ff5: 163, _0x1a4e0b: 177, _0x360ce2: 147, _0x131d1: 173, _0x36a891: 159, _0x588fc3: 166, _0x161a8b: 175, _0x62f65a: 155, _0x2eed21: 143 }, _0x23fba6 = { _0x4a5378: 182, _0xe0dfa5: 167 }, _0x288736 = _0x5d30c5, _0x4cf34e = computed(() => usePage()[_0x288736(168)]["site"]);
  return (_0x4ce593, _0x3665a2, _0x502bb7, _0x3a59bb) => {
    const _0x551ec5 = _0x288736, _0x1081ca = resolveComponent(_0x551ec5(153));
    _0x3665a2(_0x551ec5(149) + ssrRenderAttr(_0x551ec5(184), _0x4cf34e[_0x551ec5(_0x1f52da._0x343794)][_0x551ec5(_0x1f52da._0x5332cc)]) + ' width="512"></h1><h3 class="mt-3 mb-2 fw-semibold">Join in on the action today. Buy &amp; sell items, participate in groups, make friends, and more.</h3><h4 class="mb-3 fw-semibold">Join over <strong>' + ssrInterpolate(_0xa9e3e9[_0x551ec5(145)]) + _0x551ec5(170)), _0x3665a2(ssrRenderComponent(_0x1081ca, { "href": unref(route)(_0x551ec5(_0x1f52da._0x4b5834)), "class": _0x551ec5(150) }, { "default": withCtx((_0x15850a, _0xbc145, _0x5f2694, _0x37ce65) => {
      const _0x5253df = _0x551ec5;
      if (_0xbc145)
        _0xbc145(_0x5253df(_0x23fba6._0x4a5378) + _0x37ce65 + "></i> Login");
      else
        return [createVNode("i", { "class": _0x5253df(_0x23fba6._0xe0dfa5) }), createTextVNode(_0x5253df(174))];
    }), "_": 1 }, _0x502bb7)), _0x3665a2(ssrRenderComponent(_0x1081ca, { "href": unref(route)(_0x551ec5(148)), "class": _0x551ec5(_0x1f52da._0x263ff5) }, { "default": withCtx((_0x83594a, _0x3fc3bc, _0x4c9e9f, _0x38bb49) => {
      const _0x40d1ea = _0x551ec5;
      if (_0x3fc3bc)
        _0x3fc3bc(_0x40d1ea(161) + _0x38bb49 + "></i> Register");
      else
        return [createVNode("i", { "class": _0x40d1ea(158) }), createTextVNode(" Register")];
    }), "_": 1 }, _0x502bb7)), _0x3665a2(_0x551ec5(_0x1f52da._0x1a4e0b) + ssrRenderStyle({ "font-size": _0x551ec5(166) }) + _0x551ec5(176) + ssrRenderStyle({ "font-size": _0x551ec5(_0x1f52da._0x360ce2) }) + _0x551ec5(_0x1f52da._0x131d1) + ssrRenderStyle({ "font-size": _0x551ec5(147) }) + _0x551ec5(_0x1f52da._0x36a891) + ssrInterpolate(_0x4ce593[_0x551ec5(146)][_0x551ec5(168)][_0x551ec5(155)]["name"]) + _0x551ec5(178) + ssrRenderStyle({ "font-size": _0x551ec5(_0x1f52da._0x588fc3) }) + _0x551ec5(179) + ssrRenderStyle({ "font-size": "90px" }) + _0x551ec5(142) + ssrRenderStyle({ "font-size": _0x551ec5(147) }) + '"></i></div><div class="col-md-9"><div class="landing-text fw-semibold">Create Your Own Assets</div><div>Unleash your inner entrepreneur by creating and marketing your own items, groups, games and more.</div></div></div></div></div></div><div class="col-md-6"><div class="card"><div class="card-body"><div class="row align-items-center"><div class="text-center col-md-3 text-center-sm show-sm-only"><i class="mb-2 fas fa-comments-alt text-warning" style="' + ssrRenderStyle({ "font-size": "80px" }) + _0x551ec5(_0x1f52da._0x161a8b) + ssrInterpolate(_0x4ce593["$page"][_0x551ec5(168)][_0x551ec5(_0x1f52da._0x62f65a)]["name"]) + ', from the funny to the professional, and find new friends!</div></div><div class="text-center col-md-4 text-center-sm hide-sm"><i class="fas fa-comments-alt text-warning" style="' + ssrRenderStyle({ "font-size": _0x551ec5(166) }) + _0x551ec5(_0x1f52da._0x2eed21));
  };
} }), _sfc_setup$1 = _sfc_main$1[_0x5d30c5(156)];
_sfc_main$1[_0x5d30c5(156)] = (_0x3c1da1, _0x9b4201) => {
  const _0x738eb3 = { _0x2d9ffb: 185 }, _0x121fed = _0x5d30c5, _0x447573 = useSSRContext();
  return (_0x447573[_0x121fed(180)] || (_0x447573["modules"] = /* @__PURE__ */ new Set()))["add"](_0x121fed(_0x738eb3._0x2d9ffb)), _sfc_setup$1 ? _sfc_setup$1(_0x3c1da1, _0x9b4201) : void 0;
};
const landing = "", _sfc_main = defineComponent({ "__name": _0x5d30c5(162), "__ssrInlineRender": !![], "props": { "UserCount": { "type": Number, "required": !![] } }, "setup"(_0x1c3557) {
  const _0x4251df = { _0x24dc4f: 162 }, _0x1c082b = { _0x402ee7: 145 };
  return (_0x42104a, _0x4ce4a5, _0x5ab6b4, _0xcca10a) => {
    const _0xb8ee5b = _0x4745;
    _0x4ce4a5(_0xb8ee5b(160)), _0x4ce4a5(ssrRenderComponent(_0x1134cc, { "pageTitle": _0xb8ee5b(_0x4251df._0x24dc4f), "description": "Welcome to Vestora.", "url": unref(route)(_0xb8ee5b(154)) }, null, _0x5ab6b4)), _0x4ce4a5(ssrRenderComponent(_0x558b34, null, { "default": withCtx((_0x492897, _0x3c4d72, _0x48c4b0, _0x263742) => {
      const _0x3864c6 = _0xb8ee5b;
      if (_0x3c4d72)
        _0x3c4d72(ssrRenderComponent(_sfc_main$1, { "UserCount": _0x1c3557[_0x3864c6(145)] }, null, _0x48c4b0, _0x263742));
      else
        return [createVNode(_sfc_main$1, { "UserCount": _0x1c3557[_0x3864c6(_0x1c082b._0x402ee7)] }, null, 8, ["UserCount"])];
    }), "_": 1 }, _0x5ab6b4)), _0x4ce4a5(ssrRenderComponent(_0x31c0d6, null, null, _0x5ab6b4)), _0x4ce4a5("<!--]-->");
  };
} }), _sfc_setup = _sfc_main["setup"];
_sfc_main[_0x5d30c5(156)] = (_0x59c168, _0x48a9e5) => {
  const _0x5790ed = { _0x483b93: 180, _0x57207b: 141 }, _0x109d4c = _0x5d30c5, _0x34e28c = useSSRContext();
  return (_0x34e28c[_0x109d4c(_0x5790ed._0x483b93)] || (_0x34e28c[_0x109d4c(180)] = /* @__PURE__ */ new Set()))[_0x109d4c(_0x5790ed._0x57207b)](_0x109d4c(169)), _sfc_setup ? _sfc_setup(_0x59c168, _0x48a9e5) : void 0;
};
function _0x48db() {
  const _0x3a854b = ["Welcome", "gap-2 btn btn-success", "23808872dyCxGg", "4985703Cyaoqj", "90px", "mr-1 fas fa-key", "props", "resources/js/Pages/Welcome.vue", '</strong> users today!</h4><div class="min-w-0 gap-1 mt-3 flex-container align-center">', "logo", "2007748JKYUnq", '"></i></div><div class="col-md-9"><div class="landing-text fw-semibold">Customize Your Character</div><div>Pick and choose from a collection of items created by the community to create your own unique character with.</div></div></div></div></div></div><div class="col-md-6"><div class="card"><div class="card-body"><div class="row align-items-center"><div class="text-center col-md-3 text-center-sm show-sm-only"><i class="mb-2 fas fa-users text-success" style="', " Login", '"></i></div><div class="text-right col-md-8"><div class="landing-text fw-semibold">Socialize With Others</div><div>Head over to Discussion to socialize with all kinds of users on ', '"></i><i class="mb-2 fas fa-user-hard-hat text-info show-sm-only" style="', '</div></div></div></div></div></div></header><div class="container site grid-x"><div><div class="row" id="YASQUEEN"><div class="col-md-6"><div class="card"><div class="card-body"><div class="row align-items-center"><div class="text-center col-md-3 text-center-sm"><i class="fas fa-user-hard-hat text-info hide-sm" style="', ', finding and adding friends is only two steps away, simply find a user and add them. It&#39;s that simple!</div></div><div class="text-center col-md-4 text-center-sm hide-sm"><i class="fas fa-users text-success" style="', '"></i></div></div></div></div></div><div class="col-md-6"><div class="card"><div class="card-body"><div class="row align-items-center"><div class="text-center col-md-3 text-center-sm"><i class="fas fa-tools text-danger hide-sm" style="', "modules", "2758490LlCIhl", '<i class="mr-1 fas fa-key"', "869009fzwpRq", "src", "resources/js/Components/PageProps/Welcome.vue", "add", '"></i><i class="mb-2 fas fa-tools text-danger show-sm-only" style="', '"></i></div></div></div></div></div></div></div></div><!--]-->', "33515XkEpjq", "UserCount", "$page", "80px", "auth.register.page", '<!--[--><header class="masthead bg-info"><div class="cell"><div class="justify-center text-center row align-center"><div class="row justify-content-center"><div class="col-xl-6"><div class="text-center text-white"><h1 class="mb-5"><img', "gap-2 btn btn-warning", "value", "1416iBrUwU", "Link", "auth.login.page", "site", "setup", "830824bxbByW", "mr-1 fas fa-user-plus", '"></i></div><div class="text-right col-md-8"><div class="landing-text fw-semibold">Meet New Friends</div><div>On ', "<!--[-->", '<i class="mr-1 fas fa-user-plus"'];
  _0x48db = function() {
    return _0x3a854b;
  };
  return _0x48db();
}
export {
  _sfc_main as default
};
