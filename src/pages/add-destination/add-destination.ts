import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestinationsApiProvider } from '../../providers/destinations-api/destinations-api';

/**
 * Generated class for the AddDestinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-destination',
  templateUrl: 'add-destination.html',
})
export class AddDestinationPage {

  destinationForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private formBuilder: FormBuilder, public destinationApiProvider: DestinationsApiProvider) {
    this.destinationForm = this.formBuilder.group({
      city: [''],
      country: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDestinationPage');
  }

  createDestination() {

  }

}
