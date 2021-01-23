import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/model/api';
import { ApiService } from 'src/app/service/api.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  public requestParams = new Map<string, string>();


  constructor(private systemService:SystemService,
    private apiService:ApiService,
    private httpClient:HttpClient) { }
  apiList:Api[]=[]
  systemName:string='';

  ngOnInit(): void {
    this.systemName = this.systemService.getSystemName();
    if(this.systemName){
      this.apiService.loadSystemURlsBySystemName(this.systemName).subscribe(
        (apiData)=>{
          this.apiList = apiData;
          console.log("-----"+this.apiList);
        }
      );
     
    }
  }

  sendRequest(i:number){
    console.log(i);
    console.log(this.requestParams);
    console.log(this.apiList[i]);
    if(this.apiList[i].requestHeaders){
      this.apiList[i].response="Recieve successful response";
    }
    console.log(this.apiList[i]);
  }



}
