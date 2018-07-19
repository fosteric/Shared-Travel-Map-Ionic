import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the DestinationsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DestinationsApiProvider {
  private destinationUrl = "http://localhost:9090/api/v1/destinations"

  constructor(private http: Http) {
  }

  getAllDestinations() {
    return this.http.get(this.destinationUrl);
  }

  getDestinationById(destinationId) : Observable<any> {
    return this.http.get(`this.destinationUrl/${destinationId}`)
      .map(response => {
        return response.json();
      })
  }

  // createDestination(destination: Destination): Observable<Destination> {
  //   return this.http.post<Destination>(this.destinationUrl, )
  // }

}
