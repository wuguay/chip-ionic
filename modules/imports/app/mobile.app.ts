import {Component, Injector, ViewChild} from '@angular/core';
// import {SplashScreen} from '@ionic-native/splash-screen';
// import {StatusBar} from '@ionic-native/status-bar';
import {App, Platform, Nav, UrlSerializer} from 'ionic-angular';
import {Observable, Subscription} from 'rxjs';

const fp = require('lodash/fp');

export const homePage = 'ChipHomePage';

@Component({
    selector: 'app',
    template: `<app>App</app>`
})
export class AppComponent {
    constructor() {
        console.log('AppComponent');
    }

}
