import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDestinationPage } from './add-destination';
import { DestinationService } from '../../services/destination-service/destination-service';

@NgModule({
  declarations: [
    AddDestinationPage,
  ],
  imports: [
    DestinationService,
    IonicPageModule.forChild(AddDestinationPage),
  ],
})
export class AddDestinationPageModule {}
