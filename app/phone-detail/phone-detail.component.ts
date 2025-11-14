import { IAngularStatic, IComponentOptions, IComponentController, IControllerConstructor, route } from 'angular';
import { Phone, PhoneData } from '../core/phone/phone.service';

declare var angular: IAngularStatic;

class PhoneDetailComponent implements IComponentOptions {
  controller: IControllerConstructor;
  templateUrl = 'phone-detail/phone-detail.template.html';

  constructor() {
      this.controller = PhoneDetailController;
  }
}

class PhoneDetailController implements IComponentController {
  phone: PhoneData;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  constructor(private $routeParams: route.IRouteParamsService, private Phone: Phone) {
    "ngInject";
  }

  $onInit(): void {
    this.Phone.get({phoneId: this.$routeParams.phoneId}, (phone) => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', new PhoneDetailComponent());
