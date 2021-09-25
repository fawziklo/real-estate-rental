import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./screens/home/home.routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./screens/authentication/authentication.routing.module').then((m) => m.AutheticationRoutingModule),
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
