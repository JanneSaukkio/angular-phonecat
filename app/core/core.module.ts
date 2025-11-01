import { NgModule } from '@angular/core';
import { CheckmarkPipe } from './checkmark/checkmark.pipe';
import { PhoneModule } from './phone/phone.module';

@NgModule({
  imports: [PhoneModule],
  declarations: [CheckmarkPipe],
  exports: [CheckmarkPipe],
})
export class CoreModule {}
