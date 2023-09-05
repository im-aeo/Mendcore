const _0xff4de9 = _0x2615;
(function(_0x460bbf, _0xee9c37) {
  const _0x48e136 = { _0x47f3d2: 205, _0x16843e: 190, _0x18ca20: 136, _0x3d4b95: 174, _0x518232: 151, _0x3bad7d: 134, _0x1bfee6: 149 }, _0x5415ee = _0x2615, _0x3b0478 = _0x460bbf();
  while (!![]) {
    try {
      const _0x2d9bad = parseInt(_0x5415ee(_0x48e136._0x47f3d2)) / 1 + -parseInt(_0x5415ee(_0x48e136._0x16843e)) / 2 * (parseInt(_0x5415ee(142)) / 3) + -parseInt(_0x5415ee(_0x48e136._0x18ca20)) / 4 + parseInt(_0x5415ee(_0x48e136._0x3d4b95)) / 5 * (parseInt(_0x5415ee(_0x48e136._0x518232)) / 6) + parseInt(_0x5415ee(_0x48e136._0x3bad7d)) / 7 * (parseInt(_0x5415ee(162)) / 8) + parseInt(_0x5415ee(_0x48e136._0x1bfee6)) / 9 + -parseInt(_0x5415ee(180)) / 10;
      if (_0x2d9bad === _0xee9c37)
        break;
      else
        _0x3b0478["push"](_0x3b0478["shift"]());
    } catch (_0x45aec8) {
      _0x3b0478["push"](_0x3b0478["shift"]());
    }
  }
})(_0x149b, 791787);
import { defineComponent, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _0x346a20 } from "./Navbar-cfe40770.mjs";
import { _ as _0x14d3bc } from "./Sidebar-d98a6955.mjs";
import { F as _0x297903 } from "./Footer-52d2ed2b.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import { route } from "momentum-trail";
import _0x2167bc from "axios";
function _0x149b() {
  const _0x161409 = ['>Insert an Image</button><button class="btn btn-danger"', "onClick", "Create", "mx-1 my-3 divider", "mb-2 text-xs fw-bold text-uppercase", "481354CTSWGf", "processing", "forum.create.validate", ">Link To Website</button></div></div>", "Post Content", "textarea", "btn btn-success", "text-xl text-danger bg-primary", '</textarea><button class="btn btn-success btn-block" type="submit"', "Insert an Image", "card card-body", " disabled", "button", "body", "<!--[-->", "65853otfoyz", "input", "min-w-0 gap-2 mt-3 flex-container", "div", "text-xs text-muted bg-primary", "setup", "[url=https://yourlinkhere]Link Text[/url]", "mb-2 form", "Underline Text", "77HbKfSy", ' placeholder="Title" maxlength="64"', "6037856DvxEhq", "[img]Image Link[/img]", "Post Title", "onSubmit", "text", "modules", "6tdaUCN", "label", '>Post Content</label><textarea id="post-body" class="mb-2 form" name="body" placeholder="Body" maxlength="4096"', "Body", "btn btn-success btn-block", '>Bold Text</button><button class="btn btn-success"', "post-body", "13050018wOWMLK", '><button class="btn btn-info"', "6pPYCos", "Title", '>Post Title</label><input id="post-title" class="mb-2 form" type="text" name="title"', '>Underline Text</button><button class="btn btn-info"', "onUpdate:modelValue", '>Add Color</button><button class="btn btn-warning"', "get", "Add Color", "title", "[i]Italic Text[/i]", "submit", "877304Duaybn", " Make sure you post in the appropriate sub-forum and that your post does not break any site rules. ", "password", "[b]Bold Text[/b]", "4096", "post", "form", "add", '><label for="post-title" class="mb-2 text-xs fw-bold text-uppercase"', "<!--]-->", "disabled", '>Create</button></form><div class="min-w-0 gap-2 mt-3 flex-container"', "5420170afWgdQ", "btn btn-warning", '><label for="post-body" class="mb-2 text-xs fw-bold text-uppercase"', "></div><form", "[u]Underlined Text[/u]", "btn btn-info", "10235770BqWUOr", '>Italic Text</button><button class="btn btn-success"', "post-title", '> Make sure you post in the appropriate sub-forum and that your post does not break any site rules. </div><div class="mx-1 my-3 divider"', "topic"];
  _0x149b = function() {
    return _0x161409;
  };
  return _0x149b();
}
function _0x2615(_0x15e38c, _0x431bfd) {
  const _0x149bfc = _0x149b();
  return _0x2615 = function(_0x26151b, _0x5c3577) {
    _0x26151b = _0x26151b - 133;
    let _0x5224ff = _0x149bfc[_0x26151b];
    return _0x5224ff;
  }, _0x2615(_0x15e38c, _0x431bfd);
}
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-7d6fdb2f.mjs";
const _sfc_main = defineComponent({ "__name": _0xff4de9(187), "__ssrInlineRender": !![], "props": { "topic": { "type": Object, "required": !![] } }, "setup"(_0x41dc1b) {
  const _0x4caf7d = { _0x9946a: 171 }, _0xd80637 = { _0x39a662: 203 }, _0xa467f7 = _0x41dc1b, _0x5a9691 = useForm({ "title": "", "body": "" }), _0x2ff4a7 = () => {
    const _0x47d8d1 = { _0x36a152: 192, _0x18b0a2: 184 }, _0x44b549 = _0x2615;
    _0x2167bc[_0x44b549(157)]("/sanctum/csrf-cookie")["then"]((_0x33f024) => {
      const _0x195f44 = _0x44b549;
      _0x5a9691[_0x195f44(167)](route(_0x195f44(_0x47d8d1._0x36a152), { "id": _0xa467f7[_0x195f44(_0x47d8d1._0x18b0a2)]["id"] }), { "onFinish": () => _0x5a9691["reset"](_0x195f44(164)) });
    });
  }, _0x3f38d8 = (_0xe4fdbd) => {
    const _0xdcdef6 = _0x2615;
    _0x5a9691[_0xdcdef6(_0xd80637._0x39a662)] += _0xe4fdbd;
  };
  return (_0x4e6657, _0x1f0b95, _0x527fc7, _0x4fde08) => {
    const _0x1d345a = { _0x33df35: 183, _0x1d6296: 177, _0x1afabd: 153, _0x1b0002: 176, _0x6eb446: 144, _0x2605ba: 203, _0x291aec: 198, _0x106588: 201, _0x128e9d: 150, _0x3c3492: 156, _0x1831e8: 181, _0x59c484: 154, _0x484306: 197, _0x53da56: 209, _0x476c4f: 188, _0x55582f: 168, _0x539a8d: 143, _0x1b03e3: 189, _0x4f3c99: 138, _0x42b44a: 206, _0x5b4608: 159, _0x2af134: 152, _0x282fb2: 189, _0x3a16fb: 194, _0x41400b: 148, _0x34be4f: 212, _0x506528: 145, _0x4b7395: 166, _0xed8db7: 172, _0x5ada61: 139, _0x2a5b5c: 179, _0x30015d: 158, _0x49f246: 186, _0x12359f: 196, _0x3d291d: 133, _0xbeba89: 199, _0x596745: 186, _0x5607cc: 202 }, _0x1592a1 = _0x2615;
    _0x1f0b95(_0x1592a1(204)), _0x1f0b95(ssrRenderComponent(_0x346a20, null, null, _0x527fc7)), _0x1f0b95(ssrRenderComponent(_0x14d3bc, null, { "default": withCtx((_0x51c459, _0x238e2e, _0xd3938e, _0xf98d74) => {
      const _0xe5758f = _0x1592a1;
      if (_0x238e2e)
        _0x238e2e('<div class="card card-body"' + _0xf98d74 + '><div class="text-xl text-danger bg-primary"' + _0xf98d74 + '>Create a Post</div><div class="text-xs text-muted bg-primary"' + _0xf98d74 + _0xe5758f(_0x1d345a._0x33df35) + _0xf98d74 + _0xe5758f(_0x1d345a._0x1d6296) + _0xf98d74 + _0xe5758f(170) + _0xf98d74 + _0xe5758f(_0x1d345a._0x1afabd) + ssrRenderAttr("value", unref(_0x5a9691)[_0xe5758f(159)]) + _0xe5758f(135) + _0xf98d74 + _0xe5758f(_0x1d345a._0x1b0002) + _0xf98d74 + _0xe5758f(_0x1d345a._0x6eb446) + _0xf98d74 + ">" + ssrInterpolate(unref(_0x5a9691)[_0xe5758f(_0x1d345a._0x2605ba)]) + _0xe5758f(_0x1d345a._0x291aec) + (ssrIncludeBooleanAttr(unref(_0x5a9691)[_0xe5758f(191)]) ? _0xe5758f(_0x1d345a._0x106588) : "") + _0xf98d74 + _0xe5758f(173) + _0xf98d74 + _0xe5758f(_0x1d345a._0x128e9d) + _0xf98d74 + _0xe5758f(_0x1d345a._0x3c3492) + _0xf98d74 + _0xe5758f(147) + _0xf98d74 + _0xe5758f(_0x1d345a._0x1831e8) + _0xf98d74 + _0xe5758f(_0x1d345a._0x59c484) + _0xf98d74 + _0xe5758f(185) + _0xf98d74 + _0xe5758f(193));
      else
        return [createVNode("div", { "class": _0xe5758f(200) }, [createVNode(_0xe5758f(208), { "class": _0xe5758f(_0x1d345a._0x484306) }, "Create a Post"), createVNode(_0xe5758f(208), { "class": _0xe5758f(_0x1d345a._0x53da56) }, _0xe5758f(163)), createVNode(_0xe5758f(208), { "class": _0xe5758f(_0x1d345a._0x476c4f) }), createVNode(_0xe5758f(_0x1d345a._0x55582f), { "onSubmit": withModifiers(_0x2ff4a7, ["prevent"]) }, [createVNode(_0xe5758f(_0x1d345a._0x539a8d), { "for": _0xe5758f(182), "class": _0xe5758f(_0x1d345a._0x1b03e3) }, _0xe5758f(_0x1d345a._0x4f3c99)), withDirectives(createVNode(_0xe5758f(_0x1d345a._0x42b44a), { "id": "post-title", "class": _0xe5758f(212), "type": _0xe5758f(140), "name": _0xe5758f(_0x1d345a._0x5b4608), "onUpdate:modelValue": (_0x7d2827) => unref(_0x5a9691)[_0xe5758f(159)] = _0x7d2827, "placeholder": _0xe5758f(_0x1d345a._0x2af134), "maxlength": "64" }, null, 8, [_0xe5758f(155)]), [[vModelText, unref(_0x5a9691)[_0xe5758f(159)]]]), createVNode("label", { "for": _0xe5758f(148), "class": _0xe5758f(_0x1d345a._0x282fb2) }, _0xe5758f(_0x1d345a._0x3a16fb)), withDirectives(createVNode(_0xe5758f(195), { "id": _0xe5758f(_0x1d345a._0x41400b), "class": _0xe5758f(_0x1d345a._0x34be4f), "name": "body", "onUpdate:modelValue": (_0x4135d2) => unref(_0x5a9691)[_0xe5758f(203)] = _0x4135d2, "placeholder": _0xe5758f(_0x1d345a._0x506528), "maxlength": _0xe5758f(_0x1d345a._0x4b7395) }, null, 8, [_0xe5758f(155)]), [[vModelText, unref(_0x5a9691)[_0xe5758f(203)]]]), createVNode(_0xe5758f(202), { "class": _0xe5758f(146), "type": _0xe5758f(161), "disabled": unref(_0x5a9691)[_0xe5758f(191)] }, "Create", 8, [_0xe5758f(_0x1d345a._0xed8db7)])], 40, [_0xe5758f(_0x1d345a._0x5ada61)]), createVNode(_0xe5758f(208), { "class": _0xe5758f(207) }, [createVNode("button", { "class": _0xe5758f(_0x1d345a._0x2a5b5c), "onClick": (_0x2171fc) => _0x3f38d8("[color=#hexcodehere]Colored Text[/color]") }, _0xe5758f(_0x1d345a._0x30015d), 8, ["onClick"]), createVNode("button", { "class": _0xe5758f(175), "onClick": (_0x369105) => _0x3f38d8(_0xe5758f(165)) }, "Bold Text", 8, [_0xe5758f(186)]), createVNode(_0xe5758f(202), { "class": _0xe5758f(196), "onClick": (_0x46ed91) => _0x3f38d8(_0xe5758f(160)) }, "Italic Text", 8, [_0xe5758f(_0x1d345a._0x49f246)]), createVNode("button", { "class": _0xe5758f(_0x1d345a._0x12359f), "onClick": (_0x3039b3) => _0x3f38d8(_0xe5758f(178)) }, _0xe5758f(_0x1d345a._0x3d291d), 8, ["onClick"]), createVNode("button", { "class": _0xe5758f(_0x1d345a._0x2a5b5c), "onClick": (_0x2f1299) => _0x3f38d8(_0xe5758f(137)) }, _0xe5758f(_0x1d345a._0xbeba89), 8, [_0xe5758f(_0x1d345a._0x596745)]), createVNode(_0xe5758f(_0x1d345a._0x5607cc), { "class": "btn btn-danger", "onClick": (_0x1df756) => _0x3f38d8(_0xe5758f(211)) }, "Link To Website", 8, [_0xe5758f(186)])])])];
    }), "_": 1 }, _0x527fc7)), _0x1f0b95(ssrRenderComponent(_0x297903, null, null, _0x527fc7)), _0x1f0b95(_0x1592a1(_0x4caf7d._0x9946a));
  };
} }), _sfc_setup = _sfc_main[_0xff4de9(210)];
_sfc_main["setup"] = (_0x508d8, _0x46f645) => {
  const _0x3d3442 = { _0x32ccd6: 141, _0x49a1c3: 141 }, _0xcf41e9 = _0xff4de9, _0x1f95ee = useSSRContext();
  return (_0x1f95ee[_0xcf41e9(_0x3d3442._0x32ccd6)] || (_0x1f95ee[_0xcf41e9(_0x3d3442._0x49a1c3)] = /* @__PURE__ */ new Set()))[_0xcf41e9(169)]("resources/js/Pages/Forum/Create.vue"), _sfc_setup ? _sfc_setup(_0x508d8, _0x46f645) : void 0;
};
export {
  _sfc_main as default
};
