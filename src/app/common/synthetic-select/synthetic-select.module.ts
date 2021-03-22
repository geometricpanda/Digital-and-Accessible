import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SyntheticSelectComponent} from './synthetic-select.component';
import {OptionComponent} from './option.component';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    SyntheticSelectComponent,
    OptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    A11yModule,
  ],
  exports: [
    SyntheticSelectComponent,
    OptionComponent
  ],
})
export class SyntheticSelectModule {
}
