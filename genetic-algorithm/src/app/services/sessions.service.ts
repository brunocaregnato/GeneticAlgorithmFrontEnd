import { Parameter } from '../models/parameters'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export class SessionService{

    constructor(private _httpService: HttpClient){}

    private _url = 'https://localhost:44311/api/Sessions'

    public postSession(parameters : Parameter) : Observable<any>{
        return this._httpService.post(this._url, parameters);
    }

    public postSessionWithId(id : string, parameters : Parameter) : Observable<any>{
        let url = this._url.concat('/').concat(id);
        return this._httpService.post(url, parameters);
    }
}