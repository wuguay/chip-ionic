import { App, Platform, Nav } from 'ionic-angular';
export declare const homePage = "ChipHomePage";
export declare class AppComponent {
    private platform;
    private app;
    nav: Nav;
    constructor(platform: Platform, app: App);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
