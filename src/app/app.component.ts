import {AfterViewChecked, Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {LoginServiceProvider} from "../providers/login-service/login-service";
import {NavLifecycles} from "../helpers/ionic/nav/nav-lifecycles";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage: any;
    public user: any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        const storage = localStorage.getItem('user');
        if (storage !== null && storage !== undefined) {
            this.rootPage = HomePage;
        } else {
            this.rootPageLogin();
        }
    }

    private rootPageLogin(): void {
        this.rootPage = TabsPage;
    }
}

