import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HeaderModule} from '../../common/header/header.module';
import {HomeRoutingModule} from './home-routing.module';
import {FocusOnLoadModule} from '../../common/focus-on-load/focus-on-load.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule,
    FocusOnLoadModule,
  ],
})
export class HomeModule {
}
