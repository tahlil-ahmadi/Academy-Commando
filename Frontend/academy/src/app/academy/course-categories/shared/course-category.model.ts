export class CourseCategory {
    public id:number;
    public title:string;
    public children: Array<CourseCategory>;

    constructor(id:number, title:string){
        this.id = id;
        this.title = title;
    }
}