import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationDetailsPage } from '../destination-details/destination-details';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public destinations = [
    { id: 1, destinationType: 'past', city: 'Tokyo', country: 'Japan', month: 'Feb ', year: '2018', travelType: 'personal', favoriteThing: 'cleanliness'},
    { id: 2, destinationType: 'future', city: 'Cape Town', country: 'South Africa', month: '', year: '', travelType: 'personal', favoriteThing: ''},
    { id: 3, destinationType: 'future', city: 'London', country: 'United Kingdom', month: '', year: '', travelType: 'personal', favoriteThing: ''},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  goToDestinationDetails($event, destination){
    this.navCtrl.push(DestinationDetailsPage, destination);
  }

}
