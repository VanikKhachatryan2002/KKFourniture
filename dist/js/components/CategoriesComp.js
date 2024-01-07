define(["exports", "@/mixins/pagination", "../components/PopupComp.vue"], function (_exports, _pagination, _PopupComp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _pagination = _interopRequireDefault(_pagination);
  _PopupComp = _interopRequireDefault(_PopupComp);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var _default = _exports.default = {
    data() {
      return {
        pages: [],
        pageCount: 0,
        imageCount: 9,
        minPageShowId: 0,
        maxPageShowId: 9,
        pageNumber: 1,
        imagePaginationShowCount: 2,
        paginationDisplay: true,
        maxPageNumber: 10,
        nextString: false,
        prevString: false,
        anableAnimation: false
      };
    },
    props: {
      images: Array
    },
    mixins: [_pagination.default],
    methods: {
      activePage(pageNumber) {
        this.pageNumber = pageNumber;
        this.maxPageShowId = this.imageCount * pageNumber;
        this.minPageShowId = this.maxPageShowId - this.imageCount;
        this.images.filter(image => {
          if (image.id >= this.minPageShowId && image.id < this.maxPageShowId) {
            image.pageShow = true;
          } else {
            image.pageShow = false;
          }
        });
        this.pages.filter(page => {
          if (page.number === pageNumber) {
            page.active = true;
          } else {
            page.active = false;
          }
          if (page.active === false && page.Id < pageNumber - this.imagePaginationShowCount) {
            page.paginationDisplay = false;
          } else if (page.Id >= pageNumber - this.imagePaginationShowCount && page.Id <= pageNumber + this.imagePaginationShowCount) {
            page.paginationDisplay = true;
          } else {
            page.paginationDisplay = false;
          }
          if (page.Id === 1) {
            if (!page.paginationDisplay) {
              this.anableAnimation = false;
              this.prevString = true;
              this.prevString = true;
            } else {
              this.prevString = false;
            }
          }
          if (page.Id === this.pages.length - 1) {
            if (page.paginationDisplay) {
              this.nextString = false;
            } else {
              this.nextString = true;
            }
          }
        });
      },
      next() {
        this.anableAnimation = false;
        if (this.pageNumber === this.pages.length) {
          return;
        }
        this.pageNumber++;
        this.activePage(this.pageNumber);
      },
      previous() {
        this.anableAnimation = false;
        if (this.pageNumber === 1) {
          return;
        }
        this.pageNumber--;
        this.activePage(this.pageNumber);
      },
      pagesCountFunc() {
        if (this.tabletMedia || this.phoneMedia || !this.nextString && !this.prevString) {
          this.anableAnimation = false;
        } else {
          this.anableAnimation = true;
        }
        let length = this.images.length;
        this.pages = [];
        this.pageCount = Math.ceil(length / this.imageCount);
        for (let i = 1; i <= this.pageCount; i++) {
          let number = i;
          let pageId = number;
          if (i > this.maxPageNumber) {
            this.paginationDisplay = false;
          } else {
            this.paginationDisplay = true;
          }
          this.pages.push({
            Id: pageId,
            number: number,
            active: false,
            paginationDisplay: this.paginationDisplay
          });
          this.pages[0].active = true;
        }
      },
      popupShowFunction(imageId) {
        this.images.filter(image => {
          if (imageId === image.id) {
            image.popupShow = true;
          } else {
            image.popupShow = false;
          }
        });
      }
    },
    mounted() {
      if (this.tabletMedia) {
        this.imageCount = 4;
        this.maxPageShowId = 4;
        this.imagePaginationShowCount = 2;
        this.anableAnimation = false;
        this.activePage(1);
      }
      if (this.phoneMedia) {
        this.imageCount = 1;
        this.maxPageShowId = 1;
        this.imagePaginationShowCount = 1;
        this.anableAnimation = false;
        this.activePage(1);
      }
      this.pagesCountFunc();
    },
    watch: {
      tabletMedia(tablet) {
        if (tablet) {
          this.imageCount = 4;
          this.maxPageShowId = 4;
          this.imagePaginationShowCount = 2;
          this.maxPageNumber = 7;
          this.activePage(1);
          this.pagesCountFunc();
        } else {
          this.imageCount = 9;
          this.maxPageShowId = 9;
          this.maxPageNumber = 10;
          this.imagePaginationShowCount = 2;
          this.activePage(1);
          this.pagesCountFunc();
        }
      },
      phoneMedia(phone) {
        if (phone) {
          this.anableAnimation = true;
          console.log(this.anableAnimation);
          this.imageCount = 1;
          this.maxPageShowId = 1;
          this.maxPageNumber = 4;
          this.imagePaginationShowCount = 1;
          this.activePage(1);
          this.pagesCountFunc();
        } else {
          this.anableAnimation = true;
          this.imageCount = 4;
          this.maxPageShowId = 4;
          this.imagePaginationShowCount = 2;
          this.maxPageNumber = 7;
          this.activePage(1);
          this.pagesCountFunc();
        }
      }
    }
  };
});