(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global.chip = global.chip || {}, global.chip.ionic = {}),global.core,global.common,global.router));
}(this, (function (exports,core,common,router) { 'use strict';

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
            declarations: [TodoComponent],
            exports: [],
            imports: [
                common.CommonModule,
                router.RouterModule.forChild([
                    { path: '', component: TodoComponent }
                ])
            ]
        })
    ], ChipIonicModule);
    return ChipIonicModule;
    var ChipIonicModule_1;
}());

exports.ChipIonicModule = ChipIonicModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
