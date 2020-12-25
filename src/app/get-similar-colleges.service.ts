import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSimilarCollegesService {

  constructor(private http: HttpClient) { }

  getSimilarColleges(collegeId){
    return this.http.get("/similarColleges/",collegeId).subscribe(data=>{
      return data;
    })
  }
}
