import {Component, Input} from '@angular/core';
import {NavLifecycles} from "../../helpers/ionic/nav/nav-lifecycles";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage implements NavLifecycles{

    @Input() myContent: any;
    public user: any;

    constructor() {
        const response = JSON.parse(localStorage.getItem('user'));

        if (response !== null && response !== undefined) {
            this.user = response.user;
            this.user.foto = this.user.foto !== null ? this.user.foto : '../assets/img/photo_default.png';
        }
    }

    ionViewDidLoad() {

    }
}
