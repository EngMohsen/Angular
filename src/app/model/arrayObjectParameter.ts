import { Constrains, ParameterData } from "./parameters";
import { Types } from "./types";



export class ArrayParameter extends ParameterData{


    constructor(public id: number,
        public name: string,
        public description: string,
        public displayName: string,
        public arrayElementType:string,
        public type: string,
        public editable: boolean,
        public value: any,
        public constrains: Constrains,
        public requireRestart: boolean,
        public instanceVariable: boolean,
        public defaultValue: string,
        public childParameters:Types[]){
            
        super(id,name,description,displayName,
            arrayElementType,type,editable,value,constrains,requireRestart,instanceVariable,defaultValue);
    }


}