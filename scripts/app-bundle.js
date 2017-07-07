define('non-singleton-class',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NonSingletonClass = (function () {
        function NonSingletonClass() {
            this.testDataItem = "This is a non-singleton class.";
        }
        return NonSingletonClass;
    }());
    exports.NonSingletonClass = NonSingletonClass;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./non-singleton-class"], function (require, exports, aurelia_framework_1, non_singleton_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(nscInjected) {
            this.nscInjected = nscInjected;
            this.testDataItem = "Hello, World!";
            this.nscInstantiated = new non_singleton_class_1.NonSingletonClass();
        }
        App = __decorate([
            aurelia_framework_1.inject(non_singleton_class_1.NonSingletonClass),
            __metadata("design:paramtypes", [non_singleton_class_1.NonSingletonClass])
        ], App);
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/component-a',["require", "exports", "aurelia-framework", "../app"], function (require, exports, aurelia_framework_1, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentA = (function () {
        function ComponentA(app) {
            this.app = app;
        }
        ComponentA = __decorate([
            aurelia_framework_1.inject(app_1.App),
            aurelia_framework_1.customElement("au-component-a"),
            __metadata("design:paramtypes", [app_1.App])
        ], ComponentA);
        return ComponentA;
    }());
    exports.ComponentA = ComponentA;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('au-components/component-b',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentB = (function () {
        function ComponentB() {
        }
        ComponentB = __decorate([
            aurelia_framework_1.customElement("au-component-b")
        ], ComponentB);
        return ComponentB;
    }());
    exports.ComponentB = ComponentB;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('au-components/component-c',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentC = (function () {
        function ComponentC() {
        }
        ComponentC = __decorate([
            aurelia_framework_1.customElement("au-component-c")
        ], ComponentC);
        return ComponentC;
    }());
    exports.ComponentC = ComponentC;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./au-components/component-a\"></require>\n\n  <au-component-a></au-component-a>\n\n  <p>${nscInjected.testDataItem}</p>\n  <p>${nscInstantiated.testDataItem}</p>\n\n</template>\n"; });
define('text!au-components/component-a.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./component-b\"></require>\n\n  <p>${app.testDataItem}</p>\n  <au-component-b></au-component-b>\n\n</template>\n"; });
define('text!au-components/component-b.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./component-c\"></require>\n\n  <p>${app.testDataItem || \"undefined\"}</p>\n  <au-component-c></au-component-c>  \n\n</template>\n"; });
define('text!au-components/component-c.html', ['module'], function(module) { module.exports = "<template>\n  \n  <p>${app.testDataItem || \"undefined\"}</p>\n  <p>*** This is the last level of nesting *** </p>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map