import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { DestinationsApiProvider } from '../../providers/destinations-api/destinations-api';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    DestinationsApiProvider,
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}
