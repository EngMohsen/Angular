import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'src/app/constant/app.constants';
import { ArrayParameter } from 'src/app/model/arrayObjectParameter';
import { MetaData } from 'src/app/model/metaData';
import { ParameterData } from 'src/app/model/parameters';
import { Types } from 'src/app/model/types';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  restartValidation: string = 'Please enter a valid data ';

  @Input()
  paramData: ParameterData[] = [];

  appForm!: FormGroup;
  appConfig!: MetaData;

  

  constructor(private systemService: SystemService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.appForm = new FormGroup({});
    this.systemService.loadMetaData();
    this.systemService.appEvent.subscribe(
      data => {
        this.appConfig = data;
        for (let param of this.appConfig.mainParams) {
          const formC = new FormControl('');
          if (param.constrains.required) {
            formC.setValidators(Validators.required);
          }
          this.appForm.addControl(param.name, formC);
        }
        for (let param of this.appConfig.arrayPrimitiveParams) {
          const formC = new FormArray([]);
          if (param.constrains.required) {
            formC.setValidators(Validators.required);
          }
          this.appForm.addControl(param.name, formC);
        }
        this.setObjectParams();
        console.log(this.appForm);
      }
    );
  }
  setObjectParams() {
    for (let param of this.appConfig.arrayObjectParams) {
      if (param.type === 'Array') {
        const formC = new FormArray([]);
        const formG = new FormGroup({});
        this.setChildParams(formG, param);
        formC.push(formG);
        this.appForm.addControl(param.name, formC);
      } else {
        const formC = new FormGroup({});
        this.setChildParams(formC, param);
        this.appForm.addControl(param.name, formC);
      }

    }
  }
  setChildParams(formG: any, params: ArrayParameter) {
    this.buildChildFrom(formG, params.arrayElementType, params.childParameters)
  }



  buildChildFrom(formG: FormGroup, arrayElement: string, arrData: Types[]) {
    for (let type of arrData) {
      if (arrayElement === type.name) {
        for (let child of type.parameters) {
          if (child.type === 'Object') {
            const formChild = new FormGroup({});
            formG.addControl(child.name, formChild);
            this.buildChildFrom(formChild, child.arrayElementType, arrData);
            console.log(child.name);
          }
          const formC = new FormControl('');
          formG.addControl(child.name, formC);
        }
      }
    }
  }
  getListOfData(nameList: string) {
    let childd:ParameterData[] = [];
    this.appConfig.arrayObjectParams.forEach((data) => {
      data.childParameters.forEach((child) => {
        if (child.name === nameList) {
          childd=  child.parameters;
        }
      })
    })
    return childd;
  }
  checkRestart(app: ParameterData, index: number) {
    if (app.requireRestart) {
      this.restartValidation = "The field " + app.name + " is changed and need server restart to be reflected";
      // this.restartEvent.emit(this.restartValidation);
    }
  }

  getValues(app: ParameterData) {
    if (app.type == 'Object' || app.type == 'Array') {
      // for(let type of this.types){
      //   if(type.name === app.arrayElementType){
      //       return type.parameters;
      //   }
      // }
    }
  }
  getControlFormName(name: string, cont: string, i: number) {
    console.log(name + "-" + cont + "-" + i)
  }
  addValue(app: ParameterData) {
    if (app.type == 'ArrayInt' || app.type == 'ArrayString') {
      if (Array.isArray(app.value)) {
        app.value.push('');
      }
    }
  }
  addNewApp(app: ParameterData) {
    // for(let type of this.types){
    //   if(type.name === app.arrayElementType){
    //      console.log(type.parameters[0]);
    //      type.parameters.push(type.parameters[0]);
    //   }
    // }
  }
  getControls(controlName: string) {
    console.log("in get Controls " + controlName);
    return (<FormArray>this.appForm.get(controlName)).controls;
  }
  addOneMoreValue(paramName: string) {
    console.log(paramName);
    const newController = new FormControl('');
    (<FormArray>this.appForm.get(paramName)).push(newController);
  }

  addArrayValue(paramName: string) {
    console.log(paramName);
    const newArray = (<FormArray>this.appForm.get(paramName)).at(0);
    (<FormArray>this.appForm.get(paramName)).push(newArray);
  }
  onSubmit() {
    alert("button click");
    let body = JSON.stringify(this.appForm.value);
    let systemName= this.systemService.getSystemName();
    this.httpClient.post(`${API_URL}/watcher/systems/${systemName}/saveMetadata`,body).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    ).subscribe(
      (data)=>{
        console.log(data);
      }
    );
    console.log(body);
    console.log(this.appForm);
  }
}
