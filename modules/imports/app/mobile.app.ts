import { Component, Injector, ViewChild } from '@angular/core';
// import {SplashScreen} from '@ionic-native/splash-screen';
// import {StatusBar} from '@ionic-native/status-bar';
import { App, Platform, Nav, UrlSerializer } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs';
import { BlankPage } from '../pages/blank.page';

const fp = require('lodash/fp');

export const homePage = 'ChipHomePage';

@Component({
  selector: 'app',
  template: `<ion-nav #nav id="nav" swipe-back-enabled="false"></ion-nav>`
})
export class AppComponent {
  @ViewChild('nav') nav: Nav;

  constructor(private platform: Platform,
    private app: App) {
    console.log('AppComponent');
  }

  ngAfterViewInit(): void {
    this.nav && this.nav.push(BlankPage);
    
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        // statusBar.styleDefault();
        // splashScreen.hide();
      }
      //Navigate to Tests
      // this.nav.push(TestsComponent);
    });
    // console.log('deep link');

  }

  ngOnDestroy() {
    // dismiss(this);
  }



}
