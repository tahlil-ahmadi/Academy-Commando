import { required } from "@rxweb/reactive-form-validators";

export class Course {

    id:string;

    @required()
    title:string;
}