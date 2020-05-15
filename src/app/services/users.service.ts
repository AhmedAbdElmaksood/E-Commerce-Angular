import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _getUserUrl = "https://rad-e-commerce-api.herokuapp.com/users/user"
  private _updateUserUrl = "https://rad-e-commerce-api.herokuapp.com/users/1"

  constructor(private _httpclient: HttpClient) { }

  getUser() {
    return this._httpclient.get(this._getUserUrl);
  }

  updateUser(body) {
    return this._httpclient.put<any>(this._updateUserUrl, body);
  }
}
