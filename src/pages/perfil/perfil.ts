import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-perfil',
    templateUrl: 'perfil.html',
})
export class PerfilPage {

    public user: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.photoUser();
    }

    public photoUser(): void {
        const response = JSON.parse(localStorage.getItem('user'));

        if (response !== null && response !== undefined) {
            this.user = response.user;
            this.user.foto = this.user.foto !== null ? this.user.foto : '../assets/img/photo_default.png';
        }
    }

    public eventCamera(): void {
    }
}
