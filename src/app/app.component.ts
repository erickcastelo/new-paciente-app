import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {LoginServiceProvider} from "../providers/login-service/login-service";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginService: LoginServiceProvider) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        const storage = localStorage.getItem('token');
        if (storage !== null && storage !== undefined) {
            this.loginService.authenticatedUser().subscribe(result => {
                this.rootPage = HomePage;
            }, error1 => {
                this.rootPageLogin();
            });
        } else {
            this.rootPageLogin();
        }
    }

    private rootPageLogin(): void {
        this.rootPage = TabsPage;
    }
}

