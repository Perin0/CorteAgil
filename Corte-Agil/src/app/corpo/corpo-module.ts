import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpoRoutingModule } from './corpo-routing-module';
import { Principal } from './principal/principal';
import { Cabecalho } from './cabecalho/cabecalho';

@NgModule({
  declarations: [Principal, Cabecalho],
  imports: [CommonModule, CorpoRoutingModule],
})
export class CorpoModule {}
