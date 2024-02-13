import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: 'service-page', component: ServicePageComponent, pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
