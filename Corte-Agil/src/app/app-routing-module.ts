import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(a => a.LivrosModule)
  },
  {
    path: 'corpo',
    loadChildren: () => import('./corpo/corpo-module').then(a => a.CorpoModule)
  },
  {
    path: 'lista-de-exercicios',
    loadChildren: () => import('./lista-de-exercicios/lista-de-exercicios-module').then(a => a.ListaDeExerciciosModule)
  },
  {
    path: 'lista-de-exercicios-2',
    loadChildren: () => import('./lista-de-exercicios-2/lista-de-exercicios-2-module').then(a => a.ListaDeExercicios2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
