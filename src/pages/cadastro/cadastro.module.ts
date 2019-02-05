import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import {TextMaskModule} from "angular2-text-mask";

@NgModule({
    declarations: [
        CadastroPage,
    ],
    imports: [
        IonicPageModule.forChild(CadastroPage),
        TextMaskModule
    ],
    exports: [
        CadastroPage
    ]
})
export class CadastroPageModule {}
