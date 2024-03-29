(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/jfuller/Documents/GitHub/whatamIgoingtodoclub/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "R1V9":
    /*!********************************************!*\
      !*** ./src/app/heroes/heroes.component.ts ***!
      \********************************************/

    /*! exports provided: HeroesComponent */

    /***/
    function R1V9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroesComponent", function () {
        return HeroesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeroesComponent = /*#__PURE__*/function () {
        function HeroesComponent() {
          _classCallCheck(this, HeroesComponent);
        }

        _createClass(HeroesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeroesComponent;
      }();

      HeroesComponent.ɵfac = function HeroesComponent_Factory(t) {
        return new (t || HeroesComponent)();
      };

      HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroesComponent,
        selectors: [["app-heroes"]],
        decls: 3,
        vars: 0,
        template: function HeroesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "heroes works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " hero = 'Windstorm',");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./to-do/to-do.component */
      "rviq");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        inputs: {
          title: "title"
        },
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-to-do");
          }
        },
        directives: [_to_do_to_do_component__WEBPACK_IMPORTED_MODULE_1__["ToDoComponent"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nbody[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Cambria, Georgia, serif;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0FBR0o7QUFERTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtBQUlKO0FBRkUsb0JBQUE7QUFDQTtFQUNFLHlDQUFBO0FBS0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwbGljYXRpb24td2lkZSBTdHlsZXMgKi9cbmgxIHtcbiAgICBjb2xvcjogIzM2OTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gIH1cbiAgaDIsIGgzIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuICBib2R5IHtcbiAgICBtYXJnaW46IDJlbTtcbiAgfVxuICBib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYSwgc2VyaWY7XG4gIH1cbiAgLyogZXZlcnl3aGVyZSBlbHNlICovXG4gICoge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./to-do/to-do.component */
      "rviq");
      /* harmony import */


      var _to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./to-do-item/to-do-item.component */
      "sdVK");
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      "ajd2");
      /* harmony import */


      var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./heroes/heroes.component */
      "R1V9");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_2__["ToDoComponent"], _to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_3__["ToDoItemComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "ajd2":
    /*!******************************************************!*\
      !*** ./src/app/hero-detail/hero-detail.component.ts ***!
      \******************************************************/

    /*! exports provided: HeroDetailComponent */

    /***/
    function ajd2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function () {
        return HeroDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeroDetailComponent = /*#__PURE__*/function () {
        function HeroDetailComponent() {
          _classCallCheck(this, HeroDetailComponent);

          this.hero = 'xavier';
        }

        _createClass(HeroDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeroDetailComponent;
      }();

      HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
        return new (t || HeroDetailComponent)();
      };

      HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroDetailComponent,
        selectors: [["app-hero-detail"]],
        decls: 4,
        vars: 0,
        template: function HeroDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to the Exclusive What am I going to do Club!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Licenses and limitations apply.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "rviq":
    /*!******************************************!*\
      !*** ./src/app/to-do/to-do.component.ts ***!
      \******************************************/

    /*! exports provided: ToDoComponent */

    /***/
    function rviq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoComponent", function () {
        return ToDoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ToDoComponent = /*#__PURE__*/function () {
        function ToDoComponent() {
          _classCallCheck(this, ToDoComponent);

          this.hero = 'What are you going to do?';
          this.hero2 = 'Jubilee';
          this.hero3 = 'Wolverine';
          this.hero4 = 'Storm';
          this.bannerTitleText = 'Welcome to the What do you need to do Club!!!!';
          this.title = 'What do you need to do?';
          this.toDos = [];
          this.toDoInputField1 = 'jingleheimer John';
          this.newItemName2 = 'Click Here';
        }

        _createClass(ToDoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToDoComponent;
      }();

      ToDoComponent.ɵfac = function ToDoComponent_Factory(t) {
        return new (t || ToDoComponent)();
      };

      ToDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToDoComponent,
        selectors: [["app-to-do"]],
        inputs: {
          title: "title"
        },
        decls: 4,
        vars: 1,
        consts: [[3, "ngModel", "ngModelChange"], ["ngModel", "to-do-item"]],
        template: function ToDoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToDoComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.toDoInputField1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ADD!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "to-do-item", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toDoInputField1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0by1kby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "sdVK":
    /*!****************************************************!*\
      !*** ./src/app/to-do-item/to-do-item.component.ts ***!
      \****************************************************/

    /*! exports provided: ToDoItemComponent */

    /***/
    function sdVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoItemComponent", function () {
        return ToDoItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToDoItemComponent = /*#__PURE__*/function () {
        function ToDoItemComponent() {
          _classCallCheck(this, ToDoItemComponent);
        }

        _createClass(ToDoItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToDoItemComponent;
      }();

      ToDoItemComponent.ɵfac = function ToDoItemComponent_Factory(t) {
        return new (t || ToDoItemComponent)();
      };

      ToDoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToDoItemComponent,
        selectors: [["app-to-do-item"]],
        decls: 2,
        vars: 0,
        template: function ToDoItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "to-do-item works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0by1kby1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map