export class System {
    constructor(public name:string,
        public abbreviation:string,
        public description:string,
        public appDirectory:string,
        public configDirectory:string,
        public configFileType:string,
        public configFileName:string,
        public configFileExt:string,
        public libPath:string,
        public runAppUrl:string,
        public restartAppUrl:string,
        public gracefullShutDownUrl:string,
        public instances:System[],
        ){
    }
}