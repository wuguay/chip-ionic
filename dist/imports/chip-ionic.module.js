import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo-add.component';
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
        NgModule({
            declarations: [TodoComponent],
            exports: [],
            imports: [
                CommonModule,
                RouterModule.forChild([
                    { path: '', component: TodoComponent }
                ])
            ]
        })
    ], ChipIonicModule);
    return ChipIonicModule;
    var ChipIonicModule_1;
}());
export { ChipIonicModule };
//# sourceMappingURL=chip-ionic.module.js.map