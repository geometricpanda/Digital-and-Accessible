import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ExamplesComponent} from './examples/examples.component';
import {SingleModalComponent} from './single-modal/single-modal.component';
import {DialogComponent} from './dialog/dialog.component';

const home: Route = {
  path: '',
  component: ExamplesComponent,
}

const singleModal: Route = {
  path: 'single-modal',
  component: SingleModalComponent,
}

const dialog: Route = {
  path: 'dialog',
  component: DialogComponent,
}

const routes: Routes = [
  home,
  singleModal,
  dialog,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {
}
