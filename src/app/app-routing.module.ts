import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./screens/authentication/authentication.routing.module').then((m) => m.AutheticationRoutingModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./screens/home/home.routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./screens/client-form/client-form.routing.module').then((m) => m.ClientFormRoutingModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
