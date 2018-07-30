import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { MapPage } from '../pages/map/map';
import { DestinationDetailsPage } from '../pages/destination-details/destination-details';
import { AddDestinationPage } from '../pages/add-destination/add-destination';
import { DestinationService } from '../services/destination-service/destination-service';
import { SignupService } from '../services/user-service/signup-service';
import { HttpClientModule } from '@angular/common/http';

const config = {
  issuer: 'https://dev-270119.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:8100/implicit/callback',
  clientId: '0oafqd6lpsD4ECG5k0h7'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    MapPage,
    AddDestinationPage,
    DestinationDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    MapPage,
    AddDestinationPage,
    DestinationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DestinationService,
    SignupService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
