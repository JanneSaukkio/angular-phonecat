import * as angular from 'angular';
import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';
import { config } from './app.config';
import { phoneAnimation } from './app.animations';

import 'bootstrap/dist/css/bootstrap.css';
import './app.animations.css';
import './app.css';

// Define the `phonecatApp` module
const App = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]).config(config)
  .animation('.phone', phoneAnimation);

export default App.name;
