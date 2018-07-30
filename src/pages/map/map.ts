import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('map') mapElement;
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

    this.initMap();

  }

  initMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010)

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

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
