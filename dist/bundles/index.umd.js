(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@bomip/core'), require('ionic-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@bomip/core', 'ionic-angular'], factory) :
	(factory((global.chip = global.chip || {}, global.chip.ionic = {}),global.ng_core,global.ng_browser,global.bp_core,global.ionicAngular));
}(this, (function (exports,core,platformBrowser,core$1,ionicAngular) { 'use strict';

var BlankPage = /** @class */ (function () {
    function BlankPage(nav) {
        this.nav = nav;
    }
    BlankPage.prototype.openPage = function () {
        this.nav.push('LoginPage');
    };
    BlankPage = __decorate([
        core.Component({
            selector: 'ui-blank',
            template: "<p>Blank</p>\n    <button ion-item (click)=\"openPage()\">\n      Login\n    </button>\n    "
        }),
        __metadata("design:paramtypes", [ionicAngular.NavController])
    ], BlankPage);
    return BlankPage;
}());

// import {SplashScreen} from '@ionic-native/splash-screen';
// import {StatusBar} from '@ionic-native/status-bar';
var fp = require('lodash/fp');

var AppComponent = /** @class */ (function () {
    function AppComponent(platform, app) {
        this.platform = platform;
        this.app = app;
        console.log('AppComponent');
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.nav && this.nav.push(BlankPage);
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                // statusBar.styleDefault();
                // splashScreen.hide();
            }
            //Navigate to Tests
            // this.nav.push(TestsComponent);
        });
        // console.log('deep link');
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // dismiss(this);
    };
    __decorate([
        core.ViewChild('nav'),
        __metadata("design:type", ionicAngular.Nav)
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        core.Component({
            selector: 'app',
            template: "<ion-nav #nav id=\"nav\" swipe-back-enabled=\"false\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [ionicAngular.Platform,
            ionicAngular.App])
    ], AppComponent);
    return AppComponent;
}());

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent = __decorate([
        core.Component({
            selector: 'todo-add-module',
            template: 'todo add module'
        })
    ], TodoComponent);
    return TodoComponent;
}());

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: 'test@example.com',
            password: 'test'
        };
        console.log('LoginPage');
    }
    LoginPage = __decorate([
        ionicAngular.IonicPage(),
        core.Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [ionicAngular.NavController])
    ], LoginPage);
    return LoginPage;
}());

var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        core.NgModule({
            declarations: [
                LoginPage,
            ],
            imports: [
                ionicAngular.IonicPageModule.forChild(LoginPage)
            ],
            exports: [
                LoginPage
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

var COMPONENTS = [
    BlankPage, TodoComponent
];
var ENTRY_COMPONENTS = [
    BlankPage, TodoComponent
];
var IONIC_PROVIDERS = [
    { provide: core.ErrorHandler, useClass: ionicAngular.IonicErrorHandler }
    // InAppBrowser
    // StatusBar,
    // SplashScreen
    // PhoneService,
    // PictureService
];
var ChipIonicModule = /** @class */ (function () {
    function ChipIonicModule() {
    }
    ChipIonicModule_1 = ChipIonicModule;
    ChipIonicModule.forRoot = function () {
        return {
            ngModule: ChipIonicModule_1,
            providers: []
        };
    };
    ChipIonicModule = ChipIonicModule_1 = __decorate([
        core.NgModule({
            bootstrap: [ionicAngular.IonicApp],
            declarations: [AppComponent].concat(COMPONENTS),
            entryComponents: [AppComponent].concat(ENTRY_COMPONENTS),
            imports: [
                platformBrowser.BrowserModule,
                LoginPageModule,
                core$1.BomipCoreModule.forRoot(),
                ionicAngular.IonicModule.forRoot(AppComponent)
            ],
            providers: IONIC_PROVIDERS.slice()
        })
    ], ChipIonicModule);
    return ChipIonicModule;
    var ChipIonicModule_1;
}());

// declarations: [TodoComponent],
// exports: [],
// imports: [
//   CommonModule,
//   BomipCoreModule,
//   RouterModule.forChild([
//       { path: '', component: TodoComponent }
//     ])
// ]

exports.ChipIonicModule = ChipIonicModule;
exports.TodoComponent = TodoComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
