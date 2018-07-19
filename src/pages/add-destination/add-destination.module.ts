import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDestinationPage } from './add-destination';
import { DestinationsApiProvider } from '../../providers/destinations-api/destinations-api';

@NgModule({
  declarations: [
    AddDestinationPage,
  ],
  imports: [
    DestinationsApiProvider,
    IonicPageModule.forChild(AddDestinationPage),
  ],
})
export class AddDestinationPageModule {}
