import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {PaisServiceProvider} from "../../providers/pais-service/pais-service";
import {BaseRegistryComponent} from "../../helpers/ionic/base-registry.component";
import {Pais} from "../../models/pais";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends BaseRegistryComponent<Pais>{

    constructor(
        public navCtrl: NavController,
        protected alertCtrl: AlertController,
        protected loadingCtrl: LoadingController,
        private paisService: PaisServiceProvider) {
        super(paisService, alertCtrl, loadingCtrl);
    }

    protected afterInit(): void {
        this.paisService.getAll().subscribe(resuls => {
            console.log(resuls);
        });
    }
}
