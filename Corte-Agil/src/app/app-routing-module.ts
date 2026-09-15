import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(a => a.LivrosModule)
  },
  {
    path: 'lista-de-exercicios',
    loadChildren: () => import('./lista-de-exercicios/lista-de-exercicios-module').then(a => a.ListaDeExerciciosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
