import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const routes: Routes = [
  { path: 'service-page', component: ServicePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
