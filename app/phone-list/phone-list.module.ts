import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhoneListComponent } from './phone-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [PhoneListComponent],
  exports: [PhoneListComponent],
})
export class PhoneListModule {}
