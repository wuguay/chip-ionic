import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
        IonicPage(),
        Component({
            selector: 'page-login',
            template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Login</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <p>Login</p>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [NavController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map