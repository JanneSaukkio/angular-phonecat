import { ILocationProvider, route } from 'angular';

export function config($locationProvider: ILocationProvider, $routeProvider: route.IRouteProvider) {
  "ngInject";
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    otherwise('/phones');
}
