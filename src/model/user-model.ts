import { Profile } from "./profile-model";
import { Login } from "./login-model";

export class User {
    constructor(
        public id : number,
        public firstName : string,
        public lastName : string,
        public login : Login,
        public profile : Profile
    ){}
}