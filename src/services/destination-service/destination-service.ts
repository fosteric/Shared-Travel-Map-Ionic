import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../../model/destination-model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DestinationService {
  
  private destinationUrl = "http://localhost:9090/api/v1/destinations"

  constructor(private http: Http) {
  }

  //CREATE
  createDestination(body: Object): Observable<Destination> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type' : 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.destinationUrl, bodyString, options).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  //READ
  getAllDestinations() : Observable<Destination[]> {
    return this.http.get(this.destinationUrl).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDestinationById(destinationId) : Observable<Destination> {
    return this.http.get(`this.destinationUrl/${destinationId}`)
      .map(response => {
        return response.json();
      })
  }

  //UPDATE
  updateDestination(body: Object): Observable<Destination> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type' : 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.destinationUrl}/${body['id']}`, body, options).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  //DELETE
  deleteDestination(id:string): Observable<Destination> {
    return this.http.delete(`${this.destinationUrl}/${id}`).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
