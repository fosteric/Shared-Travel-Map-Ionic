import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DestinationDetailsPage } from '../destination-details/destination-details';
import { DestinationsApiProvider } from '../../providers/destinations-api/destinations-api';
import { AddDestinationPage } from '../add-destination/add-destination';

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

  public destinations: any = [];
  public destination: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public destinationApiProvider: DestinationsApiProvider,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: 'Getting destinations...'
    });

    loader.present().then(() => {
      this.getAllDestinations();
      loader.dismiss();
    });

  }

  goToDestinationDetails($event, destination){
    this.navCtrl.push(DestinationDetailsPage, destination);
  }

  getAllDestinations() {
    this.destinationApiProvider.getAllDestinations().subscribe(destinations => {
      this.destinations = destinations.json();
    })
  }

  getDestinationById() {
    let selectedDestination = this.navParams.data;
    this.destinationApiProvider.getDestinationById(selectedDestination.id).subscribe(data => {
      this.destination = data.destination;
    })
  }

  goToAddDestination() {
    this.navCtrl.push(AddDestinationPage);
  }
}
