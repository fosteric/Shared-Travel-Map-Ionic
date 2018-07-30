import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupService } from '../../services/user-service/signup-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../model/user-model';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm : FormGroup;
  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public signupService: SignupService, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordReEntry: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createUser() {
    this.user.firstName = this.signupForm.controls.firstName.value;
    this.user.lastName = this.signupForm.controls.lastName.value;
    this.signupService.createUser(this.user).subscribe(data => this.user = data as User,
      err => {
        console.log(err);
      })
      this.navCtrl.push(MapPage);
  }

}
