import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Principal } from './principal/principal';

const routes: Routes = [
  {path:'principal', component: Principal}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorpoRoutingModule {}
