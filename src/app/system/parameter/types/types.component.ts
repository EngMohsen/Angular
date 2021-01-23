import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ArrayParameter } from 'src/app/model/arrayObjectParameter';
import { ParameterData } from 'src/app/model/parameters';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  restartValidation!: string;

  @Input()
  forms!: FormGroup;

  @Input()
  childParams!: ArrayParameter;

  @Input()
  childName:string='';

  
  paramData: ParameterData[] = [];


  childData: ParameterData[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.childParams != null) {
      this.childParams.childParameters.forEach((child) => {
        if (child.name === this.childName) {
          this.paramData = child.parameters;
        }

      });
    }
}

getListOfData(nameList: string): ParameterData[]{
  let dataObjects:ParameterData[] = [];
  this.childParams.childParameters.forEach((child) => {
    if (child.name === nameList) {
      dataObjects= child.parameters;
    }
  })
  return dataObjects;
}

getControls(controlName: string) {
  console.log("in get Controls " + controlName);
  return (<FormArray>this.forms.get(controlName)).controls;
}

addArrayValue(paramName: string) {
  console.log(paramName);
  const newArray = (<FormArray>this.forms.get(paramName)).at(0);
  (<FormArray>this.forms.get(paramName)).push(newArray);
}
addValue(app: ParameterData) {
  console.log(app);
  if (app.type == 'ArrayInt' || app.type == 'ArrayString') {
    if (Array.isArray(app.value)) {
      app.value.push('');
    }
  }
}
checkRestart(app: ParameterData, index: number) {
  // if (app.requireRestart) {
  //   this.restartValidation = "The field " + app.name + " is changed and need server restart to be reflected";
  //   this.restartEvent.emit(this.restartValidation);
  // }
}
}
