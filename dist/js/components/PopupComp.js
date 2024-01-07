define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    data() {
      return {
        nextimageId: '',
        prevImageId: ''
      };
    },
    props: {
      images: Array
    },
    methods: {
      next() {
        this.images.filter(image => {
          if (image.popupShow) {
            this.nextimageId = image.id + 1;
            image.popupShow = false;
          }
          if (this.nextimageId === image.id) {
            image.popupShow = true;
          }
        });
      },
      prev() {
        let images_reverse = this.images.slice().reverse();
        images_reverse.filter(image => {
          if (image.popupShow) {
            this.previmageId = image.id - 1;
            image.popupShow = false;
          }
          if (this.previmageId === image.id) {
            image.popupShow = true;
          }
        });
      },
      close() {
        this.images.filter(image => {
          if (image.popupShow) {
            image.popupShow = false;
          }
        });
      }
    },
    mounted() {},
    watch: {}
  };
});