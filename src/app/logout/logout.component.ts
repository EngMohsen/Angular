import { Component, OnInit } from '@angular/core';
import { LoginBasicAuthService } from '../service/login-basic-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginUserAuth : LoginBasicAuthService) { }

  ngOnInit(): void {
    this.loginUserAuth.logOutUser();
  }

}
