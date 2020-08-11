import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputsHomeComponent } from './inputs-home/inputs-home.component';
import {FocusOnLoadModule} from '../../common/focus-on-load/focus-on-load.module';
import { InputsRadioComponent } from './inputs-radio/inputs-radio.component';
import {FormsModule} from '@angular/forms';
import { InputsCheckboxComponent } from './inputs-checkbox/inputs-checkbox.component';


@NgModule({
  declarations: [InputsHomeComponent, InputsRadioComponent, InputsCheckboxComponent],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FocusOnLoadModule,
    FormsModule,
  ],
})
export class InputsModule { }
