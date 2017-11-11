import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        NgModule({
            declarations: [
                LoginPage,
            ],
            imports: [
                IonicPageModule.forChild(LoginPage)
            ],
            exports: [
                LoginPage
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map