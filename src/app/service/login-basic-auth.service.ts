import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { API_URL } from '../constant/app.constants';
@Injectable({
  providedIn: 'root'
})
export class LoginBasicAuthService {

  constructor(private http: HttpClient) { }


  loginAuthentication(userName: string, password: number) {
    let basicAuth = 'Basic ' + window.btoa(userName + ":" + password);

    let headers = new HttpHeaders({
        Authorization:basicAuth
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/user/login`,{headers}).pipe(
      map(
        (val) => {
          console.log(val)
          sessionStorage.setItem("authenticatedUser", userName);
          sessionStorage.setItem("token", basicAuth);
        }
      )
    );
  }



  getUserAuthentication() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getToken(){
      return  sessionStorage.getItem('token');
  }



  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);

  }

  logOutUser() {
    console.log('in logout component');
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

}
export class AuthenticationBean {
  constructor(private message: string) {
  }
}