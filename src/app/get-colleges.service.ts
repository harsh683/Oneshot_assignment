import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College } from './college';
import { map } from 'rxjs/operators';

@Injectable()
export class GetCollegesService {

  constructor( private _httpClient: HttpClient){}

  getcolleges() :Observable<any> {
    return this._httpClient.get<any>("http://localhost:2050/getColleges")
  }
}

