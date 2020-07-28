import {Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
};

const modals: Route = {
  path: 'modals',
  loadChildren: () => import('./pages/modals/modals.module').then(mod => mod.ModalsModule),
};

const definitionLists: Route = {
  path: 'lists',
  loadChildren: () => import('./pages/lists/lists.module').then(mod => mod.ListsModule),
};

const inputs: Route = {
  path: 'inputs',
  loadChildren: () => import('./pages/inputs/inputs.module').then(mod => mod.InputsModule),
};

const routes: Routes = [
  home,
  modals,
  definitionLists,
  inputs,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
