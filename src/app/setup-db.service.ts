import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetupDbService {

  constructor(private _httpClient: HttpClient) { }

  setupDb(){
    return this._httpClient.get<Observable<JSON>>("localhost:2050/setupDB").subscribe(data=>{
      console.log(data)
      return data
    })
  }
}
