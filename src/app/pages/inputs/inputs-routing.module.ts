import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {InputsHomeComponent} from './inputs-home/inputs-home.component';
import {InputsRadioComponent} from './inputs-radio/inputs-radio.component';
import {InputsCheckboxComponent} from './inputs-checkbox/inputs-checkbox.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: InputsHomeComponent,
}

const radios: Route = {
  path: 'radios',
  component: InputsRadioComponent,
}

const checkboxes: Route = {
  path: 'checkboxes',
  component: InputsCheckboxComponent,
}

const routes: Routes = [
  home,
  radios,
  checkboxes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputsRoutingModule {
}
