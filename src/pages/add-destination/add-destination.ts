import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinationService } from '../../services/destination-service/destination-service';
import { Destination } from '../../model/destination-model';
import { MapPage } from '../map/map';
import { Profile } from '../../model/profile-model';

@IonicPage()
@Component({
  selector: 'page-add-destination',
  templateUrl: 'add-destination.html',
})
export class AddDestinationPage {

  destinationForm: FormGroup;
  destination: Destination;
  profile : Profile = { 
    id : 3,
    userName : "johnDoe",
    homeCity : "",
    homeCountry : "",
    description : "",
    imagePath : "",
    friendList : null,
    user : null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private formBuilder: FormBuilder, public destinationService: DestinationService) {
    this.destinationForm = this.formBuilder.group({
      destinationState: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDestinationPage');
  }

  createDestination() {
    this.destination = this.destinationForm.value;
    this.destination.profile = this.profile;
    this.destinationService.createDestination(this.destination).subscribe(data => this.destination = data as Destination,
      err => {
        console.log(err);
      })
      this.navCtrl.push(MapPage);
  }

}
