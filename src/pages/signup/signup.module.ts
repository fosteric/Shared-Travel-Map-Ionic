import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { SignupService } from '../../services/user-service/signup-service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    SignupService,
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
