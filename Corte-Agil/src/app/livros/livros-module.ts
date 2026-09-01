import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { CadLivros } from './cad-livros/cad-livros';
import { ListLivros } from './list-livros/list-livros';

@NgModule({
  declarations: [CadLivros, ListLivros],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
