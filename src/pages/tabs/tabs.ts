import {Component} from '@angular/core';
import {CadastroPage} from "../cadastro/cadastro";
import {LoginPage} from "../login/login";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage{

    public tabs = [];

    constructor() {


        this.tabs = [
            { component: LoginPage.name, title: 'Login', icon: 'home'},
            { component: CadastroPage.name, title: 'Cadastro', icon: 'contacts'},
        ];
    }
}