import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex4Verdadeiro } from './ex4-verdadeiro/ex4-verdadeiro';
import { Ex7 } from './ex7/ex7';
import { Ex8 } from './ex8/ex8';
import { Ex9 } from './ex9/ex9';
import { Ex10 } from './ex10/ex10';

const routes: Routes = [
  {path: 'ex1', component: Ex1},
  {path: 'ex2', component: Ex2},
  {path: 'ex3', component: Ex3},
  {path: 'ex4', component: Ex4},
  {path: 'ex5', component: Ex5},
  {path: 'ex4-verdadeiro', component: Ex4Verdadeiro},
  {path: 'ex7', component: Ex7},
  {path: 'ex8', component: Ex8},
  {path: 'ex9', component: Ex9},
  {path: 'ex10', component: Ex10}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeExerciciosRoutingModule {}
