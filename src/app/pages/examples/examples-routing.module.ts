import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ExamplesComponent} from './examples/examples.component';
import {SingleModalComponent} from './single-modal/single-modal.component';
import {DialogComponent} from './dialog/dialog.component';
import {MultipleModalsComponent} from './multiple-modals/multiple-modals.component';

const home: Route = {
  path: '',
  component: ExamplesComponent,
}

const singleModal: Route = {
  path: 'single-modal',
  component: SingleModalComponent,
}

const multipleModals: Route = {
  path: 'multiple-modals',
  component: MultipleModalsComponent,
}

const dialog: Route = {
  path: 'dialog',
  component: DialogComponent,
}

const routes: Routes = [
  home,
  singleModal,
  multipleModals,
  dialog,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {
}
