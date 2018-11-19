import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Paciente} from "../../models/paciente";
import {ConfirmPassword} from "../../helpers/validations/confirm-password";
import {Masks} from "../../helpers/masks/Masks";
import {BaseRegistryComponent} from "../../helpers/ionic/base-registry.component";
import {Utils} from "../../helpers/Utils";
import {PacienteServiceProvider} from "../../providers/paciente-service/paciente-service";

@IonicPage()
@Component({
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html',
})
export class CadastroPage extends BaseRegistryComponent<Paciente> {

    public form: FormGroup;
    public register: Paciente;
    public masks: any = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder,
        protected alertCtrl: AlertController,
        protected loadingCtrl: LoadingController,
        protected servicePaciente: PacienteServiceProvider) {

        super(servicePaciente, alertCtrl, loadingCtrl);
        this.formValidators();
        this.initializerObjeto();
    }

    protected afterInit(): void {
        this.masks = [Masks.cpf, Masks.rg, Masks.cel];
    }

    protected beforeSaving(): void {
        this.register.cpf = Utils.removeMask(this.register.cpf);
        this.register.rg = Utils.removeMask(this.register.rg);
        this.register.fone = Utils.removeMask(this.register.fone);
    }

    protected  afterSaving(): void {
        this.initializerObjeto();
    }

    private initializerObjeto() {

        this.register = {
            cpf: "",
            rg: "",
            nome: "",
            datanascimento: new Date().toISOString(),
            fone: "",
            email: "",
            foto: "",
            password: "",
            confirmPassword: "",
            cep: "",
            endereco: "",
            bairro: "",
            cidade: "",
            uf: "",
            complemento: "",
        } as Paciente;
    }

    protected formValidators(): void {
        this.form = this.fb.group({
            cpf: ['', Validators.compose([
                Validators.required
            ])],
            rg: ['', Validators.compose([
                Validators.required
            ])],
            nome: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(90)
            ])],
            datanascimento: [''],
            fone: ['', Validators.compose([
                Validators.required,
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.email,
                Validators.maxLength(60)
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {
            validator: ConfirmPassword.confirmPassword
        });
    }
}

