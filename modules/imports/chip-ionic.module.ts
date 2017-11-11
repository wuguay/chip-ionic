import { ModuleWithProviders, NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BomipCoreModule } from '@bomip/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app/mobile.app';

import { TodoComponent } from './todo-add.component';
import { BlankPage } from './pages/blank.page';
import { LoginPageModule } from './pages/login/login.module';

const COMPONENTS: any[] = [
  BlankPage, TodoComponent
];

const ENTRY_COMPONENTS: any[] = [
  BlankPage, TodoComponent
];

const IONIC_PROVIDERS: any[] = [
  { provide: ErrorHandler, useClass: IonicErrorHandler }
  // InAppBrowser
  // StatusBar,
  // SplashScreen
  // PhoneService,
  // PictureService
];

@NgModule({
  bootstrap: [IonicApp],
  declarations: [AppComponent, ...COMPONENTS],
  entryComponents: [AppComponent, ...ENTRY_COMPONENTS],
  imports: [
    BrowserModule,
    LoginPageModule,
    BomipCoreModule.forRoot(),
    IonicModule.forRoot(AppComponent)
  ],
  providers: [...IONIC_PROVIDERS]
})
export class ChipIonicModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChipIonicModule,
      providers: []
    };
  }
}

// declarations: [TodoComponent],
// exports: [],
// imports: [
//   CommonModule,
//   BomipCoreModule,
//   RouterModule.forChild([
//       { path: '', component: TodoComponent }
//     ])
// ]
