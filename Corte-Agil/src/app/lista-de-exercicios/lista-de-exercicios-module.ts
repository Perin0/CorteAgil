import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeExerciciosRoutingModule } from './lista-de-exercicios-routing-module';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex4Verdadeiro } from './ex4-verdadeiro/ex4-verdadeiro';
import { Ex7 } from './ex7/ex7';
import { FormsModule } from '@angular/forms';
import { Ex8 } from './ex8/ex8';
import { Ex9 } from './ex9/ex9';

@NgModule({
  declarations: [Ex1, Ex2, Ex3, Ex4, Ex5, Ex4Verdadeiro, Ex7, Ex8, Ex9],
  imports: [CommonModule, ListaDeExerciciosRoutingModule, FormsModule],
})
export class ListaDeExerciciosModule {}
