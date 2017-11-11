import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ui-blank',
  template: `<p>Blank</p>
    <button ion-item (click)="openPage()">
      Login
    </button>
    `
})
export class BlankPage {
  constructor(private nav: NavController) {
  }

  openPage() {
    this.nav.push('LoginPage');
  }
}
