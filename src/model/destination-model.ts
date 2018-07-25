import { Profile } from "./profile-model";

export class Destination {
    constructor(
        public id : number,
        public destinationState : string,
        public city : string,
        public country : string,
        public startDate : Date,
        public endDate : Date,
        public travelType : string,
        public favoriteThing : string,
        public notes : string,
        public profile : Profile
    ){}
}