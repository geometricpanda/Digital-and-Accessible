import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
};

const routes: Routes = [
  home,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
