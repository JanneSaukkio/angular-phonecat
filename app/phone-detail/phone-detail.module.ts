import { PhoneDetailComponent } from './phone-detail.component';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CoreModule, CommonModule],
  declarations: [PhoneDetailComponent],
  exports: [PhoneDetailComponent],
})
export class PhoneDetailModule {}
