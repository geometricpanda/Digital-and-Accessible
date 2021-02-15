import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListsRoutingModule} from './lists-routing.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import {FocusOnLoadModule} from '../../common/focus-on-load/focus-on-load.module';
import { ListUnorderedListComponent } from './list-unordered-list/list-unordered-list.component';
import { ListOrderedListComponent } from './list-ordered-list/list-ordered-list.component';
import { ListDescriptionListComponent } from './list-description-list/list-description-list.component';
import { ListUnordereredListCustomComponent } from './list-unorderered-list-custom/list-unorderered-list-custom.component';


@NgModule({
  declarations: [ListsHomeComponent, ListUnorderedListComponent, ListOrderedListComponent, ListDescriptionListComponent, ListUnordereredListCustomComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    FocusOnLoadModule,
  ],
})
export class ListsModule {
}
