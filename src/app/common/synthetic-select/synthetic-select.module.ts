import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SyntheticSelectComponent} from './synthetic-select.component';
import {OptionComponent} from './option.component';

@NgModule({
  declarations: [
    SyntheticSelectComponent,
    OptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SyntheticSelectComponent,
    OptionComponent
  ],
})
export class SyntheticSelectModule {
}
