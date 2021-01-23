import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }


  loadApplicationConfiguration(fileDir:string,fileName:string,fileExt:string,fileType:string){
    const params = new HttpParams()
      .set('fileName', fileName)
      .set('fileType', fileType)
      .set('fileDir', fileDir)
      .set('fileExt', fileExt);
    return  this.http.get<Map<string,object>>('http://localhost:8080/apps',{params});
   }
  
  }