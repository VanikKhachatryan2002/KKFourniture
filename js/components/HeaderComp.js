define(["exports", "./headerComponents/NavbarHeaderComp.vue", "./headerComponents/MyLogoComp.vue", "./headerComponents/CategoreisNavbarComp.vue"], function (_exports, _NavbarHeaderComp, _MyLogoComp, _CategoreisNavbarComp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _NavbarHeaderComp = _interopRequireDefault(_NavbarHeaderComp);
  _MyLogoComp = _interopRequireDefault(_MyLogoComp);
  _CategoreisNavbarComp = _interopRequireDefault(_CategoreisNavbarComp);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var _default = _exports.default = {
    data() {
      return {};
    },
    components: {
      NavbarHeaderComp: _NavbarHeaderComp.default,
      MyLogoComp: _MyLogoComp.default,
      CategoreisNavbarComp: _CategoreisNavbarComp.default
    }
  };
});