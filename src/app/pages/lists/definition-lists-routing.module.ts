import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {DefinitionListsComponent} from './definition-lists-home/definition-lists.component';

const home: Route = {
  path: '',
  component: DefinitionListsComponent,
};


const routes: Routes = [
  home,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionListsRoutingModule { }
