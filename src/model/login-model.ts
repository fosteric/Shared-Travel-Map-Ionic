import { User } from "./user-model";

export class Login {
    constructor(
        public id : number,
        public email : string,
        public password : string,
        public user : User
    ){}
}