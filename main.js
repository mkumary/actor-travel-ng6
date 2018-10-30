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

/***/ "./src/app/action-buttons/action-buttons.component.css":
/*!*************************************************************!*\
  !*** ./src/app/action-buttons/action-buttons.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi1idXR0b25zL2FjdGlvbi1idXR0b25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/action-buttons/action-buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/action-buttons/action-buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button (click)=\"moveUp()\"> Up </button>\n  <button (click)=\"moveDown()\"> Down </button>\n  <button (click)=\"moveLeft()\"> LEFT </button>\n  <button (click)=\"moveRight()\"> RIGHT </button>\n  <button (click)=\"play()\"> PLAY </button>\n</div>"

/***/ }),

/***/ "./src/app/action-buttons/action-buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/action-buttons/action-buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ActionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonsComponent", function() { return ActionButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actor.service */ "./src/app/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionButtonsComponent = /** @class */ (function () {
    function ActionButtonsComponent(actorService) {
        this.actorService = actorService;
        this.moveActor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stepAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActionButtonsComponent.prototype.ngOnInit = function () { };
    ActionButtonsComponent.prototype.moveUp = function () {
        this.actorService.addSteps("up");
        this.stepAdded.emit("added");
    };
    ActionButtonsComponent.prototype.moveDown = function () {
        this.actorService.addSteps("down");
        this.stepAdded.emit("added");
    };
    ActionButtonsComponent.prototype.moveLeft = function () {
        this.actorService.addSteps("left");
        this.stepAdded.emit("added");
    };
    ActionButtonsComponent.prototype.moveRight = function () {
        this.actorService.addSteps("right");
        this.stepAdded.emit("added");
    };
    ActionButtonsComponent.prototype.play = function () {
        var steps = this.actorService.getSteps();
        this.moveActor.emit({ moveNames: steps });
        this.actorService.resetSteps();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionButtonsComponent.prototype, "moveActor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionButtonsComponent.prototype, "stepAdded", void 0);
    ActionButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-action-buttons",
            template: __webpack_require__(/*! ./action-buttons.component.html */ "./src/app/action-buttons/action-buttons.component.html"),
            styles: [__webpack_require__(/*! ./action-buttons.component.css */ "./src/app/action-buttons/action-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [_actor_service__WEBPACK_IMPORTED_MODULE_1__["ActorService"]])
    ], ActionButtonsComponent);
    return ActionButtonsComponent;
}());



/***/ }),

/***/ "./src/app/actor.service.ts":
/*!**********************************!*\
  !*** ./src/app/actor.service.ts ***!
  \**********************************/
/*! exports provided: ActorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorService", function() { return ActorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActorService = /** @class */ (function () {
    function ActorService() {
        this.steps = [];
        this.actor = {
            position: ""
        };
    }
    ActorService.prototype.getSteps = function () {
        return this.steps;
    };
    ActorService.prototype.resetSteps = function () {
        this.steps = [];
    };
    ActorService.prototype.addSteps = function (step) {
        this.steps.push(step);
        console.log(this.steps);
    };
    ActorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ActorService);
    return ActorService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-grid-size-input [size]=\"size\" (update)=\"onUpdate($event)\"></app-grid-size-input>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "luxoft-assignment";
        this.size = 6;
    }
    AppComponent.prototype.onUpdate = function (event) {
        this.size = event.size;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _grid_size_input_grid_size_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-size-input/grid-size-input.component */ "./src/app/grid-size-input/grid-size-input.component.ts");
/* harmony import */ var _action_buttons_action_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-buttons/action-buttons.component */ "./src/app/action-buttons/action-buttons.component.ts");
/* harmony import */ var _steps_list_steps_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps-list/steps-list.component */ "./src/app/steps-list/steps-list.component.ts");
/* harmony import */ var _grid_plot_grid_plot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid-plot/grid-plot.component */ "./src/app/grid-plot/grid-plot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _grid_size_input_grid_size_input_component__WEBPACK_IMPORTED_MODULE_4__["GridSizeInputComponent"], _action_buttons_action_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ActionButtonsComponent"], _steps_list_steps_list_component__WEBPACK_IMPORTED_MODULE_6__["StepsListComponent"], _grid_plot_grid_plot_component__WEBPACK_IMPORTED_MODULE_7__["GridPlotComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/grid-plot/grid-plot.component.css":
/*!***************************************************!*\
  !*** ./src/app/grid-plot/grid-plot.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  position: relative;\n}\n.actor-container {\n  position: absolute;\n}\n.actor-wrapper {\n  position: relative;\n}\n.actor {\n  position: absolute;\n  top: -36px;\n  left: 22px;\n}\ntr {\n  border: solid 1px blue;\n}\ntd {\n  border: solid 1px blue;\n  height: 50px;\n  width: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC1wbG90L2dyaWQtcGxvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0NBQ1o7QUFFRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9ncmlkLXBsb3QvZ3JpZC1wbG90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWN0b3ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmFjdG9yLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWN0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTM2cHg7XG4gIGxlZnQ6IDIycHg7XG59XG5cbnRyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmx1ZTtcbn1cbnRkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmx1ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/grid-plot/grid-plot.component.html":
/*!****************************************************!*\
  !*** ./src/app/grid-plot/grid-plot.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <table>\n    <tr *ngFor=\"let index of range\">\n      <td *ngFor=\"let index of range\"></td>\n    </tr>\n  </table>\n  <span class=\"actor-container\">\n    <span class=\"actor-wrapper\">\n      <span class=\"actor\" id=\"actor\">\n        T\n      </span>\n    </span>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/grid-plot/grid-plot.component.ts":
/*!**************************************************!*\
  !*** ./src/app/grid-plot/grid-plot.component.ts ***!
  \**************************************************/
/*! exports provided: GridPlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPlotComponent", function() { return GridPlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridPlotComponent = /** @class */ (function () {
    function GridPlotComponent() {
        this.range = new Array(this.size);
    }
    GridPlotComponent.prototype.ngOnInit = function () {
        this.range = new Array(this.size);
    };
    GridPlotComponent.prototype.ngOnChanges = function () {
        this.range = new Array(+this.size);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GridPlotComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridPlotComponent.prototype, "moveNames", void 0);
    GridPlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-grid-plot",
            template: __webpack_require__(/*! ./grid-plot.component.html */ "./src/app/grid-plot/grid-plot.component.html"),
            styles: [__webpack_require__(/*! ./grid-plot.component.css */ "./src/app/grid-plot/grid-plot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridPlotComponent);
    return GridPlotComponent;
}());



/***/ }),

/***/ "./src/app/grid-size-input/grid-size-input.component.css":
/*!***************************************************************!*\
  !*** ./src/app/grid-size-input/grid-size-input.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC1zaXplLWlucHV0L2dyaWQtc2l6ZS1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC1zaXplLWlucHV0L2dyaWQtc2l6ZS1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/grid-size-input/grid-size-input.component.html":
/*!****************************************************************!*\
  !*** ./src/app/grid-size-input/grid-size-input.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [ngModel]=\"size\" type=\"text\" (change)=\"onSizeChange($event)\">\n<!--\n    this component will recieve a method called movetarget\n-->\n<div class=\"container\">\n    <app-grid-plot [size]=\"size\" [moveNames]=\"moveName\"></app-grid-plot>\n    <app-action-buttons (stepAdded)=\"onStepAdded($event)\" (moveActor)=\"onMoveTarget($event)\"></app-action-buttons>\n    <app-steps-list [steps]=\"steps\"></app-steps-list>\n</div>"

/***/ }),

/***/ "./src/app/grid-size-input/grid-size-input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/grid-size-input/grid-size-input.component.ts ***!
  \**************************************************************/
/*! exports provided: GridSizeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSizeInputComponent", function() { return GridSizeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actor.service */ "./src/app/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridSizeInputComponent = /** @class */ (function () {
    function GridSizeInputComponent(actorService) {
        this.actorService = actorService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.steps = [];
        this.allowedMoving = true;
        this.movementStep = 56;
    }
    GridSizeInputComponent.prototype.ngOnInit = function () {
        this.steps = this.actorService.getSteps();
    };
    GridSizeInputComponent.prototype.onSizeChange = function (event) {
        this.size = event.target.value;
        this.update.emit({
            size: event.target.value
        });
    };
    GridSizeInputComponent.prototype.checkBoundary = function () {
        var element = document.getElementsByTagName("table")[0];
        var boundries = element.getBoundingClientRect();
        return boundries;
    };
    GridSizeInputComponent.prototype.onStepAdded = function () {
        this.steps = this.actorService.getSteps();
    };
    GridSizeInputComponent.prototype.onMoveTarget = function (event) {
        var _this = this;
        var boundries = this.checkBoundary();
        var moveNames = event.moveNames;
        var element = document.getElementById("actor");
        moveNames.forEach(function (moveName) {
            var elementBoundry = element.getBoundingClientRect();
            if (!_this.allowedMoving) {
                console.log("you can not move beyond this");
                return;
            }
            if (moveName === "up") {
                var top_1 = elementBoundry.top;
                top_1 = top_1 - _this.movementStep;
                if (top_1 < boundries.top) {
                    _this.allowedMoving = false;
                    console.log("you can not move beyond this");
                    return;
                }
                else {
                    top_1 = element.offsetTop - _this.movementStep;
                    element.style.top = top_1 + "px";
                }
            }
            if (moveName === "down") {
                var top_2 = elementBoundry.bottom;
                top_2 = top_2 + _this.movementStep;
                if (top_2 > boundries.bottom) {
                    _this.allowedMoving = false;
                    console.log("you can not move beyond this");
                    return;
                }
                else {
                    top_2 = element.offsetTop + _this.movementStep;
                    element.style.top = top_2 + "px";
                }
            }
            if (moveName === "left") {
                var left = elementBoundry.left;
                left = left - 50;
                if (left < boundries.left) {
                    _this.allowedMoving = false;
                    console.log("you can not move beyond this");
                    return;
                }
                else {
                    left = element.offsetLeft - _this.movementStep;
                    element.style.left = left + "px";
                }
            }
            if (moveName === "right") {
                var left = elementBoundry.right;
                left = left + 50;
                if (left > boundries.right) {
                    _this.allowedMoving = false;
                    console.log("you can not move beyond this");
                    return;
                }
                else {
                    left = element.offsetLeft + _this.movementStep;
                    element.style.left = left + "px";
                }
            }
        });
        this.steps = [];
        this.allowedMoving = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GridSizeInputComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GridSizeInputComponent.prototype, "update", void 0);
    GridSizeInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-grid-size-input",
            template: __webpack_require__(/*! ./grid-size-input.component.html */ "./src/app/grid-size-input/grid-size-input.component.html"),
            styles: [__webpack_require__(/*! ./grid-size-input.component.css */ "./src/app/grid-size-input/grid-size-input.component.css")]
        }),
        __metadata("design:paramtypes", [_actor_service__WEBPACK_IMPORTED_MODULE_1__["ActorService"]])
    ], GridSizeInputComponent);
    return GridSizeInputComponent;
}());



/***/ }),

/***/ "./src/app/steps-list/steps-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/steps-list/steps-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0ZXBzLWxpc3Qvc3RlcHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/steps-list/steps-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/steps-list/steps-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li *ngFor=\"let step of steps\">\n      {{step}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/steps-list/steps-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/steps-list/steps-list.component.ts ***!
  \****************************************************/
/*! exports provided: StepsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsListComponent", function() { return StepsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actor.service */ "./src/app/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepsListComponent = /** @class */ (function () {
    function StepsListComponent(actorService) {
        this.actorService = actorService;
    }
    StepsListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StepsListComponent.prototype, "steps", void 0);
    StepsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-steps-list",
            template: __webpack_require__(/*! ./steps-list.component.html */ "./src/app/steps-list/steps-list.component.html"),
            styles: [__webpack_require__(/*! ./steps-list.component.css */ "./src/app/steps-list/steps-list.component.css")]
        }),
        __metadata("design:paramtypes", [_actor_service__WEBPACK_IMPORTED_MODULE_1__["ActorService"]])
    ], StepsListComponent);
    return StepsListComponent;
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

module.exports = __webpack_require__(/*! /Users/manoj/Downloads/luxoft-assignment/luxoft-assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map