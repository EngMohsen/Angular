export class Api {

    constructor(
        public name: string,
        public description: string,
        public url: string,
        public methodType: string,
        public requestFormat: string,
        public timeOutInterval: number,
        public requestParams: [],
        public requestHeaders: [],
        public userName: string,
        public password: string,
        public clientType: string,
        public requestBody: string,
        public response:string
    ) { }
}