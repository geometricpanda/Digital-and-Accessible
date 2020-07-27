import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {A11yModule} from '@angular/cdk/a11y';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    A11yModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
