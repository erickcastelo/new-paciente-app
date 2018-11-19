import {Component} from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../models/login-form";
import {LoginServiceProvider} from "../../providers/login-service/login-service";
import {HomePage} from "../home/home";
import {NavLifecycles} from "../../helpers/ionic/nav/nav-lifecycles";


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public loginForm: LoginForm;
    public form: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder,
        private loadingCtrl: LoadingController,
        private app: App,
        private loginService: LoginServiceProvider) {

        this.loginForm = {
            email: '',
            password: '',
            tipoPessoa: 2
        };

        this.validations();
    }

    private validations() {

        this.form = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.email
            ])],
            password: ['', Validators.required]
        });
    }

    public loggingIn(): void {

        let loading = this.loadingCtrl.create({
            content: 'Processando dados...'
        });
        loading.present();

        this.loginService.login(this.loginForm)
            .finally(() => {
                loading.dismiss();
            })
            .subscribe(result => {
                this.app.getRootNav().setRoot(HomePage);
            });
    }

}
