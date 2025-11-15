import * as angular from 'angular';
import { PhoneDetailComponent } from './phone-detail.component';

// Define the `phoneDetail` module
angular.module('phoneDetail', [
  'ngRoute',
  'core'
]).component('phoneDetail', new PhoneDetailComponent);
