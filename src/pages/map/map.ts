import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DestinationDetailsPage } from '../destination-details/destination-details';
import { AddDestinationPage } from '../add-destination/add-destination';
import { DestinationService } from '../../services/destination-service/destination-service';

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
    public destinationService: DestinationService,
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
    this.destinationService.getAllDestinations().subscribe(destinations => this.destinations = destinations,
      err => {
      console.log(err);
    })
  }

  goToAddDestination() {
    this.navCtrl.push(AddDestinationPage);
  }

  

}
