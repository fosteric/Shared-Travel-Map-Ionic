import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DestinationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destination-details',
  templateUrl: 'destination-details.html',
})
export class DestinationDetailsPage {

  public destination: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.destination = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinationDetailsPage');
  }

}
