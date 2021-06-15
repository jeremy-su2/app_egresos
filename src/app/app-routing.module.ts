import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'Listar-Egresos',
    loadChildren: () => import('./listar-egresos/listar-egresos.module').then( m => m.ListarEgresosPageModule)
  },
  {
    path: 'Listar-Usuarios',
    loadChildren: () => import('./listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'Registro-Egresos',
    loadChildren: () => import('./registro-egresos/registro-egresos.module').then( m => m.RegistroEgresosPageModule)
  },
  {
    path: 'Registro-Usuarios',
    loadChildren: () => import('./registro-usuarios/registro-usuarios.module').then( m => m.RegistroUsuariosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
