import { Phone } from './phone.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [Phone],
})
export class PhoneModule {}
