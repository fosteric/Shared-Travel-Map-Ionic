import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../../model/destination-model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DestinationService {
  
  private destinationUrl = "http://localhost:9090/api/v1/destinations"

  constructor(private httpClient: HttpClient) {
  }

  createDestination(destination: Destination): Observable<Destination> {
    return this.httpClient
      .post<Destination>(this.destinationUrl, destination)
      .catch((err: HttpErrorResponse) => {
        console.error('An error occurred: ', err.error);
        return Observable.throw(err.statusText);
      })
  }

  getAllDestinations() : Observable<Destination[]> {
    return this.httpClient.get(this.destinationUrl)
    .catch((err:HttpErrorResponse) => {
      console.error('An error occurred: ', err.error);
      return Observable.throw(err.statusText);
    });
  }

}
