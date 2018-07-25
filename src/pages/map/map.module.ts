import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { DestinationService } from '../../services/destination-service/destination-service';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    DestinationService,
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}
