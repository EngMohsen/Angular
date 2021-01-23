export class ParameterData {

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
        public defaultValue: string
    ) { }

}
export class Constrains {
    constructor(public minLength: string,
        public maxLength: string,
        public required: string) { }


}