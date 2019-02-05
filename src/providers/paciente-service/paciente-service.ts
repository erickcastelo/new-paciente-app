import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BaseService} from "../base-service";
import {Paciente} from "../../models/paciente";

@Injectable()
export class PacienteServiceProvider extends BaseService<Paciente>{

    constructor(protected http: HttpClient) {
        super(http, 'paciente');
    }
}
