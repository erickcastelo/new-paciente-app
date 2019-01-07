import {Injectable} from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {RESPONSE_CODES} from "../constants/app.constant";
import {Alert, AlertController} from "ionic-angular";
import "rxjs/add/operator/do";


@Injectable()
export class ResponseIntercept implements HttpInterceptor {
    private error_title: string;
    private error_message: string;
    private code = RESPONSE_CODES;
    private alert: Alert;

    constructor(private _alertCtrl: AlertController) {
    }

    private initializeAlert(): void {
        this.alert = this._alertCtrl.create({
            title: this.error_title,
            buttons: [
                {
                    text: 'ok'
                }
            ]
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({headers: req.headers.set("Accept-Language", "pt-BR")});

        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (err: HttpErrorResponse) => {
            this.handleError(err);
            this.initializeAlert();
            this.error_message = err.error[0].message;
            this.alert.setSubTitle('erro');
            this.alert.present();
        });
    }

    private handleError(err: HttpErrorResponse) {
        this.error_message = "";
        this.error_title = "";
        this.error_title = this.code[err.status];
        this.error_message = err.statusText;
    }
}
