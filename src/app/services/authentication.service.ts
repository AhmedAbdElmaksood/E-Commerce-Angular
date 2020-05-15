import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse }    from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

private _registerUrl = "https://rad-e-commerce-api.herokuapp.com/users/register"
private _loginUrl = "https://rad-e-commerce-api.herokuapp.com/users/login"

  constructor(private _httpClient :HttpClient, private cookie : CookieService) { }

registerUser(user){
 return this._httpClient.post<any>(this._registerUrl,user)
}

loginUser(user){
  return this._httpClient.post<any>(this._loginUrl,user)
}

public isAuthenticated(): boolean {
  return this.cookie.check('token');
}
}
