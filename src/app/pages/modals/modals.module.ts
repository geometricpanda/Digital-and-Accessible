import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalsRoutingModule} from './modals-routing.module';
import {ModalsSingleModalComponent} from './modals-single-modal/modals-single-modal.component';
import {ModalsMultipleModalsComponent} from './modals-multiple-modals/modals-multiple-modals.component';
import {ModalsInterstitialComponent} from './modals-interstitial/modals-interstitial.component';
import {ModalsHomeComponent} from './modals-home/modals-home.component';
import {ModalModule} from '../../common/modal/modal.module';
import {ModalsDialogComponent} from './modals-dialog/modals-dialog.component';
import {FocusOnLoadModule} from '../../common/focus-on-load/focus-on-load.module';


@NgModule({
  declarations: [
    ModalsHomeComponent,
    ModalsSingleModalComponent,
    ModalsMultipleModalsComponent,
    ModalsInterstitialComponent,
    ModalsDialogComponent
  ],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    ModalModule,
    FocusOnLoadModule,
  ],
})
export class ModalsModule {
}
