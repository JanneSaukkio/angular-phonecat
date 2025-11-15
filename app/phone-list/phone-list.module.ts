import * as angular from 'angular';
import { PhoneListComponent } from './phone-list.component';

// Define the `phoneList` module
angular.module('phoneList', ['core'])
    .component('phoneList', new PhoneListComponent);
