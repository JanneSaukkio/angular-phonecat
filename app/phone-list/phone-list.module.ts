import { NgModule } from '@angular/core';
import { PhoneListComponent } from './phone-list.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CoreModule, CommonModule, RouterModule, FormsModule],
  declarations: [PhoneListComponent],
  exports: [PhoneListComponent],
})
export class PhoneListModule {}

