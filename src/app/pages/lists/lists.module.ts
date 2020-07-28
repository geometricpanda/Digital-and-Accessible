import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DefinitionListsRoutingModule} from './definition-lists-routing.module';
import { DefinitionListsComponent } from './definition-lists-home/definition-lists.component';
import {FocusOnLoadModule} from '../../common/focus-on-load/focus-on-load.module';


@NgModule({
  declarations: [DefinitionListsComponent],
  imports: [
    CommonModule,
    DefinitionListsRoutingModule,
    FocusOnLoadModule,
  ],
})
export class ListsModule {
}
