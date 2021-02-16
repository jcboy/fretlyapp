import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { IResponse } from '../models/response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8080';
  // authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  register(user:IUser): Observable<IResponse> {
    return this.httpClient.post<IResponse>(`${this.AUTH_SERVER}/register`,
      user).pipe( tap(
        (res: IResponse) => {
          if (res) {
            res.dataUser
          }
        })
      );
  }

  login(user:IUser): Observable<IResponse> {
    return this.httpClient.post<IResponse>(`${this.AUTH_SERVER}/login`,
      user).pipe( tap(
      (res: IResponse) => {
        if (res) {
          // this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }
}
