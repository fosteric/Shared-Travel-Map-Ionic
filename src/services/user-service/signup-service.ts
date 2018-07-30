import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { User } from "../../model/user-model";
import { Observable } from "rxjs";

@Injectable()
export class SignupService {

    private userUrl = "http://localhost:9090/api/v1/users"

    constructor(protected httpClient: HttpClient) {
    }

    //CREATE
    createUser(user: User): Observable<User> {
      return this.httpClient
        .post<User>(this.userUrl, user)
        .catch((err: HttpErrorResponse) => {
          console.error('An error occurred: ', err.error);
          return Observable.throw(err.statusText);
        });
    }

}