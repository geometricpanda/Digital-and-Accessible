import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from './common/header/header.module';
import {ModalPortalModule} from './common/modal-portal/modal-portal.module';
import {FooterModule} from './common/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HeaderModule,
        ModalPortalModule,
        FooterModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
