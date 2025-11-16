import { NO_ERRORS_SCHEMA, DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mock, instance, when, verify } from 'ts-mockito';

import { Phone, PhoneData } from '../core/phone/phone.service';

import { PhoneListComponent } from './phone-list.component';

@Component({
    template: `
    <phone-list></phone-list>
    `
})
class TestHostComponent {}

describe('<Unit Test> Phone List Component', () => {
    let component: PhoneListComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let element: DebugElement;
    let PhoneMock: Phone;

    beforeEach(() => {
        PhoneMock = mock(Phone);

        TestBed.configureTestingModule({
            declarations: [TestHostComponent, PhoneListComponent],
            providers: [{ provide: Phone, useValue: instance(PhoneMock) }],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        element = fixture.debugElement.query(By.css('phone-list'));
        component = element.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    xdescribe('phoneList', () => {
        beforeEach(() => {
            /*
  // Load the module that contains the `phoneList` component before each test
  beforeEach(angular.mock.module('phoneList'))
       */
        });

        xdescribe('PhoneListController', () => {
            beforeEach(() => {
                /*
        beforeEach(inject(function($componentController: IComponentControllerService, _$httpBackend_: IHttpBackendService) {
          $httpBackend = _$httpBackend_;
          $httpBackend.expectGET('phones/phones.json')
                      .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

          ctrl = $componentController('phoneList', {});
        }))
           */
            });

            xit('should create a `phones` property with 2 phones fetched with `$http`', () => {
                /*
        it('should create a `phones` property with 2 phones fetched with `$http`', function() {
          jasmine.addCustomEqualityTester(angular.equals);

          expect(ctrl.phones).toEqual([]);

          $httpBackend.flush();
          expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}] as any[]);
        })
           */
            });

            xit('should set a default value for the `orderProp` property', () => {
                /*
        it('should set a default value for the `orderProp` property', function() {
          expect(ctrl.orderProp).toBe('age');
        })
           */
            });
        });
    });
});
