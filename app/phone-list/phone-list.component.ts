import { IAngularStatic, IComponentOptions, IComponentController, IControllerConstructor } from 'angular';
import { Phone, PhoneData } from '../core/phone/phone.service';

declare var angular: IAngularStatic;

class PhoneListComponent implements IComponentOptions {
  controller: IControllerConstructor;
  templateUrl = 'phone-list/phone-list.template.html';

  constructor() {
    this.controller = PhoneListController;
  }
}

class PhoneListController implements IComponentController {
  phones: PhoneData[] = [];
  orderProp: string;

  static $inject = ['Phone'];
  constructor(private Phone: Phone) {
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
