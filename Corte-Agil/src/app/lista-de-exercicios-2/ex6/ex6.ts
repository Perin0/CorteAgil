import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  nomes: string[] = ['a', 'b', 'c'];
  removerUltimo() {
    this.nomes.pop();
  }
    limparLista() {
    this.nomes = [];
  }
  restaurarLista() {
    this.nomes = ['a', 'b', 'c'];
  }
}

