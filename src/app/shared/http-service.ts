import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { User } from "../user-list/user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  baseURL = 'https://6587514c0164db130fc9d3c8.mockapi.io/user/users';

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL);
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseURL, user);
  }

  public updateUser(user: User): Observable<User> {
    const url = `${this.baseURL}/${user.id}`;
    return this.httpClient.put<User>(url, user);
  }

  public deleteUser(userId: number): Observable<void> {
    const url = `${this.baseURL}/${userId}`;
    return this.httpClient.delete<void>(url);
  }
}
