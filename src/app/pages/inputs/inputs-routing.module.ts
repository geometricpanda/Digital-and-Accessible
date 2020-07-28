import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {InputsHomeComponent} from './inputs-home/inputs-home.component';
import {InputsRadioComponent} from './inputs-radio/inputs-radio.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: InputsHomeComponent,
}

const radios: Route = {
  path: 'radios',
  component: InputsRadioComponent,
}

const routes: Routes = [
  home,
  radios,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputsRoutingModule {
}
