import 'angular-mocks';
import angular, { IHttpBackendService, IComponentControllerService, route } from 'angular';
import { PhoneDetailController } from './phone-detail.component';

describe('phoneDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(angular.mock.module('phoneDetail'));

  // Test the controller
  describe('PhoneDetailController', function() {
    var $httpBackend: IHttpBackendService, ctrl: PhoneDetailController;
    var xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController: IComponentControllerService, _$httpBackend_: IHttpBackendService, $routeParams: route.IRouteParamsService) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('phoneDetail', {});
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phone).toEqual({} as any);

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData as any);
    });

  });

});
