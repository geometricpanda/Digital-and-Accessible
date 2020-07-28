import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ModalsHomeComponent} from './modals-home/modals-home.component';
import {ModalsSingleModalComponent} from './modals-single-modal/modals-single-modal.component';
import {ModalsDialogComponent} from './modals-dialog/modals-dialog.component';
import {ModalsMultipleModalsComponent} from './modals-multiple-modals/modals-multiple-modals.component';

const home: Route = {
  path: '',
  component: ModalsHomeComponent,
};

const singleModal: Route = {
  path: 'modals-single-modal',
  component: ModalsSingleModalComponent,
};

const multipleModals: Route = {
  path: 'modals-multiple-modals',
  component: ModalsMultipleModalsComponent,
};

const dialog: Route = {
  path: 'dialog',
  component: ModalsDialogComponent,
};

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
export class ModalsRoutingModule {
}
