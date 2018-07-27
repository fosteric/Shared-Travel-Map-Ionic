import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupService } from '../../services/user-service/signup-service';
import { FormGroup } from '@angular/forms';
import { User } from '../../model/user-model';
import { MapPage } from '../map/map';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  userForm : FormGroup;
  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public signupService: SignupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createUser() {
    this.user = this.userForm.value;
    this.signupService.createUser(this.user).subscribe(data => this.user = data as User,
      err => {
        console.log(err);
      })
      this.navCtrl.push(MapPage);
  }

}
