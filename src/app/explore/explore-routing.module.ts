import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '../core';
import { ExploreComponent } from './explore.component';

const routes: Routes = Route.withShell([
  { path: 'explore', component: ExploreComponent, data: { title: extract('Explore Our Kitties') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExploreRoutingModule { }
