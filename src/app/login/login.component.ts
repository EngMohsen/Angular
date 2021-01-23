import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginBasicAuthService } from '../service/login-basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName: string='';
  password!: number;
  invalidLogin = false;
  errorMessage='Invalid login credentials'


  constructor(private router:Router,public  loginAuth: LoginBasicAuthService) { }


  ngOnInit(): void {
  }


  loginUser(): void {
    console.log(this.userName +"."+ this.password );
    this.loginAuth.loginAuthentication(this.userName,this.password).subscribe(
      data=>{
        this.router.navigate(['home']).then(() => {
          window.location.reload();
        });
        this.invalidLogin=false;
      },error=>{
        this.invalidLogin= true;
      })
  }


}
