import { IComponentOptions, IComponentController, IControllerConstructor, route } from 'angular';
import { Phone, PhoneData } from '../core/phone/phone.service';

import * as template from './phone-detail.template.html';

export class PhoneDetailComponent implements IComponentOptions {
  controller: IControllerConstructor;
  template: string;

  constructor() {
    this.controller = PhoneDetailController;
    this.template = String(template);
  }
}

export class PhoneDetailController implements IComponentController {
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
