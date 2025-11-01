import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { CoreModule } from './core/core.module';
import { PhoneListModule } from './phone-list/phone-list.module';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { PhoneDetailModule } from './phone-detail/phone-detail.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    CoreModule,
    PhoneListModule,
    PhoneDetailModule,
    AppRoutingModule,
  ],
  providers: [
    routeParamsProvider
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
