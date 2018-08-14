import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DestinationDetailsPage } from '../destination-details/destination-details';
import { AddDestinationPage } from '../add-destination/add-destination';
import { DestinationService } from '../../services/destination-service/destination-service';
import { GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent, Marker, MarkerOptions } from '@ionic-native/google-maps';
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
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

  // initMap(){
  //   let latLng = new google.maps.LatLng(-34.9290, 138.6010);

  //   let mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     mapTypeId: google.maps.mapTypeId
  //   }

  // }

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
