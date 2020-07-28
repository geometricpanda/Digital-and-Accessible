import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {ListsHomeComponent} from './lists-home/lists-home.component';
import {ListOrderedListComponent} from './list-ordered-list/list-ordered-list.component';
import {ListUnorderedListComponent} from './list-unordered-list/list-unordered-list.component';
import {ListDescriptionListComponent} from './list-description-list/list-description-list.component';

const home: Route = {
  path: '',
  component: ListsHomeComponent,
};

const orderedList: Route = {
  path: 'ordered-list',
  component: ListOrderedListComponent,
};

const unorderedList: Route = {
  path: 'unordered-list',
  component: ListUnorderedListComponent,
};

const descriptionList: Route = {
  path: 'description-list',
  component: ListDescriptionListComponent,
};


const routes: Routes = [
  home,
  orderedList,
  unorderedList,
  descriptionList,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
