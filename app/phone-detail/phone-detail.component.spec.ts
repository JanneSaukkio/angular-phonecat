import { NO_ERRORS_SCHEMA, DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mock, instance, when, verify } from 'ts-mockito';

import { Phone, PhoneData } from '../core/phone/phone.service';

import { PhoneDetailComponent } from './phone-detail.component';

@Component({
    template: `
    <phone-detail></phone-detail>
    `
})
class TestHostComponent {}

describe('<Unit Test> Phone Detail Component', () => {
    let component: PhoneDetailComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let element: DebugElement;
    let PhoneMock: Phone;

    beforeEach(() => {
        PhoneMock = mock(Phone);

        TestBed.configureTestingModule({
            declarations: [TestHostComponent, PhoneDetailComponent],
            providers: [{ provide: Phone, useValue: instance(PhoneMock) }],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        element = fixture.debugElement.query(By.css('phone-detail'));
        component = element.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    xdescribe('phoneDetail', () => {
        beforeEach(() => {
            /*
  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(angular.mock.module('phoneDetail'))
       */
        });

        xdescribe('PhoneDetailController', () => {
            beforeEach(() => {
                /*
        beforeEach(inject(function($componentController: IComponentControllerService, _$httpBackend_: IHttpBackendService, $routeParams: route.IRouteParamsService) {
          $httpBackend = _$httpBackend_;
          $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

          $routeParams.phoneId = 'xyz';

          ctrl = $componentController('phoneDetail', {});
        }))
           */
            });

            xit('should fetch the phone details', () => {
                /*
        it('should fetch the phone details', function() {
          jasmine.addCustomEqualityTester(angular.equals);

          expect(ctrl.phone).toEqual({} as any);

          $httpBackend.flush();
          expect(ctrl.phone).toEqual(xyzPhoneData as any);
        })
           */
            });
        });
    });
});
