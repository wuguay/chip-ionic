import { Component, ViewChild } from '@angular/core';
// import {SplashScreen} from '@ionic-native/splash-screen';
// import {StatusBar} from '@ionic-native/status-bar';
import { App, Platform, Nav } from 'ionic-angular';
import { BlankPage } from '../pages/blank.page';
var fp = require('lodash/fp');
export var homePage = 'ChipHomePage';
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
        ViewChild('nav'),
        __metadata("design:type", Nav)
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app',
            template: "<ion-nav #nav id=\"nav\" swipe-back-enabled=\"false\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [Platform,
            App])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=mobile.app.js.map