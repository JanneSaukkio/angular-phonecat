'use strict';

class PhoneDetailComponent implements angular.IComponentOptions {
  controller: angular.IControllerConstructor;
  templateUrl = 'phone-detail/phone-detail.template.html';

  constructor() {
      this.controller = PhoneDetailController;
  }
}

class PhoneDetailController implements angular.IComponentController {
  phone: any;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  constructor(private $routeParams: angular.route.IRouteParamsService, private Phone: any) {
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
