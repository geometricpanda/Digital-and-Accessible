import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {ModalTitleDirective} from './modal-title.directive';
import {ModalFooterDirective} from './modal-footer.directive';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [
    ModalComponent,
    ModalTitleDirective,
    ModalFooterDirective,
  ],
  imports: [
    CommonModule,
    A11yModule,
    PortalModule,
  ],
  exports: [
    ModalComponent,
    ModalTitleDirective,
    ModalFooterDirective,
  ],
})
export class ModalModule {
}
