import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SystemComponent } from './system/system.component';
import { HttpInterceptorBasicAuthService } from './service/http-interceptor-basic-auth.service';
import { ParameterComponent } from './system/parameter/parameter.component';
import { TypesComponent } from './system/parameter/types/types.component';
import { SystemDetailsComponent } from './system/system-details/system-details.component';
import { InstancesComponent } from './system/instances/instances.component';
import { ChartComponent } from './system/chart/chart.component';
import { ApiComponent } from './system/api/api.component';
import { UserComponent } from './system/user/user.component';
import { SideBarComponent } from './system/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    WelcomeComponent,
    SystemComponent,
    ParameterComponent,
    TypesComponent,
    SystemDetailsComponent,
    InstancesComponent,
    ChartComponent,
    ApiComponent,
    UserComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
