import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhoneDetailComponent } from './phone-detail.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, RouterModule, CoreModule],
  declarations: [PhoneDetailComponent],
  exports: [PhoneDetailComponent],
})
export class PhoneDetailModule {}
