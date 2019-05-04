(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list></app-list>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cority-codingexam';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  width : 70%;\n  margin: 0 auto;\n\n}\n.header {\n  background-color: #dbd6d6;\n  padding: 20px;\n  text-align: left;\n  position: relative;\n  font-size: 30px;\n  font-family: 'Lucida Sans','Lucida Sans Regular',  'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  color: black;\n  border: solid 2px lightgray;\n  border-bottom: none;\n\n\n}\n.add{\n  position: absolute;\n  right: 100px;\n  padding:  30px;\n  width: 30px;\n  height: 30px;\n}\n.drop-down{\n  padding: 7px;\n  float:right;\n  width: 25px;\n  height: 25px;\n  background: gray;\n  border-radius: 50%;\n  position: absolute;\n  right: 62px;\n  top: 47px;\n}\n#listname {\n  font-size:30px;\n  font-weight: 200;\n}\n.total{\n  color: gray;\n  font-size: 20px;\n}\n#circle{\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  color:white;\n  padding:6px;\n  text-align: center;\n\n  font-size: 20px;\n  display: inline-block;\n  background-color: rgb(155, 7, 7);\n}\nli{\n  list-style: none;\n  padding: 20px;\n  border: solid 2px lightgray;\n  border-bottom: none;\n  height: 150px;\n  position: relative;\n}\nli:last-child{\n  border-bottom: solid 2px lightgray;\n\n}\nli.left-border{\n  border-left: solid 5px blue;\n}\nli div{\n  float: left;\n}\n.main-img {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n}\n.wrap {\n  display: flex;\n}\n.w-20{\n  width: 20%;\n\n}\n.w-80{\n  width: 80%;\n  position: absolute;\n  left: 200px;\n  top: 8px;\n}\n.ellipse{\n  position: absolute;\n  right: 110px;\n  top: 50px;\n  width: 25px;\n}\n.cal-icon{\n  width: 20px;\n  height: 20px;\n  padding-right: 10px;\n}\n.date{\n  padding-bottom: 5px;\n}\n.extra-buttons{\n  position: absolute;\n  right: 180px;\n  top: 40px;\n}\n.delete{\n  width: 50px;\n  height: 50px;\n  background: red;\n}\n.download{\n  width: 50px;\n  height: 50px;\n  background: green;\n\n}\n.footer-button{\n  width: 100%;\n  background: #dbd6d6;\n  color: blue;\n  font-size: 22px;\n  text-decoration: underline;\n  margin: 0;\n  height: 40px;\n  border: 2px solid lightgray;\n}\n.footer-button:active, footer-button:focus{\n  outline: none !important;\n  border: none;\n}\n@media (max-width: 756px) {\n  .main-img, .ellipse{\n    display: none;\n  }\n  li{\n    height: 200px;\n  }\n  .wrap {\n    flex-direction: column-reverse;\n  }\n  .w-20{\n    display: none;\n\n  }\n  .w-80 {\n    width: 100%;\n    left: 20px;\n    margin: 0 auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0hBQXNIO0VBQ3RILFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1COzs7QUFHckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0NBQWtDOztBQUVwQztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFHQTtFQUNFLFVBQVU7O0FBRVo7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7QUFDVjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsU0FBUztFQUNULFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsYUFBYTs7RUFFZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHdpZHRoIDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcblxufVxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmQ2ZDY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywnTHVjaWRhIFNhbnMgUmVndWxhcicsICAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogc29saWQgMnB4IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcblxuXG59XG4uYWRke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogIDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uZHJvcC1kb3due1xuICBwYWRkaW5nOiA3cHg7XG4gIGZsb2F0OnJpZ2h0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYycHg7XG4gIHRvcDogNDdweDtcbn1cblxuI2xpc3RuYW1lIHtcbiAgZm9udC1zaXplOjMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4udG90YWx7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jY2lyY2xle1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOndoaXRlO1xuICBwYWRkaW5nOjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCA3LCA3KTtcbn1cblxubGl7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubGk6bGFzdC1jaGlsZHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGxpZ2h0Z3JheTtcblxufVxubGkubGVmdC1ib3JkZXJ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggYmx1ZTtcbn1cbmxpIGRpdntcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWFpbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi53cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuXG4udy0yMHtcbiAgd2lkdGg6IDIwJTtcblxufVxuLnctODB7XG4gIHdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAwcHg7XG4gIHRvcDogOHB4O1xufVxuLmVsbGlwc2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDExMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuLmNhbC1pY29ue1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmRhdGV7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uZXh0cmEtYnV0dG9uc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTgwcHg7XG4gIHRvcDogNDBweDtcbn1cbi5kZWxldGV7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbi5kb3dubG9hZHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG5cbn1cbi5mb290ZXItYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RiZDZkNjtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uZm9vdGVyLWJ1dHRvbjphY3RpdmUsIGZvb3Rlci1idXR0b246Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1NnB4KSB7XG4gIC5tYWluLWltZywgLmVsbGlwc2V7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBsaXtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIC53cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgLnctMjB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICB9XG4gIC53LTgwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul>\n    <div class=\"header\">\n      <img class=\"add\" (click)=\"addListItem()\" src=\"https://img.icons8.com/material/24/000000/plus-math.png\">\n      <img class=\"drop-down\" (click) = \"collapse()\" src=\"https://img.icons8.com/material/24/000000/sort-down.png\">\n      <p><span id=\"listname\" >List Name</span>&nbsp;\n        &nbsp;<span id=\"circle\">{{ badge }}</span>\n        <br>\n        <span class=\"total\"> Total {{total}}</span>\n      </p>\n    </div>\n   <!-- <li *ngFor=\"let name of names\">{{ name }}</li> -->\n\n    <li *ngFor=\"let list of lists; index as i\" [ngClass]=\"{'wrap' : true ,'left-border' : this.border && i==0 }\"   >\n      <div class=\"w-20\">\n        <img class=\"main-img\" [src]=\"list.imgURL ? list.imgURL : 'https://images.unsplash.com/photo-1502210109953-6c28c3416826?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' \" alt=\"list-image\">\n      </div>\n      <div class=\"w-80\">\n        <div class=\"first-part\">\n        <h3 class=\"heading\">{{ list.heading }}</h3>\n        <h4 class=\"description1\">{{ list.desc1 }}</h4>\n        <p>{{ list.desc2 }}</p>\n        <span>\n        <img class=\"cal-icon\" src=\"https://img.icons8.com/ios/26/000000/calendar-filled.png\">\n        <span class=\"date\">{{ list.todayDate | date : 'EE LLL dd yyyy'}}\n        </span>\n        </span>\n        </div>\n        <div class=\"second-part\">\n          <img class=\"ellipse\" (click)=\"hide[i] = !hide[i]\" src=\"https://img.icons8.com/small/16/000000/menu-2.png\">\n          <div class=\"extra-buttons\"  [hidden]=\"!hide[i]\">\n            <img class=\"download\" src=\"https://img.icons8.com/metro/26/000000/download-2.png\">\n            <img class=\"delete\" (click)=\"deleteEntry(i)\" src=\"https://img.icons8.com/material-rounded/26/000000/trash.png\">\n          </div>\n          </div>\n      </div>\n    </li>\n    <div class='footer'>\n    <button class=\"footer-button\"  (click)=\"addListItem()\"> {{ buttonString }}</button>\n     </div>\n\n  </ul>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.total = 3;
        this.badge = 0;
        this.hide = [];
        this.buttonString = "Load more";
        this.toAdd1 = {
            imgURL: '',
            heading: this.generateRandomString(),
            desc1: 'this is description line1',
            desc2: 'this is description line 2',
            todayDate: new Date()
        };
        this.lists = [
            {
                imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
                heading: this.generateRandomString(),
                desc1: 'this is description line1',
                desc2: 'this is description line 2',
                todayDate: new Date()
            },
            {
                imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
                heading: this.generateRandomString(),
                desc1: 'this is description line1',
                desc2: 'this is description line 2',
                todayDate: new Date()
            },
            {
                imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
                heading: this.generateRandomString(),
                desc1: 'this is description line1',
                desc2: 'this is description line 2',
                todayDate: new Date()
            },
        ];
    }
    ListComponent.prototype.generateRandomString = function () {
        var string1 = Math.random().toString(36).substring(9);
        var string2 = Math.random().toString(36).substring(3);
        var string3 = Math.random().toString(36).substring(6);
        return (string1 + ' ' + string2 + ' ' + string3);
    };
    ListComponent.prototype.addListItem = function () {
        this.border = true;
        this.total++;
        this.badge++;
        this.lists.unshift(this.toAdd1);
    };
    ListComponent.prototype.collapse = function () {
        this.lists = [];
        this.total = 0;
        this.badge = 0;
    };
    ListComponent.prototype.deleteEntry = function (index) {
        this.lists.splice(index, 1);
        this.total--;
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/geethikatripuramallu/workspace/Angular projects/cority-codingexam/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map