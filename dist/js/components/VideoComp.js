define(["exports", "@/assets/Home_video.mp4"], function (_exports, _Home_video) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Home_video = _interopRequireDefault(_Home_video);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var _default = _exports.default = {
    data() {
      return {
        videoSource: _Home_video.default
      };
    }
  };
});