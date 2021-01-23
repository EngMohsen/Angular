import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { SystemService } from './service/system.service';
import { ApiComponent } from './system/api/api.component';
import { ChartComponent } from './system/chart/chart.component';
import { InstancesComponent } from './system/instances/instances.component';
import { ParameterComponent } from './system/parameter/parameter.component';
import { SideBarComponent } from './system/side-bar/side-bar.component';
import { SystemDetailsComponent } from './system/system-details/system-details.component';
import { SystemComponent } from './system/system.component';
import { UserComponent } from './system/user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: WelcomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "system", component: SystemComponent, canActivateChild: [RouteGaurdService], children: [
      {
        path: ":name", component: SideBarComponent, children: [
          { path: "detail", component: SystemDetailsComponent },
          { path: "servers", component: ParameterComponent },
          { path: "instances", component: InstancesComponent },
          { path: "api", component: ApiComponent },
          { path: "users", component: UserComponent },
          { path: "chart", component: ChartComponent }
        ]
      },
    ]
  },
  { path: "logout", component: LogoutComponent, canActivate: [RouteGaurdService] },
  { path: "**", component: ErrorComponent }
  //{path:"**",redirectTo:'/something'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
