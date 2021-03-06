webpackJsonp([6],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDestinationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_destination_service_destination_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDestinationPage = /** @class */ (function () {
    function AddDestinationPage(navCtrl, navParams, formBuilder, destinationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.destinationService = destinationService;
        this.profile = {
            id: 3,
            userName: "johnDoe",
            homeCity: "",
            homeCountry: "",
            description: "",
            imagePath: "",
            friendList: null,
            user: null
        };
        this.destinationForm = this.formBuilder.group({
            destinationState: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddDestinationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDestinationPage');
    };
    AddDestinationPage.prototype.createDestination = function () {
        var _this = this;
        this.destination = this.destinationForm.value;
        this.destination.profile = this.profile;
        this.destinationService.createDestination(this.destination).subscribe(function (data) { return _this.destination = data; }, function (err) {
            console.log(err);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */]);
    };
    AddDestinationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-destination',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/add-destination/add-destination.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Destination</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="destinationForm">\n        <ion-list radio-group formControlName="destinationState">\n            <ion-item>\n              <ion-label>Want to go</ion-label>\n              <ion-radio value="future"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Have been to</ion-label>\n              <ion-radio value="past"></ion-radio>\n            </ion-item>\n        </ion-list>\n\n    <ion-item>\n      <ion-label stacked>City</ion-label>\n      <ion-input formControlName="city" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Country</ion-label>\n      <ion-input formControlName="country" type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button full color="primary" style="margin-top: 20px;" \n    type="submit" [disabled]="!destinationForm.valid" (click)=createDestination()>Add</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/add-destination/add-destination.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_destination_service_destination_service__["a" /* DestinationService */]])
    ], AddDestinationPage);
    return AddDestinationPage;
}());

//# sourceMappingURL=add-destination.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DestinationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DestinationDetailsPage = /** @class */ (function () {
    function DestinationDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.destination = {};
    }
    DestinationDetailsPage.prototype.ionViewDidLoad = function () {
        this.destination = this.navParams.data;
    };
    DestinationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-destination-details',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/destination-details/destination-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ destination.city }}, {{ destination.country }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/destination-details/destination-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DestinationDetailsPage);
    return DestinationDetailsPage;
}());

//# sourceMappingURL=destination-details.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-input placeholder="Email" type="text" required #email></ion-input>\n  <ion-input placeholder="Password" type="text" required #password></ion-input>\n  <button ion-button (click)=goToProfile()>Login</button>\n  <button ion-button (click)=goToSignup()>Sign up</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button (click)=goToMap()>Map</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_signup_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, signupService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.formBuilder = formBuilder;
        this.signupForm = this.formBuilder.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            passwordReEntry: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.createUser = function () {
        var _this = this;
        this.user.firstName = this.signupForm.controls.firstName.value;
        this.user.lastName = this.signupForm.controls.lastName.value;
        this.signupService.createUser(this.user).subscribe(function (data) { return _this.user = data; }, function (err) {
            console.log(err);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="signupForm">\n    <ion-item>\n      <ion-label stacked>Username</ion-label>\n      <ion-input formControlName="userName" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>First name</ion-label>\n      <ion-input formControlName="firstName" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Last name</ion-label>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input formControlName="email" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Re-enter password</ion-label>\n      <ion-input formControlName="passwordReEntry" type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button full color="primary" style="margin-top: 20px;" \n    type="submit" [disabled]="!signupForm.valid" (click)=createUser()>Add</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service_signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupService = /** @class */ (function () {
    function SignupService(httpClient) {
        this.httpClient = httpClient;
        this.userUrl = "http://localhost:9090/api/v1/users";
    }
    SignupService.prototype.createUser = function (user) {
        return this.httpClient
            .post(this.userUrl, user)
            .catch(function (err) {
            console.error('An error occurred: ', err.error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.statusText);
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SignupService);
    return SignupService;
}());

//# sourceMappingURL=signup-service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-destination/add-destination.module": [
		681,
		5
	],
	"../pages/destination-details/destination-details.module": [
		682,
		4
	],
	"../pages/login/login.module": [
		683,
		3
	],
	"../pages/map/map.module": [
		684,
		2
	],
	"../pages/profile/profile.module": [
		685,
		1
	],
	"../pages/signup/signup.module": [
		686,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Shared Travel Map\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click)=goToLogin()>Login</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_destination_details_destination_details__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_destination_add_destination__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_destination_service_destination_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service_signup_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = {
    issuer: 'https://dev-270119.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:8100/implicit/callback',
    clientId: '0oafqd6lpsD4ECG5k0h7'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_destination_add_destination__["a" /* AddDestinationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_destination_details_destination_details__["a" /* DestinationDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-destination/add-destination.module#AddDestinationPageModule', name: 'AddDestinationPage', segment: 'add-destination', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/destination-details/destination-details.module#DestinationDetailsPageModule', name: 'DestinationDetailsPage', segment: 'destination-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_destination_add_destination__["a" /* AddDestinationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_destination_details_destination_details__["a" /* DestinationDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__services_destination_service_destination_service__["a" /* DestinationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service_signup_service__["a" /* SignupService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__destination_details_destination_details__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_destination_add_destination__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_destination_service_destination_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, destinationService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.destinationService = destinationService;
        this.loadingController = loadingController;
        this.destinations = [];
        this.destination = {};
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting destinations...'
        });
        loader.present().then(function () {
            _this.getAllDestinations();
            loader.dismiss();
        });
    };
    // initMap(){
    //   let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 15,
    //     mapTypeId: google.maps.mapTypeId
    //   }
    // }
    MapPage.prototype.goToDestinationDetails = function ($event, destination) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__destination_details_destination_details__["a" /* DestinationDetailsPage */], destination);
    };
    MapPage.prototype.getAllDestinations = function () {
        var _this = this;
        this.destinationService.getAllDestinations().subscribe(function (destinations) { return _this.destinations = destinations; }, function (err) {
            console.log(err);
        });
    };
    MapPage.prototype.goToAddDestination = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_destination_add_destination__["a" /* AddDestinationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/map/map.html"*/'<!-- \n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <div #map id="map"></div> -->\n\n  <ion-list>\n    <ion-item-sliding *ngFor = "let destination of destinations">\n      <ion-item>\n        <div>{{ destination.city }}</div>\n        <div>{{ destination.country }}</div>\n        <button ion-button (click)="goToDestinationDetails($event, destination)">Details</button>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  <button ion-button (click)=goToAddDestination()>Add Destination</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_destination_service_destination_service__["a" /* DestinationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ericf/ZCWProjects/SharedTravelMapIonicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DestinationService = /** @class */ (function () {
    function DestinationService(httpClient) {
        this.httpClient = httpClient;
        this.destinationUrl = "http://localhost:9090/api/v1/destinations";
    }
    DestinationService.prototype.createDestination = function (destination) {
        return this.httpClient
            .post(this.destinationUrl, destination)
            .catch(function (err) {
            console.error('An error occurred: ', err.error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.statusText);
        });
    };
    DestinationService.prototype.getAllDestinations = function () {
        return this.httpClient.get(this.destinationUrl)
            .catch(function (err) {
            console.error('An error occurred: ', err.error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.statusText);
        });
    };
    DestinationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DestinationService);
    return DestinationService;
}());

//# sourceMappingURL=destination-service.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map