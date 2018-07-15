import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestinationDetailsPage } from './destination-details';

@NgModule({
  declarations: [
    DestinationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DestinationDetailsPage),
  ],
})
export class DestinationDetailsPageModule {}
