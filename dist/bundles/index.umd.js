(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@bomip/core'), require('ionic-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@bomip/core', 'ionic-angular'], factory) :
	(factory((global.chip = global.chip || {}, global.chip.ionic = {}),global.core,global.platformBrowser,global.core$1,global.ionicAngular));
}(this, (function (exports,core,platformBrowser,core$1,ionicAngular) { 'use strict';

var fp = require('lodash/fp');

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        console.log('AppComponent');
    }
    AppComponent = __decorate([
        core.Component({
            selector: 'app',
            template: "<app>App</app>"
        }),
        __metadata("design:paramtypes", [])
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

var BlankPage = /** @class */ (function () {
    function BlankPage() {
    }
    BlankPage = __decorate([
        core.Component({
            selector: 'ui-blank',
            template: "<p>Blank</p>"
        }),
        __metadata("design:paramtypes", [])
    ], BlankPage);
    return BlankPage;
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
