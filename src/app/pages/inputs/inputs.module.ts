import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputsRoutingModule} from './inputs-routing.module';
import {InputsHomeComponent} from './inputs-home/inputs-home.component';
import {FocusOnLoadModule} from '../../common/focus-on-load/focus-on-load.module';
import {InputsRadioComponent} from './inputs-radio/inputs-radio.component';
import {FormsModule} from '@angular/forms';
import {InputsCheckboxComponent} from './inputs-checkbox/inputs-checkbox.component';
import {InputsSyntheticSelectComponent} from './inputs-synthetic-select/inputs-synthetic-select.component';
import {SyntheticSelectModule} from '../../common/synthetic-select/synthetic-select.module';


@NgModule({
  declarations: [
    InputsHomeComponent,
    InputsRadioComponent,
    InputsCheckboxComponent,
    InputsSyntheticSelectComponent,
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FocusOnLoadModule,
    FormsModule,
    SyntheticSelectModule,
  ],
})
export class InputsModule {
}
