import { ArrayParameter } from "./arrayObjectParameter";
import { ParameterData } from "./parameters";

export class MetaData{

    constructor(public mainParams:ParameterData[],
        public arrayPrimitiveParams:ParameterData[],
        public arrayObjectParams:ArrayParameter[]){
    }
}