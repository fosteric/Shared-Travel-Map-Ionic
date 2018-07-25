import { User } from "./user-model";

export class Profile {
    constructor(
        public id : number,
        public userName : string,
        public homeCity : string,
        public homeCountry : string,
        public description : string,
        public imagePath : string,
        public friendList : Array<Profile>,
        public user : User
    ){}
}