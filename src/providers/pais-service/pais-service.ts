import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from "../base-service";
import {Pais} from "../../models/pais";

@Injectable()
export class PaisServiceProvider extends BaseService<Pais>{

    constructor(protected http: HttpClient) {
        super(http, 'pais');
    }

}
