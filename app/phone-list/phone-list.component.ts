import { IComponentOptions, IComponentController, IControllerConstructor } from 'angular';
import { Phone, PhoneData } from '../core/phone/phone.service';

import * as template from './phone-list.template.html';

export class PhoneListComponent implements IComponentOptions {
  controller: IControllerConstructor;
  template: string;

  constructor() {
    this.controller = PhoneListController;
    this.template = String(template);
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
