import * as angular from 'angular';
import { Phone } from './phone.service';

// Define the `core.phone` module
angular.module('core.phone', [])
  .service('Phone', Phone);
