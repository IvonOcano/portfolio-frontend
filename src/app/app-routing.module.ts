import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modals/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuardService } from './servicios/auth.guard.service';



// Rutas de navegacion
const routes: Routes = [
  {path: '', component: IndexComponent },
  {path:'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]},
 {path: '', redirectTo: '/index', pathMatch: 'full' },
 {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
