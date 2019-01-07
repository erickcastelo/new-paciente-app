import {HttpClient, HttpHeaders, HttpParams, HttpUserEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {String} from "typescript-string-operations";
import {MODE_PRODUCTION} from "../helpers/constants/app.constant";

export class BaseService<T> {

    private port: string = '8888';
    private api: string = '/api/';
    private protocal: string = location.protocol;
    private hostname = MODE_PRODUCTION ? '192.168.10.103' : 'localhost';
    protected urlBase: string;
    protected fullUrl: string;
    protected headers = new HttpHeaders();
    protected parameters: HttpParams = new HttpParams();

    constructor(protected _http: HttpClient, path: string) {

        this.urlBase = String.Format("{0}//{1}:{2}{3}", this.protocal, this.hostname, this.port, this.api);
        this.fullUrl = String.Format("{0}{1}", this.urlBase, path);
    }

    private get token() {

        const token = localStorage.getItem('user') !== null ?
            JSON.parse(localStorage.getItem('user'))['token'] : null;

        return token;
    }

    public addParameter(key: string, value: string): void {
        this.parameters = this.parameters.append(key, value);
    }


    protected addOptions(parameters?: HttpParams): any {
        const httpOptions = {};

        if (this.token !== null) {
            this.headers = this.headers.set("Authorization", "Bearer " + this.token);
        }

        httpOptions["headers"] = this.headers;

        if (parameters) {
            httpOptions["params"] = parameters;
        }

        return httpOptions;
    }

    public getById(id: number): Observable<T> {
        return this._http
            .get<T>(String.Format("{0}{1}/", this.fullUrl, id), this.addOptions(this.parameters))
            .map(response => response as HttpUserEvent<T>)
            .catch(ex => Observable.throw(ex));
    }

    public getAll(): Observable<T[]> {
        return this._http
            .get<T[]>(this.fullUrl, this.addOptions(this.parameters))
            .map(response => response as HttpUserEvent<T[]>)
            .catch(ex => Observable.throw(ex))
    }

    public create(entity: T): Observable<T> {
        return this._http
            .post<T>(this.fullUrl, entity, this.addOptions(this.parameters))
            .map(response => response as HttpUserEvent<T>)
            .catch(ex => Observable.throw(ex))
    }

    public update(id: number | string, body: any): Observable<T> {
        return this._http
            .put<T>(this.fullUrl + id, body, this.addOptions(this.parameters))
            .map(response => response as HttpUserEvent<T>)
            .catch(ex => Observable.throw(ex))
    }
}
