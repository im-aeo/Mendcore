const _0x2e83e9 = _0x3f63;
(function(_0x2e6779, _0x2571ca) {
  const _0x6d35af = { _0x292a7a: 514, _0x59366b: 513, _0x11d4b1: 497, _0x49195e: 535, _0x52d80d: 532, _0x3a6da8: 502 }, _0x551e64 = _0x3f63, _0x29f1df = _0x2e6779();
  while (!![]) {
    try {
      const _0x3f0b1e = -parseInt(_0x551e64(_0x6d35af._0x292a7a)) / 1 * (-parseInt(_0x551e64(_0x6d35af._0x59366b)) / 2) + parseInt(_0x551e64(472)) / 3 + parseInt(_0x551e64(_0x6d35af._0x11d4b1)) / 4 + -parseInt(_0x551e64(501)) / 5 + -parseInt(_0x551e64(_0x6d35af._0x49195e)) / 6 + parseInt(_0x551e64(_0x6d35af._0x52d80d)) / 7 + -parseInt(_0x551e64(_0x6d35af._0x3a6da8)) / 8;
      if (_0x3f0b1e === _0x2571ca)
        break;
      else
        _0x29f1df["push"](_0x29f1df["shift"]());
    } catch (_0xb9ecfd) {
      _0x29f1df["push"](_0x29f1df["shift"]());
    }
  }
})(_0x73a2, 680594);
import { defineComponent, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _0x5a4cc7 } from "./Navbar-354467b7.mjs";
import { _ as _0x347491 } from "./Sidebar-70f4a6f7.mjs";
import { _ as _0xeb6086 } from "./Footer-21dd745d.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import { route } from "momentum-trail";
import _0x3ded42 from "axios";
function _0x73a2() {
  const _0x1ab571 = ["<!--[-->", "Add Color", "get", "modules", '>Bold Text</button><button class="btn btn-success"', '> Make sure you post in the appropriate sub-forum and that your post does not break any site rules. </div><div class="mx-1 my-3 divider"', "btn btn-success", "Post Title", "div", "setup", '>Add Color</button><button class="btn btn-warning"', "Body", "forum.create.validate", "Create", "reset", "processing", "[color=#hexcodehere]Colored Text[/color]", "Create a Post", "then", "topic", "onUpdate:modelValue", "mb-2 form", "<!--]-->", "2365788OBHfkF", "Bold Text", "></div><form", "post", "2509520oAEpPo", "31576NEZtQZ", "value", "input", "post-title", "Underline Text", "add", "btn btn-success btn-block", '<div class="card card-body"', "text-xl text-danger bg-primary", "onClick", '><label for="post-body" class="mb-2 text-xs fw-bold text-uppercase"', "2038uCldHW", "707RlMhaX", "submit", "btn btn-danger", "title", "textarea", "min-w-0 gap-2 mt-3 flex-container", "card card-body", "Post Content", '><button class="btn btn-info"', '>Underline Text</button><button class="btn btn-info"', "button", "4096", "body", "password", '>Post Title</label><input id="post-title" class="mb-2 form" type="text" name="title"', '><label for="post-title" class="mb-2 text-xs fw-bold text-uppercase"', '>Create a Post</div><div class="text-xs text-muted bg-primary"', "disabled", "2717701PoWHRQ", "Title", "Insert an Image", "7348224jMlzYx", "text-xs text-muted bg-primary", "text", " disabled", "label", "btn btn-info", "btn btn-warning", '><div class="text-xl text-danger bg-primary"', "/sanctum/csrf-cookie", "2133078MGXWyX", "[b]Bold Text[/b]"];
  _0x73a2 = function() {
    return _0x1ab571;
  };
  return _0x73a2();
}
import "@inertiajs/vue3";
const _sfc_main = defineComponent({ "__name": _0x2e83e9(487), "__ssrInlineRender": !![], "props": { "topic": { "type": Object, "required": !![] } }, "setup"(_0x5d8777) {
  const _0xf2221e = { _0x3ae8f9: 496 }, _0x2fb034 = { _0x350ba1: 509, _0x14d79b: 470, _0x441308: 530, _0x1d3a0f: 499, _0x2cb545: 528, _0x5937f4: 517, _0x33588b: 484, _0x2633ca: 478, _0x4a3fd6: 523, _0x1f0d49: 482, _0x566243: 520, _0xbbd6b: 510, _0x5d8543: 482, _0x296b32: 464, _0xed4428: 467, _0x320a23: 481, _0x5bdde6: 517, _0x3e9aef: 518, _0x1fcb8c: 526, _0xc99292: 485, _0x1ec0e9: 525, _0x131a47: 526, _0xacf406: 515, _0x5a5b47: 489, _0x12da8c: 531, _0x269b0b: 475, _0x2183c7: 511, _0x53a3ce: 498, _0x2fd98b: 511, _0x3d32c7: 524, _0x19b9a3: 480, _0x4b209f: 516 }, _0x3c2155 = { _0x5584aa: 471 }, _0x34552e = _0x5d8777, _0x549b77 = useForm({ "title": "", "body": "" }), _0x59d63d = () => {
    const _0x3fc9f1 = { _0x4ed510: 500 }, _0x28b501 = _0x3f63;
    _0x3ded42[_0x28b501(476)](_0x28b501(_0x3c2155._0x5584aa))[_0x28b501(492)]((_0x1f77ab) => {
      const _0x19c7b5 = _0x28b501;
      _0x549b77[_0x19c7b5(_0x3fc9f1._0x4ed510)](route(_0x19c7b5(486), { "id": _0x34552e[_0x19c7b5(493)]["id"] }), { "onFinish": () => _0x549b77[_0x19c7b5(488)](_0x19c7b5(527)) });
    });
  }, _0x2708d7 = (_0x5455a0) => {
    _0x549b77["body"] += _0x5455a0;
  };
  return (_0x28b0b0, _0x32e16c, _0x30b205, _0x1a1165) => {
    const _0x585c75 = _0x3f63;
    _0x32e16c(_0x585c75(474)), _0x32e16c(ssrRenderComponent(_0x5a4cc7, null, null, _0x30b205)), _0x32e16c(ssrRenderComponent(_0x347491, null, { "default": withCtx((_0x5251de, _0x3509cc, _0x2de762, _0x4bbd8c) => {
      const _0x3fcb8f = _0x585c75;
      if (_0x3509cc)
        _0x3509cc(_0x3fcb8f(_0x2fb034._0x350ba1) + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x14d79b) + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x441308) + _0x4bbd8c + _0x3fcb8f(479) + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x1d3a0f) + _0x4bbd8c + _0x3fcb8f(529) + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x2cb545) + ssrRenderAttr(_0x3fcb8f(503), unref(_0x549b77)[_0x3fcb8f(_0x2fb034._0x5937f4)]) + ' placeholder="Title" maxlength="64"' + _0x4bbd8c + _0x3fcb8f(512) + _0x4bbd8c + '>Post Content</label><textarea id="post-body" class="mb-2 form" name="body" placeholder="Body" maxlength="4096"' + _0x4bbd8c + ">" + ssrInterpolate(unref(_0x549b77)[_0x3fcb8f(526)]) + '</textarea><button class="btn btn-success btn-block" type="submit"' + (ssrIncludeBooleanAttr(unref(_0x549b77)[_0x3fcb8f(489)]) ? _0x3fcb8f(466) : "") + _0x4bbd8c + '>Create</button></form><div class="min-w-0 gap-2 mt-3 flex-container"' + _0x4bbd8c + _0x3fcb8f(522) + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x33588b) + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x2633ca) + _0x4bbd8c + '>Italic Text</button><button class="btn btn-success"' + _0x4bbd8c + _0x3fcb8f(_0x2fb034._0x4a3fd6) + _0x4bbd8c + '>Insert an Image</button><button class="btn btn-danger"' + _0x4bbd8c + ">Link To Website</button></div></div>");
      else
        return [createVNode(_0x3fcb8f(_0x2fb034._0x1f0d49), { "class": _0x3fcb8f(_0x2fb034._0x566243) }, [createVNode("div", { "class": _0x3fcb8f(_0x2fb034._0xbbd6b) }, _0x3fcb8f(491)), createVNode(_0x3fcb8f(_0x2fb034._0x5d8543), { "class": _0x3fcb8f(_0x2fb034._0x296b32) }, " Make sure you post in the appropriate sub-forum and that your post does not break any site rules. "), createVNode(_0x3fcb8f(482), { "class": "mx-1 my-3 divider" }), createVNode("form", { "onSubmit": withModifiers(_0x59d63d, ["prevent"]) }, [createVNode(_0x3fcb8f(_0x2fb034._0xed4428), { "for": "post-title", "class": "mb-2 text-xs fw-bold text-uppercase" }, _0x3fcb8f(_0x2fb034._0x320a23)), withDirectives(createVNode(_0x3fcb8f(504), { "id": _0x3fcb8f(505), "class": _0x3fcb8f(495), "type": _0x3fcb8f(465), "name": _0x3fcb8f(517), "onUpdate:modelValue": (_0xccdeb5) => unref(_0x549b77)[_0x3fcb8f(517)] = _0xccdeb5, "placeholder": _0x3fcb8f(533), "maxlength": "64" }, null, 8, [_0x3fcb8f(494)]), [[vModelText, unref(_0x549b77)[_0x3fcb8f(_0x2fb034._0x5bdde6)]]]), createVNode(_0x3fcb8f(467), { "for": "post-body", "class": "mb-2 text-xs fw-bold text-uppercase" }, _0x3fcb8f(521)), withDirectives(createVNode(_0x3fcb8f(_0x2fb034._0x3e9aef), { "id": "post-body", "class": _0x3fcb8f(495), "name": _0x3fcb8f(_0x2fb034._0x1fcb8c), "onUpdate:modelValue": (_0x5f3d07) => unref(_0x549b77)[_0x3fcb8f(526)] = _0x5f3d07, "placeholder": _0x3fcb8f(_0x2fb034._0xc99292), "maxlength": _0x3fcb8f(_0x2fb034._0x1ec0e9) }, null, 8, [_0x3fcb8f(494)]), [[vModelText, unref(_0x549b77)[_0x3fcb8f(_0x2fb034._0x131a47)]]]), createVNode(_0x3fcb8f(524), { "class": _0x3fcb8f(508), "type": _0x3fcb8f(_0x2fb034._0xacf406), "disabled": unref(_0x549b77)[_0x3fcb8f(_0x2fb034._0x5a5b47)] }, _0x3fcb8f(487), 8, [_0x3fcb8f(_0x2fb034._0x12da8c)])], 40, ["onSubmit"]), createVNode("div", { "class": _0x3fcb8f(519) }, [createVNode("button", { "class": _0x3fcb8f(468), "onClick": (_0x5189ad) => _0x2708d7(_0x3fcb8f(490)) }, _0x3fcb8f(_0x2fb034._0x269b0b), 8, [_0x3fcb8f(_0x2fb034._0x2183c7)]), createVNode(_0x3fcb8f(524), { "class": _0x3fcb8f(469), "onClick": (_0x36fd1c) => _0x2708d7(_0x3fcb8f(473)) }, _0x3fcb8f(_0x2fb034._0x53a3ce), 8, [_0x3fcb8f(_0x2fb034._0x2fd98b)]), createVNode(_0x3fcb8f(_0x2fb034._0x3d32c7), { "class": _0x3fcb8f(_0x2fb034._0x19b9a3), "onClick": (_0x460354) => _0x2708d7("[i]Italic Text[/i]") }, "Italic Text", 8, [_0x3fcb8f(_0x2fb034._0x2fd98b)]), createVNode(_0x3fcb8f(524), { "class": "btn btn-success", "onClick": (_0x1699f9) => _0x2708d7("[u]Underlined Text[/u]") }, _0x3fcb8f(506), 8, [_0x3fcb8f(_0x2fb034._0x2183c7)]), createVNode("button", { "class": "btn btn-info", "onClick": (_0x20f9da) => _0x2708d7("[img]Image Link[/img]") }, _0x3fcb8f(534), 8, [_0x3fcb8f(_0x2fb034._0x2fd98b)]), createVNode("button", { "class": _0x3fcb8f(_0x2fb034._0x4b209f), "onClick": (_0x475064) => _0x2708d7("[url=https://yourlinkhere]Link Text[/url]") }, "Link To Website", 8, [_0x3fcb8f(511)])])])];
    }), "_": 1 }, _0x30b205)), _0x32e16c(ssrRenderComponent(_0xeb6086, null, null, _0x30b205)), _0x32e16c(_0x585c75(_0xf2221e._0x3ae8f9));
  };
} }), _sfc_setup = _sfc_main[_0x2e83e9(483)];
function _0x3f63(_0x5c6886, _0x28f8f2) {
  const _0x73a2b = _0x73a2();
  return _0x3f63 = function(_0x3f63a4, _0x3364eb) {
    _0x3f63a4 = _0x3f63a4 - 464;
    let _0x27ede4 = _0x73a2b[_0x3f63a4];
    return _0x27ede4;
  }, _0x3f63(_0x5c6886, _0x28f8f2);
}
_sfc_main[_0x2e83e9(483)] = (_0x4d1c16, _0x12117b) => {
  const _0x5d8e93 = { _0x542a91: 477, _0x268d93: 477 }, _0x14b1bc = _0x2e83e9, _0x58a746 = useSSRContext();
  return (_0x58a746[_0x14b1bc(_0x5d8e93._0x542a91)] || (_0x58a746[_0x14b1bc(_0x5d8e93._0x268d93)] = /* @__PURE__ */ new Set()))[_0x14b1bc(507)]("resources/js/Pages/Forum/Create.vue"), _sfc_setup ? _sfc_setup(_0x4d1c16, _0x12117b) : void 0;
};
export {
  _sfc_main as default
};
