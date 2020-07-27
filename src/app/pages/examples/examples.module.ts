import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamplesRoutingModule} from './examples-routing.module';
import {SingleModalComponent} from './single-modal/single-modal.component';
import {MultipleModalsComponent} from './multiple-modals/multiple-modals.component';
import {InterstitialComponent} from './interstitial/interstitial.component';
import {ExamplesComponent} from './examples/examples.component';
import {ModalModule} from '../../common/modal/modal.module';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    ExamplesComponent,
    SingleModalComponent,
    MultipleModalsComponent,
    InterstitialComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    ModalModule,
  ],
})
export class ExamplesModule {
}
