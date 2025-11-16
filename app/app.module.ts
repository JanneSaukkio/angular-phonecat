import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PhoneListModule } from './phone-list/phone-list.module';
import { PhoneDetailModule } from './phone-detail/phone-detail.module';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    PhoneListModule,
    PhoneDetailModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
