import { Component, OnInit } from '@angular/core';
import { LoginBasicAuthService } from '../service/login-basic-auth.service';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  systemNames!: string[];

  constructor(public loginAuth: LoginBasicAuthService, private systemService: SystemService) {

  }

  ngOnInit(): void {
    if (this.loginAuth.isUserLoggedIn()) {
      this.systemService.loadSystemNames().subscribe(
        data => this.systemNames = data
      )
    }
  }
}
