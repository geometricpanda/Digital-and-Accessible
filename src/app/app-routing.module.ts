import {Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(home => home.HomeModule),
}

const examples: Route = {
  path: 'examples',
  loadChildren: () => import('./pages/examples/examples.module').then(examples => examples.ExamplesModule),
}

const routes: Routes = [
  home,
  examples,
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
