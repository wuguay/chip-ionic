import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BomipCoreModule } from '@bomip/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app/mobile.app';
import { TodoComponent } from './todo-add.component';
import { BlankPage } from './pages/blank.page';
var COMPONENTS = [
    BlankPage, TodoComponent
];
var ENTRY_COMPONENTS = [
    BlankPage, TodoComponent
];
var IONIC_PROVIDERS = [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
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
        NgModule({
            bootstrap: [IonicApp],
            declarations: [AppComponent].concat(COMPONENTS),
            entryComponents: [AppComponent].concat(ENTRY_COMPONENTS),
            imports: [
                BrowserModule,
                BomipCoreModule.forRoot(),
                IonicModule.forRoot(AppComponent)
            ],
            providers: IONIC_PROVIDERS.slice()
        })
    ], ChipIonicModule);
    return ChipIonicModule;
    var ChipIonicModule_1;
}());
export { ChipIonicModule };
// declarations: [TodoComponent],
// exports: [],
// imports: [
//   CommonModule,
//   BomipCoreModule,
//   RouterModule.forChild([
//       { path: '', component: TodoComponent }
//     ])
// ]
//# sourceMappingURL=chip-ionic.module.js.map