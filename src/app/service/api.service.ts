import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constant/app.constants';
import { Api } from '../model/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }


  loadSystemURlsBySystemName(systemName: string) {
    let params = new HttpParams();
    params =  params.append("systemName",systemName);
    return this.httpClient.get<Api[]>(`${API_URL}/apps/urls`,{params:params});
  }

}
