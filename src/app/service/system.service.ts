import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { API_URL } from '../constant/app.constants';
import { MetaData } from '../model/metaData';
import { System } from '../model/system';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  appConfig!: MetaData;
  systemName = '';
  systemEvent = new Subject<String>();
  appEvent = new Subject<MetaData>();
  systemDetails!: System;


  constructor(private http: HttpClient) {

  }

  setSystemName(systemName: string) {
    this.systemName = systemName;
    this.systemEvent.next(this.systemName);
  }

  getSystemName() {
    return this.systemName;
  }


  loadSystemDetails() {
    this.loadSystemDetailsByName(this.systemName).subscribe(
      data => {
        this.systemDetails = data;
      }
    )
    return this.systemDetails;
  }

  loadInstanceDetails(): System[] {
    if (this.systemDetails)
      return this.systemDetails.instances;
    else
      return [];
  }
  
  loadMetaData() {
    this.loadSystemConfigurationMetaData(this.systemName).subscribe(
      config => {
        console.log("in load meta data");
        this.appConfig = config;
        this.appEvent.next(this.appConfig);
        console.log(this.appConfig);
      }
    )
  }



  loadSystemNames() {
    return this.http.get<string[]>(`${API_URL}/watcher/systemNames`);
  }


  loadSystemDetailsByName(systemName: String) {
    return this.http.get<System>(`${API_URL}/watcher/systems/${systemName}`);
  }

  loadSystemConfigurationMetaData(systemName: String) {
    return this.http.get<MetaData>(`${API_URL}/watcher/systems/${systemName}/metadata`);
  }

}
