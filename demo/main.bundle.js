webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 137;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(148);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(level) {
        this.level = level;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.level.startGame();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: "\n    <app-player></app-player>\n    <app-obstacles [flipped]=\"false\"></app-obstacles>\n    <app-obstacles [flipped]=\"true\"></app-obstacles>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__level_service__["a" /* LevelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__level_service__["a" /* LevelService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngine_three__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_player_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__obstacles_obstacles_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__obstacle_obstacle_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__level_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { NgineMatterModule } from '@ngine/matter';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__obstacles_obstacles_component__["a" /* ObstaclesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__obstacle_obstacle_component__["a" /* ObstacleComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            // Don't forget these!
            __WEBPACK_IMPORTED_MODULE_4__ngine_core__["a" /* NgineModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngine_three__["a" /* NgineThreeModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__obstacle_obstacle_component__["a" /* ObstacleComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__level_service__["a" /* LevelService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obstacle_obstacle_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObstaclesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObstaclesComponent = (function () {
    function ObstaclesComponent(viewport, clock, resolver, camera, level) {
        this.viewport = viewport;
        this.clock = clock;
        this.resolver = resolver;
        this.camera = camera;
        this.level = level;
        this.MAX_HEIGHT = 0.4; // Maximum height of our obstacles
        this.MIN_HEIGHT = 0.05; // Minimum height of our obstacles
        this.POS_OFFSET = 100; // Spacing between obstacles
        this.MOVE_AMOUNT = 5;
        this.obstacles = [];
    }
    ObstaclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obstacleFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__obstacle_obstacle_component__["a" /* ObstacleComponent */]);
        this.level.obstacles$
            .map(function (_a) {
            var bottom = _a[0], top = _a[1];
            return (_this.flipped) ? top : bottom;
        })
            .subscribe(function (position) {
            _this.obstacles.push(_this.genObstacle(position));
            if (_this.obstacles.length > _this.level.NUM_OBSTACLES) {
                _this.obstacles.shift().destroy();
            }
        });
    };
    ObstaclesComponent.prototype.genObstacle = function (position) {
        var ref = this.obstaclesRef.createComponent(this.obstacleFactory);
        ref.instance.setType(this.getRandomObstacleColor());
        ref.instance.setHeight(position.y);
        ref.instance.setFlipped(this.flipped);
        ref.instance.setPosition(position.x);
        return ref;
    };
    ObstaclesComponent.prototype.getRandomObstacleColor = function () {
        var i = Math.floor(Math.random() * (5 + 1));
        return i;
    };
    return ObstaclesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Input */])(),
    __metadata("design:type", Boolean)
], ObstaclesComponent.prototype, "flipped", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('obstacles', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewContainerRef */]) === "function" && _a || Object)
], ObstaclesComponent.prototype, "obstaclesRef", void 0);
ObstaclesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-obstacles',
        template: "\n    <ngine-group #obstacles></ngine-group>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* ComponentFactoryResolver */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["d" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["d" /* CameraService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__level_service__["a" /* LevelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__level_service__["a" /* LevelService */]) === "function" && _f || Object])
], ObstaclesComponent);

;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=obstacles.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PlayerComponent = (function () {
    function PlayerComponent(assets, keys, viewport, clock, level, style) {
        this.assets = assets;
        this.keys = keys;
        this.viewport = viewport;
        this.clock = clock;
        this.level = level;
        this.style = style;
        this.RELATIVE_SIZE = 0.025;
        this.ACCELARATION = 0.001;
        this.MAX_VELOCITY = 0.01;
        this.GRAVITY = -0.001;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.clock.tick.subscribe(() => {
        //   this.style.position.x += 5;
        // });
        this.level.position$.subscribe(function (x) {
            _this.style.position.x = x;
        });
        this.assets
            .loadImages([{ path: '/ngine-tutorial/demo/assets/img/player.png' }])
            .subscribe(function (_a) {
            var playerImage = _a[0];
            _this.style.image = playerImage.style;
            var size = _this.viewport.relativeY(_this.RELATIVE_SIZE) /
                playerImage.data.image.height;
            _this.style.scale = _this.style.scale.setX(size).setY(size);
            _this.style.position = _this.style.position
                .setY(0)
                .setZ(5);
        });
        var acceleration$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__["Observable"].merge(this.keys.keyDown.get('space').map(function () { return _this.ACCELARATION; }), this.keys.keyUp.get('space').map(function () { return _this.GRAVITY; })).startWith(this.GRAVITY);
        var position$ = this.level.accelerateify(this.clock.tick, acceleration$, this.MAX_VELOCITY, -0.5, 0.5, 0);
        position$
            .takeUntil(this.level.gameOver$)
            .subscribe(function (position) {
            _this.style.position.y = _this.viewport.relativeY(position);
        });
        this.level.position$
            .map(function (x) { return x + _this.viewport.relativeX(0.5); })
            .withLatestFrom(position$.map(function (x) { return x + 0.5; }), this.level.obstacles$.scan(function (acc, current) {
            return acc.concat([current]).slice(_this.level.NUM_OBSTACLES * -1);
        }, []))
            .filter(function (_a) {
            var positionX = _a[0], positionY = _a[1], obstacles = _a[2];
            var matches = obstacles.filter(function (_a) {
                var bottomObstacle = _a[0], topObstacle = _a[1];
                return (positionX > bottomObstacle.x &&
                    positionX < (bottomObstacle.x + _this.level.OBSTACLE_OFFSET)) && (positionY < (bottomObstacle.y) ||
                    positionY > (topObstacle.y));
            });
            return matches.length > 0;
        })
            .subscribe(function () {
            _this.level.gameOver();
        });
    };
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-player',
        template: "",
        providers: [__WEBPACK_IMPORTED_MODULE_1__ngine_core__["l" /* SpriteStyle */]],
    }),
    __param(5, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngine_core__["m" /* StyleBinding */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["k" /* AssetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["k" /* AssetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["n" /* KeyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["n" /* KeyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__level_service__["a" /* LevelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__level_service__["a" /* LevelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["l" /* SpriteStyle */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["l" /* SpriteStyle */]) === "function" && _f || Object])
], PlayerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src__ = __webpack_require__(156);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["n"]; });

//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(149);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["n"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Rectangle; });
/* unused harmony export Circle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
var Rectangle = (function () {
    function Rectangle(position, size) {
        this.position = position;
        this.size = size;
    }
    Rectangle.prototype.setPosition = function (position) {
        return new Rectangle(position, this.size);
    };
    Rectangle.prototype.setSize = function (size) {
        return new Rectangle(this.position, size);
    };
    Rectangle.prototype.tl = function () {
        return new Vector(this.x, this.y);
    };
    Rectangle.prototype.tr = function () {
        return new Vector(this.x + this.width, this.y);
    };
    Rectangle.prototype.bl = function () {
        return new Vector(this.x, this.y + this.height);
    };
    Rectangle.prototype.br = function () {
        return new Vector(this.x + this.width, this.y + this.height);
    };
    Rectangle.prototype.center = function () {
        return new Vector(this.x + this.width / 2, this.y + this.height / 2);
    };
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this.size.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this.size.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());

var Circle = (function () {
    function Circle(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;
    }
    return Circle;
}());

var Vector = (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.zero = function () {
        return new Vector(0, 0, 0);
    };
    Vector.identity = function () {
        return new Vector(1, 1, 1);
    };
    Vector.prototype.setX = function (val) {
        return new Vector(val, this.y, this.z);
    };
    Vector.prototype.setY = function (val) {
        return new Vector(this.x, val, this.z);
    };
    Vector.prototype.setZ = function (val) {
        return new Vector(this.x, this.y, val);
    };
    Vector.prototype.moveX = function (val) {
        return new Vector(this.x + val, this.y, this.z);
    };
    Vector.prototype.moveY = function (val) {
        return new Vector(this.x, this.y + val, this.z);
    };
    Vector.prototype.moveZ = function (val) {
        return new Vector(this.x, this.y, this.z + val);
    };
    Vector.prototype.translate = function (delta) {
        return new Vector(this.x + delta.x, this.y + delta.y, this.z + delta.z);
    };
    Vector.prototype.scale = function (delta) {
        if (delta instanceof Vector)
            return new Vector(this.x * delta.x, this.y * delta.y, this.z * delta.z);
        return new Vector(this.x * delta, this.y * delta, this.z & delta);
    };
    return Vector;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraType; });
var CameraType;
(function (CameraType) {
    CameraType[CameraType["ORTHO"] = 1] = "ORTHO";
})(CameraType || (CameraType = {}));
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupComponent = (function () {
    function GroupComponent() {
    }
    return GroupComponent;
}());
GroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ngine-group',
        template: "<ng-content></ng-content>",
    })
], GroupComponent);

//# sourceMappingURL=group.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_component__ = __webpack_require__(152);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__group_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite_decorator__ = __webpack_require__(155);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(60);
/* unused harmony export Sprite */


var STYLE_KEYWORD = 'style';
function Sprite(config, styleKeyword) {
    if (styleKeyword === void 0) { styleKeyword = STYLE_KEYWORD; }
    return function (target) {
        // StyleBinding()(target.prototype.constructor, STYLE_KEYWORD);
        // HostBinding(sprite)
        if (!config.template) {
            config.template = '';
        }
        var styleMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__render__["a" /* getSpriteStyleMap */])(styleKeyword);
        var hostifiedStyleMap = {};
        for (var _i = 0, _a = Object.keys(styleMap); _i < _a.length; _i++) {
            var styleKey = _a[_i];
            hostifiedStyleMap["[" + styleKey + "]"] = styleMap[styleKey];
        }
        config.host = Object.assign({}, hostifiedStyleMap, config.host);
        config.providers = (config.providers || []).concat([__WEBPACK_IMPORTED_MODULE_1__render__["b" /* SpriteStyle */]]);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])(config)(target);
        return target;
    };
}
;
//# sourceMappingURL=sprite.decorator.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngine_module__ = __webpack_require__(161);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ngine_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render__ = __webpack_require__(60);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__render__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__render__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__decorators__ = __webpack_require__(154);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__middleware__["c"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineMiddlewareAssetFactory; });
var NgineMiddlewareAssetFactory = (function () {
    function NgineMiddlewareAssetFactory() {
    }
    return NgineMiddlewareAssetFactory;
}());

;
//# sourceMappingURL=asset.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CAMERA_CLASS; });

var CAMERA_CLASS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* OpaqueToken */]('ngine.cameraClass');
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineMiddlewarePhysics; });
/* unused harmony export Body */
/* unused harmony export CollisionGroup */

var NgineMiddlewarePhysics = (function () {
    function NgineMiddlewarePhysics() {
    }
    return NgineMiddlewarePhysics;
}());

var Body = (function () {
    function Body() {
    }
    return Body;
}());

var CollisionGroup = (function () {
    function CollisionGroup() {
        this.collision$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_rx__["Observable"]();
    }
    return CollisionGroup;
}());

;
// export abstract class NgineMiddlewareBody {
//   abstract getNativeBody(): any;
//   abstract setVelocity(velocity: Vector): void;
//   abstract translate(translation: Vector): void;
//   abstract addCollisionGroup(group: NgineMiddlewareCollisionGroup): void;
//   abstract removeCollisionGroup(group: NgineMiddlewareCollisionGroup): void;
// }
// // public collision$: Subject<Body[]> = new Subject<Body[]>();
// export abstract class NgineMiddlewareCollisionGroup {
//   // public collisions: NgineMiddlewareCollisionGroup[] = [];
//   abstract addBody(body: NgineMiddlewareBody): void;
//   abstract getBodies(): NgineMiddlewareBody[];
// }
// export interface NgineMiddlewarePhysicsOptions {
//   drawRotation?: boolean;
//   static?: boolean;
//   friction?: number;
//   inertia?: number;
//   frictionAir?: number;
// };
//# sourceMappingURL=physics.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineRenderMiddleware; });
var NgineRenderMiddleware = (function () {
    function NgineRenderMiddleware() {
    }
    return NgineRenderMiddleware;
}());

//# sourceMappingURL=render.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__middleware__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(153);
/* unused harmony export rendererFactoryFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function rendererFactoryFactory(middleware) {
    return new __WEBPACK_IMPORTED_MODULE_1__render__["c" /* NgineRendererFactory */](middleware);
}
var NgineModule = (function () {
    function NgineModule() {
    }
    return NgineModule;
}());
NgineModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components__["a" /* GroupComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__components__["a" /* GroupComponent */],
        ],
        imports: [],
        schemas: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services__["d" /* SoundService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* AssetFactoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["f" /* AssetService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["g" /* KeyService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["h" /* MouseService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* ClockService */],
            __WEBPACK_IMPORTED_MODULE_1__render__["b" /* SpriteStyle */],
            // { provide: SpriteStyle, useFactory: () => new SpriteStyle() },
            __WEBPACK_IMPORTED_MODULE_3__services__["i" /* PhysicsService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["j" /* AnimationService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* ViewportService */],
            // { provide: RendererFactory2, useClass: NgineRendererFactory },
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* RendererFactory2 */],
                useFactory: rendererFactoryFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_2__middleware__["a" /* NgineRenderMiddleware */]]
            },
        ]
    }),
    __metadata("design:paramtypes", [])
], NgineModule);

//# sourceMappingURL=ngine.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineElement; });


var NgineElement = (function () {
    function NgineElement(nodeName, middleware, parent) {
        this.nodeName = nodeName;
        this.middleware = middleware;
        this.parent = parent;
        this.type = 'group';
        this.children = [];
    }
    NgineElement.prototype.toString = function () {
        return '<' + this.nodeName + '>';
    };
    NgineElement.prototype.setStyle = function (style, val) {
        if (val === null || val === undefined)
            return;
        if (style === 'type') {
            this.type = val;
            this.setType('sprite');
        }
        if (this.type === 'sprite') {
            var styles = this.spriteStyles;
            var gameObject = this.sprite;
            switch (style) {
                case 'position-x':
                    styles.position.x = +val;
                    this.updatePosition();
                    break;
                case 'position-y':
                    styles.position.y = +val;
                    this.updatePosition();
                    break;
                case 'position-z':
                    styles.position.z = +val;
                    this.updatePosition();
                    break;
                case 'rotation-x':
                    styles.rotation.x = +val;
                    this.updateRotation();
                    break;
                case 'rotation-y':
                    styles.rotation.y = +val;
                    this.updateRotation();
                    break;
                case 'rotation-z':
                    styles.rotation.z = +val;
                    this.updateRotation();
                    break;
                case 'image':
                    styles.image = val;
                    gameObject.setImage(styles.image);
                    break;
                case 'width':
                    styles.scale.x = +val;
                    this.updateScale();
                    break;
                case 'height':
                    styles.scale.y = +val;
                    this.updateScale();
                    break;
                case 'depth':
                    styles.scale.z = +val;
                    this.updateScale();
                    break;
                default:
                    break;
            }
        }
    };
    NgineElement.prototype.getScale = function () {
        if (this.spriteStyles) {
            return this.spriteStyles.scale;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__common__["a" /* Vector */](1, 1, 1);
    };
    NgineElement.prototype.getPosition = function () {
        if (this.spriteStyles) {
            return this.spriteStyles.position;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__common__["a" /* Vector */](0, 0, 0);
    };
    NgineElement.prototype.getRotation = function () {
        if (this.spriteStyles) {
            return this.spriteStyles.rotation;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__common__["a" /* Vector */](0, 0, 0);
    };
    NgineElement.prototype.updatePosition = function () {
        if (this.sprite) {
            if (this.parent) {
                this.sprite.setPosition(this.getPosition(), this.parent.getPosition());
            }
            else {
                this.sprite.setPosition(this.getPosition());
            }
            this.children.forEach(function (child) {
                child.updatePosition();
            });
        }
    };
    NgineElement.prototype.updateRotation = function () {
        if (this.sprite) {
            if (this.parent) {
                this.sprite.setRotation(this.getRotation(), this.parent.getRotation());
            }
            else {
                this.sprite.setRotation(this.getRotation());
            }
            this.children.forEach(function (child) {
                child.updateRotation();
            });
        }
    };
    NgineElement.prototype.updateScale = function () {
        if (this.sprite) {
            if (this.parent) {
                this.sprite.setScale(this.getScale(), this.parent.getScale());
            }
            else {
                this.sprite.setScale(this.getScale());
            }
            this.children.forEach(function (child) {
                child.updateScale();
            });
        }
    };
    NgineElement.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    NgineElement.prototype.remove = function () {
        this.setParent(null);
        this.middleware.destroySprite(this.sprite);
    };
    NgineElement.prototype.appendChild = function (child) {
        console.log('apppppend');
        child.setParent(this);
        this.children.push(child);
    };
    NgineElement.prototype.removeChild = function (child) {
        child.remove();
        // const match = this.children.filter((x) => x === child);
        // console.log('yoooo', this.children, child);
        // if (match.length === 1) {
        //   match[0].remove();
        // }
        // this.children = this.children.filter((x) => x !== child);
    };
    NgineElement.prototype.setType = function (type) {
        if (type === 'sprite') {
            this.sprite = this.middleware.createSprite();
            this.spriteStyles = new __WEBPACK_IMPORTED_MODULE_0__styles__["b" /* SpriteStyle */]();
        }
    };
    return NgineElement;
}());

;
//# sourceMappingURL=element.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__middleware__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineRendererFactory; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgineRendererFactory = (function () {
    function NgineRendererFactory(renderMiddleware) {
        this.renderMiddleware = renderMiddleware;
        this.rendererByCompId = new Map();
        this.defaultRenderer = new NgineRenderer(renderMiddleware);
    }
    ;
    NgineRendererFactory.prototype.createRenderer = function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        var renderer = this.defaultRenderer;
        this.rendererByCompId.set(type.id, renderer);
        return renderer;
    };
    return NgineRendererFactory;
}());
NgineRendererFactory = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__middleware__["a" /* NgineRenderMiddleware */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__middleware__["a" /* NgineRenderMiddleware */]) === "function" && _a || Object])
], NgineRendererFactory);

var NgineRenderer = (function () {
    function NgineRenderer(renderMiddleware) {
        this.renderMiddleware = renderMiddleware;
        this.data = Object.create(null);
    }
    NgineRenderer.prototype.destroy = function () { };
    NgineRenderer.prototype.createElement = function (name, namespace) {
        // console.log('hello', name);
        return Object.assign(document.createElement(name), {
            ngine: new __WEBPACK_IMPORTED_MODULE_1__element__["a" /* NgineElement */](name, this.renderMiddleware),
        });
        // ngine: new NgineElement(name, this.renderMiddleware)
        // };
    };
    NgineRenderer.prototype.createComment = function (value) {
        return document.createComment(value);
    };
    NgineRenderer.prototype.createText = function (value) {
        return document.createTextNode(value);
    };
    NgineRenderer.prototype.appendChild = function (parent, newChild) {
        // console.log(parent, newChild);
        if (newChild) {
            // console.log(parent);
            parent.appendChild(newChild);
            if (newChild.ngine) {
                parent.ngine.appendChild(newChild.ngine);
            }
        }
    };
    NgineRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    NgineRenderer.prototype.removeChild = function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
            // if (parent.ngine && oldChild.ngine) {
            //   parent.ngine.removeChild(oldChild.ngine);
            // }
            if (oldChild.ngine) {
                oldChild.ngine.remove();
            }
        }
    };
    NgineRenderer.prototype.selectRootElement = function (selectorOrNode) {
        // console.log('selectRootElement - what do?', selectorOrNode);
        var el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
            selectorOrNode;
        if (!el) {
            throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
        }
        el.textContent = '';
        // return el;
        return Object.assign(el, {
            ngine: new __WEBPACK_IMPORTED_MODULE_1__element__["a" /* NgineElement */](selectorOrNode, this.renderMiddleware)
        });
    };
    NgineRenderer.prototype.parentNode = function (node) {
        // console.log(node);
        return node.parentNode;
    };
    NgineRenderer.prototype.nextSibling = function (node) {
        // console.log(node);
        return node.nextSibling;
    };
    NgineRenderer.prototype.setAttribute = function (el, name, value, namespace) {
        // if (namespace) {
        //   name = `${namespace}:${name}`;
        //   const namespaceUri = NAMESPACE_URIS[namespace];
        //   if (namespaceUri) {
        //     el.setAttributeNS(namespaceUri, name, value);
        //   } else {
        //     el.setAttribute(name, value);
        //   }
        // } else {
        //   el.setAttribute(name, value);
        // }
    };
    NgineRenderer.prototype.removeAttribute = function (el, name, namespace) {
        console.log('removeAttribute - what do?');
        // if (namespace) {
        //   const namespaceUri = NAMESPACE_URIS[namespace];
        //   if (namespaceUri) {
        //     el.removeAttributeNS(namespaceUri, name);
        //   } else {
        //     el.removeAttribute(`${namespace}:${name}`);
        //   }
        // } else {
        //   el.removeAttribute(name);
        // }
    };
    NgineRenderer.prototype.addClass = function (el, name) {
        // el.classList.add(name);
    };
    NgineRenderer.prototype.removeClass = function (el, name) {
        // el.classList.remove(name);
    };
    NgineRenderer.prototype.setStyle = function (el, style, value, flags) {
        // if (style === 'foo') {
        // console.log('what do setStyle - ', style, value, Number.isInteger(value));
        // }
        if (el.ngine) {
            el.ngine.setStyle(style, value);
        }
        // if (flags & RendererStyleFlags2.DashCase) {
        //   el.style.setProperty(
        //       style, value, !!(flags & RendererStyleFlags2.Important) ? 'important' : '');
        // } else {
        //   el.style[style] = value;
        // }
    };
    NgineRenderer.prototype.removeStyle = function (el, style, flags) {
        // console.log('what do remove - ', style);
        // el.setStyle(style, value);
        // if (flags & RendererStyleFlags2.DashCase) {
        //   el.style.removeProperty(style);
        // } else {
        //   // IE requires '' instead of null
        //   // see https://github.com/angular/angular/issues/7916
        //   el.style[style] = '';
        // }
    };
    NgineRenderer.prototype.setProperty = function (el, name, value) {
        console.log('imma set the prop');
        // checkNoSyntheticProp(name, 'property');
        // el[name] = value;
    };
    NgineRenderer.prototype.setValue = function (node, value) {
        node.nodeValue = value;
    };
    NgineRenderer.prototype.listen = function (target, event, callback) {
        return function () { return null; };
        // checkNoSyntheticProp(event, 'listener');
        // if (typeof target === 'string') {
        //   return <() => void>this.eventManager.addGlobalEventListener(
        //       target, event, decoratePreventDefault(callback));
        // }
        // return <() => void>this.eventManager.addEventListener(
        //            target, event, decoratePreventDefault(callback)) as() => void;
    };
    return NgineRenderer;
}());
var _a;
//# sourceMappingURL=renderer.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationService; });
/* unused harmony export Animation */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Creates frame-based animations.
 * `AnimationService` is available as an injectable class.
 *
 * ### Example
 * ```typescript
 * @Component({...})
 * class PlayerComponent {
 *  constructor (assets: AssetService, animation: AnimationService) {
 *    this.assets.loadImages(myFramePaths).subscribe((frames) => {
 *      const walkCycle = animation.interpolate(
 *        animation.weightEqually(frames),
 *        1000
 *      );
 *      walkCycle.play();
 *      walkCycle.frame$.subscribe((frame) => {
 *        this.style.image = frame.style;
 *      });
 *    });
 *  }
 * }
 * ```
 */
var AnimationService = (function () {
    function AnimationService() {
    }
    /**
     * Takes the given {@link Weight} objects and a millisecond duration and
     * returns an {@link Animation} class which can be used to play over those
     * objects. Optionally `loop`.
     */
    AnimationService.prototype.interpolate = function (items, duration, loop) {
        if (loop === void 0) { loop = false; }
        return new Animation(items, duration, loop);
    };
    /**
     * Helper method to create {@link Weight} objects for the given `items` which
     * are weighted equally.
     */
    AnimationService.prototype.weightEqually = function (items) {
        return items.map(function (item) { return ({
            value: item,
            weight: 1 / items.length
        }); });
    };
    return AnimationService;
}());
AnimationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AnimationService);

/**
 * Controls a frame-based animation.
 */
var Animation = (function () {
    function Animation(items, duration, loop) {
        var _this = this;
        this.items = items;
        this.duration = duration;
        this.loop = loop;
        this.pause$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Subject"]();
        this.stop$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Subject"]();
        this.startFrame$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Subject"]();
        var frameTimingsFactory = function (startFrame) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
                .from(_this.items)
                .skip(startFrame)
                .concatMap(function (item) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
                    .interval(item.weight * _this.duration)
                    .first()
                    .map(function () { return item.value; });
            });
        };
        var loopFrameTimings = this.startFrame$.startWith(0)
            .switchMap(function (startFrame) { return frameTimingsFactory(startFrame).concat(frameTimingsFactory(0).repeat()); });
        this.frame$ = this.pause$
            .switchMap(function (isPaused) { return isPaused ? __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].never() : loopFrameTimings; });
    }
    /**
     * Tell `frame$` to begin emitting frames.
     */
    Animation.prototype.play = function () {
        this.pause$.next(false);
    };
    /**
     * Tell `frame$` to stop emitting frames (does not change the current frame).
     */
    Animation.prototype.pause = function () {
        this.pause$.next(true);
    };
    /**
     * Tell `frame$` to stop emitting frames and reset the current frame to 0.
     */
    Animation.prototype.stop = function () {
        this.stop$.next(true);
        this.startFrame$.next(0);
        this.pause$.next(true);
    };
    /**
     * Tell `frame$` to jump to the given `frame` number.
     */
    Animation.prototype.setFrame = function (frame) {
        this.startFrame$.next(frame);
    };
    return Animation;
}());

//# sourceMappingURL=animation.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sound_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AssetFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Loads and caches in game assets (sounds/image).
 * `AssetService` is available as an injectable class. It's 'load' methods
 * return Observables which can be subscribed to.
 *
 * ### Example
 * ```typescript
 * @Component({...})
 * class PlayerComponent {
 *  constructor (assets: AssetService) {
 *    this.assets.loadImages([{ path: 'foo.png' }]).subscribe(([fooAsset]) => {
 *      this.style.image = fooAsset.style;
 *    });
 *  }
 * }
 * ```
 *
 * ### Example
 * ```typescript
 * @Injectable()
 * export class LevelResolver implements Resolve<any> {
 *   constructor (private assets: AssetService) {}
 *
 *   resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 *     return this.assets.loadImages([{ path: 'preloaded-asset.png' }]);
 *   }
 * }
 * ```
 */
var AssetService = (function () {
    function AssetService(http, sanitizer, assetFactory) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.assetFactory = assetFactory;
        this.cache = new Map();
        this.inProgress = new Map();
    }
    /**
     * Fetches the given array of `ImageAsset`s and places them in the asset cache
     */
    AssetService.prototype.loadImages = function (assets, useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"]
            .from(assets)
            .concatMap(function (asset) { return _this
            .loadImage(asset, useCache)
            .map(function (loadedAsset) { return ({ loadedAsset: loadedAsset, asset: asset }); }); })
            .map(function (_a) {
            var loadedAsset = _a.loadedAsset, asset = _a.asset;
            return ({
                style: _this.sanitizer.bypassSecurityTrustStyle(asset.path),
                data: loadedAsset
            });
        })
            .toArray();
    };
    /**
     * Fetches the given array of `SoundAsset`s and places them in the asset cache
     */
    AssetService.prototype.loadSounds = function (assets, useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"]
            .from(assets)
            .concatMap(function (asset) { return _this
            .loadSound(asset, useCache); })
            .toArray();
    };
    AssetService.prototype.getLoadedImageData = function (style) {
        return this.cache.get(style);
    };
    AssetService.prototype.getLoadedSoundData = function (style) {
        return this.cache.get(style);
    };
    AssetService.prototype.pathsToAssets = function (paths) {
        return paths.map(function (path) { return ({ path: path }); });
    };
    AssetService.prototype.loadImage = function (asset, useCache) {
        var _this = this;
        var cache = this.checkCache(asset, useCache);
        if (cache)
            return cache;
        var inProgress$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"]
            .from(this.http.get(asset.path, { responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* ResponseContentType */].Blob }))
            .map(function (res) { return res.blob(); })
            .flatMap(function (res) {
            var image = new Image();
            image.src = window.URL.createObjectURL(res);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"]
                .fromEvent(image, 'load')
                .map(function () { return image; });
        })
            .map(function (image) { return _this.assetFactory.createImage(asset, image); })
            .do(function (data) { _this.cache.set(asset.path, data); })
            .first()
            .share();
        this.inProgress.set(asset.path, inProgress$);
        return inProgress$;
    };
    AssetService.prototype.loadSound = function (asset, useCache) {
        var _this = this;
        var cache = this.checkCache(asset, useCache);
        if (cache)
            return cache;
        var inProgress$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"]
            .of(asset.path)
            .concatMap(function (path) {
            var sound = new Audio();
            sound.src = path;
            console.log(sound, sound.src, path);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"]
                .fromEvent(sound, 'canplay')
                .map(function () { return sound; });
        })
            .map(function (sound) { return _this.assetFactory.createSound(asset, sound); })
            .first()
            .share();
        this.inProgress.set(asset.path, inProgress$);
        return inProgress$;
    };
    AssetService.prototype.checkCache = function (asset, useCache) {
        if (this.cache.has(asset.path) && useCache) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(this.cache.get(asset.path));
        }
        if (this.inProgress.has(asset.path)) {
            return this.inProgress.get(asset.path);
        }
    };
    return AssetService;
}());
AssetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* forwardRef */])(function () { return AssetFactoryService; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, AssetFactoryService])
], AssetService);

;
;
var AssetFactoryService = (function () {
    function AssetFactoryService(factory, sounds) {
        this.factory = factory;
        this.sounds = sounds;
    }
    AssetFactoryService.prototype.createImage = function (asset, image) {
        return this.factory.createImage(asset, image);
    };
    AssetFactoryService.prototype.createSound = function (asset, sound) {
        return this.sounds.create(asset, sound);
    };
    return AssetFactoryService;
}());
AssetFactoryService = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_4__middleware__["e" /* NgineMiddlewareAssetFactory */]; }))),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_5__sound_service__["a" /* SoundService */]; }))),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__middleware__["e" /* NgineMiddlewareAssetFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__middleware__["e" /* NgineMiddlewareAssetFactory */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__sound_service__["a" /* SoundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__sound_service__["a" /* SoundService */]) === "function" && _d || Object])
], AssetFactoryService);

var _a, _b, _c, _d;
//# sourceMappingURL=asset.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Contains a `tick` stream that will emit whenever the game renders.
 * `ClockService` is available as an injectable class.
 *
 * ### Example
 * ```typescript
 * @Component({...})
 * class PlayerComponent {
 *  constructor (clock: ClockService) {
 *    clock.tick.subscribe(() =>)
 *      this.style.position.x += 1;
 *    });
 *  }
 * }
 * ```
 */
var ClockService = (function () {
    function ClockService() {
        /** Emits whenever the game renders. */
        this.tick = new __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Subject"]();
    }
    return ClockService;
}());
ClockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ClockService);

//# sourceMappingURL=clock.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keycode_lib__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Contains event streams for key events.
 * `KeyService` is available as an injectable class. It contains public
 * maps whose values are Observables which can be subscribed to.
 *
 * ### Example
 * ```typescript
 * @Component({...})
 * class PlayerComponent {
 *  constuctor (keys: KeyService) {
 *    keys.keyDown('space').subscribe() => {
 *      this.position.y += 20;
 *    });
 *  }
 * }
 */
var KeyService = (function () {
    function KeyService() {
        var _this = this;
        /**
         * Map whose values continually emit (at a fixed interval) while a
         * key is held
         */
        this.keyActive = new Map();
        /**
         * Map whose values emit once when a key is pressed
         */
        this.keyDown = new Map();
        /**
         * Map whose values emit once when a key is released
         */
        this.keyUp = new Map();
        this.opts = {
            sendRate: 5 // 60 frames per second
        };
        this.keyDown.set('any', __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].fromEvent(document, 'keydown')
            .map(function (e) { return e; }));
        this.keyUp.set('any', __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].fromEvent(document, 'keyup')
            .map(function (e) { return e; }));
        var _loop_1 = function (name) {
            var code = __WEBPACK_IMPORTED_MODULE_2__keycode_lib__["a" /* codes */][name];
            this_1.keyDown.set(name, __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].fromEvent(document, 'keydown')
                .filter(function (e) { return e.which === code; })
                .map(function (e) { return e; }));
            this_1.keyUp.set(name, __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].fromEvent(document, 'keyup')
                .filter(function (e) { return e.which === code; })
                .map(function (e) { return e; }));
            this_1.keyActive.set(name, this_1.keyDown.get(name)
                .exhaustMap(function (e) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"].interval(_this.opts.sendRate)
                .map(function (x) { return e; })
                .takeUntil(_this.keyUp.get(name)); }));
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(__WEBPACK_IMPORTED_MODULE_2__keycode_lib__["a" /* codes */]); _i < _a.length; _i++) {
            var name = _a[_i];
            _loop_1(name);
        }
    }
    return KeyService;
}());
KeyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], KeyService);

//# sourceMappingURL=key.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export names */
/* unused harmony export aliases */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return codes; });
/* unused harmony export keycode */
var keycode = {
    fromEvent: function (e) {
        var keyCode = e.which || e.keyCode || e.charCode;
        return keyCode;
    },
    fromName: function (name) {
        var foundNamedKey = codes[name.toLowerCase()];
        if (foundNamedKey) {
            return foundNamedKey;
        }
        // check aliases
        foundNamedKey = aliases[name.toLowerCase()];
        if (foundNamedKey) {
            return foundNamedKey;
        }
        // weird character?
        if (name.length === 1) {
            return name.charCodeAt(0);
        }
        return undefined;
    },
    fromCode: function (num) {
        return names[num];
    }
};
var codes = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause/break': 19,
    'caps lock': 20,
    'esc': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'insert': 45,
    'delete': 46,
    'command': 91,
    'left command': 91,
    'right command': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    'my computer': 182,
    'my calculator': 183,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    '\'': 222
};
var aliases = {
    'windows': 91,
    '⇧': 16,
    '⌥': 18,
    '⌃': 17,
    '⌘': 91,
    'ctl': 17,
    'control': 17,
    'option': 18,
    'pause': 19,
    'break': 19,
    'caps': 20,
    'return': 13,
    'escape': 27,
    'spc': 32,
    'pgup': 33,
    'pgdn': 34,
    'ins': 45,
    'del': 46,
    'cmd': 91
};
// lower case chars
for (i = 97; i < 123; i++) {
    codes[String.fromCharCode(i)] = i - 32;
}
// numbers
for (var i = 48; i < 58; i++) {
    codes[i - 48] = i;
}
// function keys
for (i = 1; i < 13; i++) {
    codes['f' + i] = i + 111;
}
// numpad keys
for (i = 0; i < 10; i++) {
    codes['numpad ' + i] = i + 96;
}
var names = {};
// Create reverse mapping
for (var i_1 in codes) {
    names[codes[i_1]] = i_1;
}
// Add aliases
for (var alias in aliases) {
    codes[alias] = aliases[alias];
}

//# sourceMappingURL=keycode.lib.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseService; });
/* unused harmony export NgineMouseButton */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Creates event streams for mouse events.
 * `MouseService` is available as an injectable class. It's methods
 * return Observables which can be subscribed to.
 *
 * ### Example
 * ```typescript
 * @Component({...})
 * class CursorComponent {
 *  constuctor (mouse: MouseService) {
 *    mouse.mouseMove().subscribe(({x, y}) => {
 *      this.style.position.x = x;
 *      this.style.position.y = y;
 *    });
 *  }
 * }
 */
var MouseService = (function () {
    function MouseService(camera) {
        this.camera = camera;
    }
    /**
     * Get an Observable representing mousedown events for the game. If
     * `absolute` is true, return the coordinates relative to the game window.
     * Otherwise, return them relative to the camera.
     */
    MouseService.prototype.mouseDown = function (absolute) {
        var _this = this;
        if (absolute === void 0) { absolute = false; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
            .fromEvent(document, 'mousedown')
            .map(function (e) { return _this.vectorify(e, absolute); })
            .map(function (_a) {
            var x = _a.x, y = _a.y;
            return ({
                x: x, y: y, button: NgineMouseButton.Left, ctrlKey: false, shiftKey: false, altKey: false,
            });
        });
    };
    /**
     * Get an Observable representing mouseup events for the game. If
     * `absolute` is true, return the coordinates relative to the game window.
     * Otherwise, return them relative to the camera.
     */
    MouseService.prototype.mouseUp = function (absolute) {
        var _this = this;
        if (absolute === void 0) { absolute = false; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
            .fromEvent(document, 'mouseup')
            .map(function (e) { return _this.vectorify(e, absolute); })
            .map(function (_a) {
            var x = _a.x, y = _a.y;
            return ({
                x: x, y: y, button: NgineMouseButton.Left, ctrlKey: false, shiftKey: false, altKey: false,
            });
        });
    };
    /**
     * Get an Observable representing mousemove events for the game. If
     * `absolute` is true, return the coordinates relative to the game window.
     * Otherwise, return them relative to the camera.
     */
    MouseService.prototype.mouseMove = function (absolute) {
        var _this = this;
        if (absolute === void 0) { absolute = false; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
            .fromEvent(document, 'mousemove')
            .map(function (e) { return _this.vectorify(e, absolute); })
            .map(function (_a) {
            var x = _a.x, y = _a.y;
            return ({
                x: x, y: y,
            });
        });
    };
    MouseService.prototype.vectorify = function (e, absolute) {
        var pos = new __WEBPACK_IMPORTED_MODULE_3__common__["a" /* Vector */](e.pageX, e.pageY);
        if (!absolute) {
            var camera = this.camera.getActive();
            var scaledPos = new __WEBPACK_IMPORTED_MODULE_3__common__["a" /* Vector */](pos.x / document.documentElement.clientWidth, pos.y / document.documentElement.clientHeight);
            var relativePos = scaledPos.scale(camera.bounds.size);
            var cameraMiddle = camera.bounds.setPosition(__WEBPACK_IMPORTED_MODULE_3__common__["a" /* Vector */].zero()).center();
            return relativePos.translate(cameraMiddle.scale(-1)).translate(camera.position);
        }
        return pos;
    };
    return MouseService;
}());
MouseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__camera_service__["a" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__camera_service__["a" /* CameraService */]) === "function" && _a || Object])
], MouseService);

/**
 * Which mouse button was pressed (for a mousedown or mouseup event)
 */
var NgineMouseButton;
(function (NgineMouseButton) {
    NgineMouseButton[NgineMouseButton["Left"] = 0] = "Left";
    NgineMouseButton[NgineMouseButton["Right"] = 1] = "Right";
    NgineMouseButton[NgineMouseButton["Middle"] = 2] = "Middle";
})(NgineMouseButton || (NgineMouseButton = {}));
;
var _a;
//# sourceMappingURL=mouse.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysicsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Manages the game's physics world.
 * `PhysicsService` is available as an injectable class.
 * ### Note
 * You must provide an Ngine physics middleware (e.g. {@link NgineThree}) in
 * your root module to use this class.
 * ```typescript
 * @NgModule({
 *  imports: [ NgineThreeModule, NgineModule ]
 * })
 * ```
 */
var PhysicsService = (function () {
    function PhysicsService(physics) {
        this.physics = physics;
    }
    /**
     * Create a physics {@link Body} with the given {@link Bounds} and
     * {@link PhysicsOptions} objects.
     */
    PhysicsService.prototype.create = function (bounds, options) {
        return this.physics.create(bounds, options);
    };
    ;
    /**
     * Remove the given  {@link Body} from the physics world.
     */
    PhysicsService.prototype.remove = function (body) {
        return this.physics.remove(body);
    };
    /**
     * Tick the physics world.
     */
    PhysicsService.prototype.update = function () {
        this.physics.update();
    };
    /**
     * Create a physics  {@link CollisionGroup}. Optionally, provide a unique name
     * to be able to retrieve this collision group using `getCollisionGroup`.
     */
    PhysicsService.prototype.createCollisionGroup = function (name) {
        return this.physics.createCollisionGroup(name);
    };
    /**
     * Remove a {@link CollisionGroup} of the given name.
     */
    PhysicsService.prototype.removeCollisionGroup = function (name) {
        this.physics.removeCollisionGroup(name);
    };
    /**
     * Get a {@link CollisionGroup} of the given name.
     */
    PhysicsService.prototype.getCollisionGroup = function (name) {
        return this.physics.getCollisionGroup(name);
    };
    return PhysicsService;
}());
PhysicsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__middleware__["b" /* NgineMiddlewarePhysics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__middleware__["b" /* NgineMiddlewarePhysics */]) === "function" && _a || Object])
], PhysicsService);

var _a;
//# sourceMappingURL=physics.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(172);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src__ = __webpack_require__(175);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["a"]; });

//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineThreeAssetFactory; });
/* unused harmony export NgineThreeImageAsset */

var NgineThreeAssetFactory = (function () {
    function NgineThreeAssetFactory() {
    }
    NgineThreeAssetFactory.prototype.createImage = function (asset, image) {
        return new NgineThreeImageAsset(asset, image);
    };
    return NgineThreeAssetFactory;
}());

var NgineThreeImageAsset = (function () {
    function NgineThreeImageAsset(asset, image) {
        this.image = image;
        this.texture = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* Texture */](image);
        this.texture.magFilter = __WEBPACK_IMPORTED_MODULE_0_three__["c" /* NearestFilter */];
        this.texture.minFilter = __WEBPACK_IMPORTED_MODULE_0_three__["c" /* NearestFilter */];
        this.texture.needsUpdate = true;
        this.material = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* SpriteMaterial */]({
            map: this.texture,
            color: 0xffffff
        });
    }
    return NgineThreeImageAsset;
}());

//# sourceMappingURL=assets.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineThreeCamera; });
/* unused harmony export THREE_CAMERAS */


var NgineThreeCamera = (function () {
    function NgineThreeCamera(bounds, type, position) {
        this.bounds = bounds;
        this.position = new __WEBPACK_IMPORTED_MODULE_0__ngine_core__["b" /* Vector */](0, 0, 0);
        this.zoom = 1;
        if (type === __WEBPACK_IMPORTED_MODULE_0__ngine_core__["i" /* CameraType */].ORTHO) {
            console.log(bounds.height, bounds.y);
            this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* OrthographicCamera */](bounds.width / -2 + bounds.x, bounds.width / 2 + bounds.x, bounds.height / 2 + bounds.y, bounds.height / -2 + bounds.y);
        }
        this.zoom = this.camera.zoom;
        if (position) {
            this.setPosition(position);
        }
    }
    NgineThreeCamera.prototype.updateBounds = function (bounds) {
        this.camera.left = bounds.width / -2 + bounds.x;
        this.camera.right = bounds.width / 2 + bounds.x;
        this.camera.top = bounds.height / 2 + bounds.y;
        this.camera.bottom = bounds.height / -2 + bounds.y;
        this.camera.updateProjectionMatrix();
    };
    NgineThreeCamera.prototype.getMiddlewareCamera = function () {
        return this.camera;
    };
    NgineThreeCamera.prototype.setPosition = function (point) {
        this.bounds = this.bounds.setPosition(point);
        this.position = this.bounds.tl().setZ(point.z);
        this.camera.position.x = this.position.x;
        this.camera.position.y = this.position.y;
        if (this.position.z)
            this.camera.position.z = this.position.z;
    };
    NgineThreeCamera.prototype.setZoom = function (zoom) {
        this.camera.zoom = zoom;
        this.camera.updateProjectionMatrix();
        this.zoom = this.camera.zoom;
    };
    return NgineThreeCamera;
}());

var THREE_CAMERAS = [__WEBPACK_IMPORTED_MODULE_0__ngine_core__["i" /* CameraType */].ORTHO];
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__three_module__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__three_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprite__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineThree; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgineThree = (function () {
    function NgineThree(camera, viewport, clock, assets, zone) {
        var _this = this;
        this.camera = camera;
        this.viewport = viewport;
        this.clock = clock;
        this.assets = assets;
        this.zone = zone;
        this.renderer = new __WEBPACK_IMPORTED_MODULE_4_three__["e" /* WebGLRenderer */]({
            antialias: false
        });
        this.scene = new __WEBPACK_IMPORTED_MODULE_4_three__["f" /* Scene */]();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.viewport.getWidth(), this.viewport.getHeight());
        document.body.appendChild(this.renderer.domElement);
        this.animate();
        window.addEventListener('resize', function () { return _this.onWindowResize(); }, false);
        this.onWindowResize();
    }
    NgineThree.prototype.createSprite = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__sprite__["a" /* NgineThreeSprite */](this.scene, this.assets);
    };
    NgineThree.prototype.destroySprite = function (sprite) {
        // console.log('got ittt');
        this.scene.remove(sprite.getMiddlewareSprite());
    };
    NgineThree.prototype.createScene = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__scene__["a" /* NgineThreeScene */]();
    };
    NgineThree.prototype.animate = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // this.meter.tick();
            window.requestAnimationFrame(function () { return _this.animate(); });
            _this.render(_this.scene, _this.camera.getActive().getMiddlewareCamera());
            _this.zone.run(function () {
                _this.clock.tick.next();
            });
        });
    };
    NgineThree.prototype.render = function (scene, camera) {
        this.renderer.clear();
        this.renderer.render(scene, camera);
    };
    NgineThree.prototype.onWindowResize = function () {
        this.camera.getActive().updateBounds(new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["j" /* Rectangle */](new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */](0, 0), 
        // new Vector(this.viewport.getWidth(), 1080)
        this.viewport.getSize()));
        this.renderer.setSize(this.viewport.getWidth(), this.viewport.getHeight());
    };
    return NgineThree;
}());
NgineThree = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["d" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["d" /* CameraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["k" /* AssetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["k" /* AssetService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* NgZone */]) === "function" && _e || Object])
], NgineThree);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=render.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineThreeScene; });

var NgineThreeScene = (function () {
    function NgineThreeScene() {
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* Scene */]();
    }
    NgineThreeScene.prototype.getMiddlewareScene = function () {
        return this.scene;
    };
    return NgineThreeScene;
}());

//# sourceMappingURL=scene.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineThreeSprite; });


var NgineThreeSprite = (function () {
    function NgineThreeSprite(scene, assets) {
        this.scene = scene;
        this.assets = assets;
        this.position = new __WEBPACK_IMPORTED_MODULE_0__ngine_core__["b" /* Vector */](0, 0, 0);
        this.scale = new __WEBPACK_IMPORTED_MODULE_0__ngine_core__["b" /* Vector */](1, 1, 1);
        this.absolute = false;
    }
    NgineThreeSprite.prototype.setPosition = function (point, parentPosition) {
        if (!this.absolute && parentPosition) {
            point = point.translate(parentPosition);
        }
        this.position = point;
        if (this.sprite) {
            this.sprite.position.set(point.x, point.y, point.z);
        }
    };
    NgineThreeSprite.prototype.setRotation = function (point, parentRotation) {
        if (!this.absolute && parentRotation) {
            point = point.translate(parentRotation);
        }
        this.rotation = point;
        if (this.sprite) {
            this.sprite.material.rotation = point.y;
            // this.sprite.rotation.set(point.x, point.y, point.z);
        }
    };
    NgineThreeSprite.prototype.setImage = function (data) {
        // console.log(data);
        var material = this.assets.getLoadedImageData(data).material;
        this.imageWidth = material.map.image.width;
        this.imageHeight = material.map.image.height;
        this.imageDepth = 1;
        if (!this.sprite) {
            this.sprite = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Sprite */](material);
            this.scene.add(this.sprite);
        }
        else {
            this.sprite.material = material;
        }
        this.sprite.scale.set(this.imageWidth, this.imageHeight, 1);
        this.setPosition(this.position);
        this.setScale(this.scale);
    };
    NgineThreeSprite.prototype.getMiddlewareSprite = function () {
        return this.sprite;
    };
    NgineThreeSprite.prototype.setScale = function (point, parentScale) {
        if (!this.absolute && parentScale) {
            point = point.scale(parentScale);
        }
        this.scale = point;
        if (this.sprite) {
            this.sprite.scale.set(this.imageWidth * this.scale.x, this.imageHeight * this.scale.y, this.imageDepth * this.scale.z);
        }
    };
    return NgineThreeSprite;
}());

//# sourceMappingURL=sprite.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__camera__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgineThreeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgineThreeModule = (function () {
    function NgineThreeModule() {
    }
    return NgineThreeModule;
}());
NgineThreeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        exports: [],
        imports: [],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__ngine_core__["f" /* NgineRenderMiddleware */], useClass: __WEBPACK_IMPORTED_MODULE_2__render__["a" /* NgineThree */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__ngine_core__["g" /* NgineMiddlewareAssetFactory */], useClass: __WEBPACK_IMPORTED_MODULE_4__assets__["a" /* NgineThreeAssetFactory */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__ngine_core__["h" /* CAMERA_CLASS */], useValue: __WEBPACK_IMPORTED_MODULE_3__camera__["a" /* NgineThreeCamera */] },
        ]
    }),
    __metadata("design:paramtypes", [])
], NgineThreeModule);

//# sourceMappingURL=three.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__camera__["NgineMiddlewareCamera"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__camera__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__physics__ = __webpack_require__(159);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__physics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(160);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__render__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asset__ = __webpack_require__(157);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__asset__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bounds__ = __webpack_require__(150);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bounds__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bounds__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera__ = __webpack_require__(151);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__camera__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngine_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LevelService = (function () {
    function LevelService(clock, camera, viewport) {
        var _this = this;
        this.clock = clock;
        this.camera = camera;
        this.viewport = viewport;
        this.INCREASE_AMOUNT = 2; // How much to increase the speed by
        this.INCREASE_EVERY = 200; // Increase speed every x moves
        // private readonly INCREASE_EVERY = 1000000000000;
        this.BASE_SPEED = 5; // Starting speed
        this.OBSTACLE_OFFSET = 100; // Spacing between obstacles
        this.NUM_OBSTACLES = Math.floor(this.viewport.getWidth() / this.OBSTACLE_OFFSET) * 2;
        this.MAX_VELOCITY = 0.05;
        this.NEXT_ACCELERATION_MIN = 10;
        this.NEXT_ACCELERATION_MAX = 40;
        this.MAX_ACCELERATION = 0.02;
        this.MIN_ACCELERATION = -0.02;
        this.MAX_GAP = 0.5;
        this.MIN_GAP = 0.3;
        this.STARTING_GAP = 0.5;
        this.START_HEIGHT = 0.5;
        this.OBSTACLE_PADDING = 0.05;
        this.gameOver$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__["Subject"]();
        var timer$ = this.clock.tick
            .scan(function (x) { return x + 1; }, 0);
        var speed$ = timer$
            .filter(function (x) { return x % _this.INCREASE_EVERY === 0; })
            .map(function (x) { return Math.floor(x / _this.INCREASE_EVERY) * _this.INCREASE_AMOUNT + _this.BASE_SPEED; })
            .startWith(this.BASE_SPEED);
        this.position$ = timer$
            .withLatestFrom(speed$)
            .scan(function (prev, _a) {
            var time = _a[0], speed = _a[1];
            return prev + speed;
        }, 0)
            .takeUntil(this.gameOver$);
        var obstaclePos$ = this.position$
            .withLatestFrom(speed$)
            .filter(function (_a) {
            var x = _a[0], speed = _a[1];
            return x % _this.OBSTACLE_OFFSET < speed;
        })
            .scan(function (x) { return x + 1; }, this.NUM_OBSTACLES)
            .map(function (obstacleNum) { return (obstacleNum - 1) * _this.OBSTACLE_OFFSET; });
        var terrainAcceleration$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__["Observable"].of(null)
            .concatMap(function () {
            return timer$
                .skip(Math.floor(_this.randomNum(_this.NEXT_ACCELERATION_MIN, _this.NEXT_ACCELERATION_MAX)))
                .first();
        })
            .repeat()
            .map(function () { return _this.randomNum(_this.MIN_ACCELERATION, _this.MAX_ACCELERATION); });
        var terrainHeight$ = this.accelerateify(obstaclePos$, terrainAcceleration$, this.MAX_VELOCITY, 0.1, 0.9, this.START_HEIGHT).startWith(this.START_HEIGHT);
        var gapHeight$ = this.accelerateify(obstaclePos$, terrainAcceleration$, this.MAX_VELOCITY, this.MIN_GAP, this.MAX_GAP, this.STARTING_GAP)
            .startWith(this.STARTING_GAP);
        var startingObstacles = Array(this.NUM_OBSTACLES).fill(0).map(function (_, i) {
            return [
                new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */](i * _this.OBSTACLE_OFFSET, _this.START_HEIGHT - _this.STARTING_GAP / 2),
                new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */](i * _this.OBSTACLE_OFFSET, _this.START_HEIGHT + _this.STARTING_GAP / 2),
            ];
        });
        this.obstacles$ = (_a = obstaclePos$
            .withLatestFrom(terrainHeight$, gapHeight$)
            .map(function (_a) {
            var obstaclePos = _a[0], terrainHeight = _a[1], gapHeight = _a[2];
            return [
                // Bottom
                new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */](obstaclePos, Math.max(terrainHeight - (gapHeight / 2), _this.OBSTACLE_PADDING)),
                // Top
                new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */](obstaclePos, Math.min(terrainHeight + (gapHeight / 2), 1 - _this.OBSTACLE_PADDING)),
            ];
        })
            .share()).startWith.apply(_a, startingObstacles);
        var _a;
    }
    LevelService.prototype.randomNum = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    LevelService.prototype.startGame = function () {
        var _this = this;
        this.position$
            .subscribe(function (position) {
            _this.camera.getActive().setPosition(new __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */](position, 0));
        });
        this.position$
            .subscribe(function (score) {
            document.getElementById('score').innerText = score;
        });
        this.gameOver$
            .subscribe(function () {
            document.getElementById('game-over').style.display = 'block';
        });
    };
    LevelService.prototype.gameOver = function () {
        this.gameOver$.next(true);
    };
    LevelService.prototype.accelerateify = function (tick$, accelerate$, maxVelocity, minPosition, maxPosition, startPos) {
        if (minPosition === void 0) { minPosition = null; }
        if (maxPosition === void 0) { maxPosition = null; }
        if (startPos === void 0) { startPos = 0; }
        var velocity$ = tick$
            .withLatestFrom(accelerate$)
            .scan(function (prev, _a) {
            var tick = _a[0], acceleration = _a[1];
            return Math.max(Math.min(prev + acceleration, maxVelocity), maxVelocity * -1);
        }, 0);
        return velocity$
            .scan(function (prev, velocity) {
            var position = prev + velocity;
            if (minPosition !== null) {
                position = Math.max(position, minPosition);
            }
            if (maxPosition !== null) {
                position = Math.min(position, maxPosition);
            }
            return position;
        }, startPos);
    };
    return LevelService;
}());
LevelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["c" /* ClockService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["d" /* CameraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["d" /* CameraService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */]) === "function" && _c || Object])
], LevelService);

var _a, _b, _c;
//# sourceMappingURL=level.service.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__styles__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__styles__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__styles__["c"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngine_core__ = __webpack_require__(15);
/* unused harmony export ObstacleColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObstacleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ObstacleColor;
(function (ObstacleColor) {
    ObstacleColor[ObstacleColor["RED"] = 0] = "RED";
    ObstacleColor[ObstacleColor["ORANGE"] = 1] = "ORANGE";
    ObstacleColor[ObstacleColor["YELLOW"] = 2] = "YELLOW";
    ObstacleColor[ObstacleColor["GREEN"] = 3] = "GREEN";
    ObstacleColor[ObstacleColor["BLUE"] = 4] = "BLUE";
    ObstacleColor[ObstacleColor["PURPLE"] = 5] = "PURPLE";
})(ObstacleColor || (ObstacleColor = {}));
;
var OBSTACLE_COLOR_TO_PATH = (_a = {},
    _a[ObstacleColor.RED] = '/ngine-tutorial/demo/assets/img/obstacle_3.png',
    _a[ObstacleColor.ORANGE] = '/ngine-tutorial/demo/assets/img/obstacle_5.png',
    _a[ObstacleColor.YELLOW] = '/ngine-tutorial/demo/assets/img/obstacle_4.png',
    _a[ObstacleColor.GREEN] = '/ngine-tutorial/demo/assets/img/obstacle_1.png',
    _a[ObstacleColor.BLUE] = '/ngine-tutorial/demo/assets/img/obstacle_2.png',
    _a[ObstacleColor.PURPLE] = '/ngine-tutorial/demo/assets/img/obstacle_6.png',
    _a);
var ObstacleComponent = (function () {
    function ObstacleComponent(style, viewport, assets) {
        this.style = style;
        this.viewport = viewport;
        this.assets = assets;
    }
    ObstacleComponent.prototype.setHeight = function (height) {
        this.height = height;
    };
    ObstacleComponent.prototype.setFlipped = function (flipped) {
        if (flipped) {
            this.style.rotation.y = Math.PI;
        }
        else {
            this.style.rotation.y = 0;
        }
        this.flipped = flipped;
    };
    ObstacleComponent.prototype.setType = function (type) {
        var _this = this;
        this.type = type;
        this.assets.loadImages([
            { path: OBSTACLE_COLOR_TO_PATH[this.type] }
        ]).subscribe(function (_a) {
            var image = _a[0];
            _this.style.image = image.style;
        });
    };
    ObstacleComponent.prototype.setPosition = function (position) {
        var _this = this;
        this.assets.loadImages([
            { path: OBSTACLE_COLOR_TO_PATH[this.type] }
        ]).subscribe(function (_a) {
            var image = _a[0];
            var pos = __WEBPACK_IMPORTED_MODULE_1__ngine_core__["b" /* Vector */].zero()
                .moveX(_this.viewport.getWidth() / -2)
                .moveX(image.data.image.width / -2)
                .moveX(position)
                .setY(0)
                .moveY(_this.viewport.getHeight() / -2)
                .moveY(_this.viewport.relativeY(_this.height))
                .setZ(0);
            if (_this.flipped) {
                pos = pos.moveY(image.data.image.height / 2);
            }
            else {
                pos = pos.moveY(image.data.image.height / -2);
            }
            _this.style.position = pos;
        });
    };
    return ObstacleComponent;
}());
ObstacleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-obstacle',
        template: "",
        providers: [__WEBPACK_IMPORTED_MODULE_1__ngine_core__["l" /* SpriteStyle */]],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngine_core__["m" /* StyleBinding */])()),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["l" /* SpriteStyle */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["l" /* SpriteStyle */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["e" /* ViewportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngine_core__["k" /* AssetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngine_core__["k" /* AssetService */]) === "function" && _d || Object])
], ObstacleComponent);

var _b, _c, _d;
var _a;
//# sourceMappingURL=obstacle.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_parameter_names__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_parameter_names___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_get_parameter_names__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_path__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(31);
/* unused harmony export Style */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpriteStyle; });
/* harmony export (immutable) */ __webpack_exports__["c"] = StyleBinding;
/* harmony export (immutable) */ __webpack_exports__["a"] = getSpriteStyleMap;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Style = (function () {
    function Style() {
        this.position = new __WEBPACK_IMPORTED_MODULE_4__common__["a" /* Vector */](0, 0, 0);
        this.type = 'group';
    }
    return Style;
}());
Style = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])()
], Style);

var SpriteStyle = (function () {
    function SpriteStyle() {
        this.position = new __WEBPACK_IMPORTED_MODULE_4__common__["a" /* Vector */](0, 0, 0);
        this.rotation = new __WEBPACK_IMPORTED_MODULE_4__common__["a" /* Vector */](0, 0, 0);
        this.scale = new __WEBPACK_IMPORTED_MODULE_4__common__["a" /* Vector */](1, 1, 1);
        // public width: number;
        // public height: number;
        // public depth: number;
        this.type = 'sprite';
    }
    return SpriteStyle;
}());
SpriteStyle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SpriteStyle);

var count = 0;
function StyleBinding() {
    return function ParamDecorator(target, key, parameterIndex) {
        var types = Reflect.getMetadata('design:paramtypes', target);
        if (types[parameterIndex] !== SpriteStyle) {
            console.log(types[parameterIndex], SpriteStyle);
            throw Error('That\'s not a SpriteStyle parameter');
        }
        var names = __WEBPACK_IMPORTED_MODULE_1_get_parameter_names__(target);
        var propertyKey = names[parameterIndex];
        var styleMap = getSpriteStyleMap(propertyKey);
        var _loop_1 = function (styleKey) {
            var getter = function () {
                return __WEBPACK_IMPORTED_MODULE_2_object_path__["get"](this, styleMap[styleKey]);
            };
            count++;
            Object.defineProperty(target.prototype, 'test' + count, {
                get: getter,
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["f" /* HostBinding */])(styleKey)(target.prototype, 'test' + count);
        };
        for (var _i = 0, _a = Object.keys(styleMap); _i < _a.length; _i++) {
            var styleKey = _a[_i];
            _loop_1(styleKey);
        }
    };
}
;
function getSpriteStyleMap(name) {
    return {
        'style.type': name + ".type",
        'style.position-x': name + ".position.x",
        'style.position-y': name + ".position.y",
        'style.position-z': name + ".position.z",
        'style.rotation-x': name + ".rotation.x",
        'style.rotation-y': name + ".rotation.y",
        'style.rotation-z': name + ".rotation.z",
        'style.image': name + ".image",
        'style.width': name + ".scale.x",
        'style.height': name + ".scale.y",
        'style.depth': name + ".scale.z",
    };
}
;
// import { Subject } from 'rxjs/rx';
// @Injectable()
// export class SpriteStyle2 {
//   public position = new Subject<Vector>();
// }
// @HostBinding('[style.position-x]')
// this.SpriteStyle2.position = Observable.of(5);
// @SpriteStyle2Binding()
// this.SpriteStyle2.position =
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewport_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Manages the cameras for the game.
 * `CameraService` is available as an injectable class.
 *
 * ### Example
 * ```typescript
 * @Component({...})
 * class PlayerComponent {
 *  constructor (camera: CameraService) {
 *    this.camera.setPosition(new Vector(5,5));
 *  }
 * }
 * ```
 */
var CameraService = (function () {
    function CameraService(cameraClass, viewport) {
        this.viewport = viewport;
        this.cameras = new Map();
        this.cameraClass = cameraClass;
        this.create('root', new __WEBPACK_IMPORTED_MODULE_1__common__["b" /* Rectangle */](new __WEBPACK_IMPORTED_MODULE_1__common__["a" /* Vector */](0, 0), new __WEBPACK_IMPORTED_MODULE_1__common__["a" /* Vector */](1920, 1080)), 
        // new Rectangle(new Vector(0, 0), this.viewport.getSize()),
        __WEBPACK_IMPORTED_MODULE_1__common__["c" /* CameraType */].ORTHO, new __WEBPACK_IMPORTED_MODULE_1__common__["a" /* Vector */](0, 0, 10));
    }
    CameraService.prototype.create = function (name, bounds, type, position) {
        var camera = new this.cameraClass(bounds, type, position);
        this.cameras.set(name, camera);
        if (!this.getActive()) {
            this.activate(camera);
        }
        return camera;
    };
    CameraService.prototype.activate = function (camera) {
        if (camera instanceof this.cameraClass) {
            this.active = camera;
        }
        else {
            this.active = this.get(name);
        }
    };
    CameraService.prototype.getActive = function () {
        return this.active;
    };
    CameraService.prototype.get = function (name) {
        return this.cameras.get(name);
    };
    return CameraService;
}());
CameraService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__middleware__["c" /* CAMERA_CLASS */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__middleware__["d" /* NgineMiddlewareCamera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__middleware__["d" /* NgineMiddlewareCamera */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__viewport_service__["a" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__viewport_service__["a" /* ViewportService */]) === "function" && _b || Object])
], CameraService);

var _a, _b;
//# sourceMappingURL=camera.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset_service__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__asset_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__asset_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_service__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__camera_service__["a"]; });
/* unused harmony reexport Camera */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_service__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__sound_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clock_service__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__clock_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__key_service__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__key_service__["a"]; });
/* unused harmony reexport KeyServiceOpts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__physics_service__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__physics_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_service__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__animation_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mouse_service__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__mouse_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viewport_service__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__viewport_service__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
/* unused harmony export SoundNode */
/* unused harmony export Mixer */
/* unused harmony export Sound */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoundService = (function () {
    function SoundService() {
        this.initMaster();
    }
    SoundService.prototype.initMaster = function () {
        this.rootContext = new AudioContext();
        // this.root = new Mixer(this.rootContext.destination, this.rootContext);
    };
    SoundService.prototype.create = function (asset, sound) {
        return new Sound(sound, this.rootContext.createMediaElementSource(sound), this.rootContext);
    };
    SoundService.prototype.playAll = function () {
        this.doAll(function (s) { return s.play(); });
    };
    SoundService.prototype.pauseAll = function () {
        this.doAll(function (s) { return s.pause(); });
    };
    SoundService.prototype.stopAll = function () {
        this.doAll(function (s) { return s.stop(); });
    };
    SoundService.prototype.doAll = function (callback) {
        var queue = [];
        queue.push(this.root);
        do {
            var soundNode = queue.pop();
            if (soundNode instanceof Sound) {
                callback(soundNode);
            }
            else if (soundNode instanceof Mixer) {
                soundNode.children.forEach(function (x) { return queue.push(x); });
            }
        } while (queue.length !== 0);
    };
    return SoundService;
}());
SoundService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SoundService);

;
var SoundNode = (function () {
    function SoundNode(source, context, opts) {
        this.source = source;
        this.context = context;
        if (opts) {
            Object.assign(this, opts);
        }
        this.initSound();
    }
    SoundNode.prototype.initSound = function () {
        // this.root.connect(this.context.destination);
        this.panNode = this.context.createStereoPanner();
        this.gainNode = this.context.createGain();
        this.panNode.pan.value = 0;
        this.gainNode.gain.value = 0.5;
        this.source.connect(this.panNode);
        this.panNode.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
        // this.gainNode.connect(this.root);
    };
    SoundNode.prototype.setVolume = function (volume) {
        if (volume < 0 || volume > 1) {
            throw new Error('Invalid volume value');
        }
        this.volume = volume;
        this.gainNode.gain.value = volume;
    };
    SoundNode.prototype.setPan = function (pan) {
        if (pan < -1 || pan > 1) {
            throw new Error('Invalid pan value');
        }
        this.pan = pan;
        this.panNode.pan.value = pan;
    };
    return SoundNode;
}());

var Mixer = (function (_super) {
    __extends(Mixer, _super);
    function Mixer(root, context, opts) {
        var _this = _super.call(this, root, context, opts) || this;
        _this.root = root;
        _this.context = context;
        if (opts) {
            Object.assign(_this, opts);
        }
        return _this;
    }
    Mixer.prototype.addChild = function (sound) {
        this.children.push(sound);
    };
    Mixer.prototype.removeChild = function (sound) {
        this.children = this.children.filter(function (x) { return x !== sound; });
    };
    return Mixer;
}(SoundNode));

var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound(element, source, context, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, source, context, opts) || this;
        _this.element = element;
        if (opts) {
            Object.assign(_this, opts);
        }
        _this.ended$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
            .fromEvent(_this.element, 'ended')
            .map(function () { return _this; });
        _this.time$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
            .fromEvent(_this.element, 'timeupdate')
            .map(function () { return _this.element.currentTime; });
        return _this;
        // this.connectSound();
    }
    Sound.prototype.connectSound = function () {
        var source = this.context.createMediaElementSource(this.element);
        source.connect(this.panNode);
    };
    Sound.prototype.play = function () {
        this.element.play();
    };
    Sound.prototype.pause = function () {
        this.element.pause();
    };
    Sound.prototype.stop = function () {
        this.pause();
        this.setTime(0);
    };
    Sound.prototype.setTime = function (secs) {
        if (secs < 0) {
            throw new Error('Invalid time value');
        }
        this.element.currentTime = secs;
    };
    return Sound;
}(SoundNode));

//# sourceMappingURL=sound.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngine_core__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewportService = (function () {
    function ViewportService() {
        var _this = this;
        this.resize$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_rx__["Observable"]
            .fromEvent(window, 'resize')
            .map(function () { return _this.getSize(); });
    }
    ViewportService.prototype.getSize = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__ngine_core__["b" /* Vector */](window.innerWidth, window.innerHeight);
    };
    ViewportService.prototype.getWidth = function () {
        return window.innerWidth;
    };
    ViewportService.prototype.getHeight = function () {
        return window.innerHeight;
    };
    ViewportService.prototype.relativeX = function (x) {
        return window.innerWidth * x;
    };
    ViewportService.prototype.relativeY = function (y) {
        return window.innerHeight * y;
    };
    return ViewportService;
}());
ViewportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ViewportService);

//# sourceMappingURL=viewport.service.js.map

/***/ })

},[509]);
//# sourceMappingURL=main.bundle.js.map