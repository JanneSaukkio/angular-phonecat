'use strict';

class PhoneListComponent implements angular.IComponentOptions {
  controller: angular.IControllerConstructor;
  templateUrl = 'phone-list/phone-list.template.html';

  constructor() {
      this.controller = PhoneListController;
  }
}

class PhoneListController implements angular.IComponentController {
  phones: any[] = [];
  orderProp: string;

  static $inject = ['Phone'];
  constructor(private Phone: any) {
    "ngInject";
  }

  $onInit(): void {
    this.Phone.query({}, (phones) => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', new PhoneListComponent());
