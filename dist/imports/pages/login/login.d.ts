import { NavController } from 'ionic-angular';
export declare class LoginPage {
    navCtrl: NavController;
    account: {
        email: string;
        password: string;
    };
    private loginErrorString;
    constructor(navCtrl: NavController);
}
