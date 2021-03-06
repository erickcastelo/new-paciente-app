import {HttpClient, HttpUserEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginForm} from "../../models/login-form";
import {BaseService} from "../base-service";
import {Observable} from "rxjs";
import {Paciente} from "../../models/paciente";

@Injectable()
export class LoginServiceProvider extends BaseService<LoginForm>{

    constructor(protected http: HttpClient) {
        super(http, "paciente")
    }

    public login(loginForm: LoginForm) {

        return this._http
            .post(this.urlBase + "auth/login", loginForm)
            .do((result) =>  {
                localStorage.setItem("user", JSON.stringify(result));
            })
            .map(response => response as HttpUserEvent<LoginForm>)
            .catch(ex => Observable.throw(ex));
    }
}

