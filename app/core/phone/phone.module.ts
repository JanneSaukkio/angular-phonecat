import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Phone } from './phone.service';

@NgModule({
	imports: [HttpModule],
	providers: [Phone],
})
export class PhoneModule {}
