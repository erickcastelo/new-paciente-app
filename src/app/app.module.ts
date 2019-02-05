import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginServiceProvider} from '../providers/login-service/login-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TextMaskModule} from "angular2-text-mask";
import {IonicStorageModule} from "@ionic/storage";
import {TabsPage} from "../pages/tabs/tabs";
import {PacienteServiceProvider} from '../providers/paciente-service/paciente-service';
import {ResponseIntercept} from "../helpers/auth/response.intercept";
import {FormsModule} from "@angular/forms";
import {PaisServiceProvider} from '../providers/pais-service/pais-service';
import {MenuPageModule} from "../pages/menu/menu.module";
import {Camera} from "@ionic-native/camera/ngx";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TabsPage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TextMaskModule,
        IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
        IonicStorageModule.forRoot(),
        FormsModule,
        MenuPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TabsPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ResponseIntercept,
            multi: true
        },
        Camera,
    LoginServiceProvider,
    PacienteServiceProvider,
    PaisServiceProvider,
    ]
})
export class AppModule {}
