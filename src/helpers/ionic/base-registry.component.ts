import {NavLifecycles} from "./nav/nav-lifecycles";
import {Alert, AlertController, LoadingController} from "ionic-angular";

export class BaseRegistryComponent<T> implements NavLifecycles {

    public register: any = null;
    public loading: any;
    public message: string;
    public alert: Alert;

    constructor(
        protected service,
        protected _alertCtrl: AlertController,
        protected _loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        this.afterInit();
    }

    private openLoading(): void {
        this.loading = this._loadingCtrl.create({
            content: 'Processando os dados...'
        });

        this.loading.present();

        this.alert = this._alertCtrl.create({
            title: 'Aviso',
            buttons: [
                {
                    text: 'ok'
                }
            ]
        });
    }

    protected save(): void {
        this.openLoading();
        this.service.create(this.register)
            .finally(() => {
                this.viewMessage();
            })
            .subscribe((response) => {
                this.register = response;
                console.log(response);
                this.message = 'Cadastro realizado com sucesso!!';
                this.afterSaving();
            }
        )
    }

    protected update(): void {
        this.service.update(this.register.id, this.register)
            .finally(() => {
               this.viewMessage();
            })
            .subscribe(
            () => {
                this.message = 'Alteração realizada com sucesso!!';
                this.afterSaving();
            }
        );
    }


    public saveOrUpdate(): void {
        this.beforeSaving();
        if (this.register.id) {
            this.update();
        } else {
            this.save();
        }
    }

    protected viewMessage(): void {
        if (this.message) {
            this.alert.setSubTitle(this.message);
            this.alert.present();
            this.loading.dismiss();
        } else {
            this.loading.dismiss();
        }
    }


    protected afterInit(): void {
    }

    protected beforeSaving(): void {
    }

    protected afterSaving(): void {
    }

    protected formValidators(): void {
    }

}
