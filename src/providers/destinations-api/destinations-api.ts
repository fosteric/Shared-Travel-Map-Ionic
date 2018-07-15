import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

/*
  Generated class for the DestinationsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DestinationsApiProvider {
  private baseUrl = "http://localhost:8080"

  constructor(public http: Http) {
  }

  getDestinations() {
    return new Promise(resolve =>{
      this.http.get(`${this.baseUrl}/destinations.json`).subscribe(res => resolve(res.json()));
    })
  }

}
