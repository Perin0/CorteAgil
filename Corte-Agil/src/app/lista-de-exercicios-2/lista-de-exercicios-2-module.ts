import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeExercicios2RoutingModule } from './lista-de-exercicios-2-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, ListaDeExercicios2RoutingModule],
})
export class ListaDeExercicios2Module {}
