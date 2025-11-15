import * as angular from 'angular';
import { checkmarkFilter } from './checkmark/checkmark.filter';
import './phone/phone.module';

// Define the `core` module
angular.module('core', ['core.phone'])
  .filter('checkmark', checkmarkFilter);
