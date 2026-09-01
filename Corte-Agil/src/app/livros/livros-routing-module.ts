import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadLivros } from './cad-livros/cad-livros';
import { ListLivros } from './list-livros/list-livros'; 

const routes: Routes = [
  {path: 'cadastro', component: CadLivros},
  {path: 'lista', component: ListLivros},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
