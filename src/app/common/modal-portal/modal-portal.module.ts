import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalPortalComponent} from './modal-portal.component';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [
    ModalPortalComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
  ],
  exports: [
    ModalPortalComponent,
  ],
})
export class ModalPortalModule {
}
