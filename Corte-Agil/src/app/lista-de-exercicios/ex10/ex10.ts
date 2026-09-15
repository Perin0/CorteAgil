import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  nome: string = '';
  senha: string = '';

  bemVindoMSG() {
    const paragraph = document.createElement('p');
    paragraph.textContent = `Bem-vindo, ${this.nome}!`;
    document.body.appendChild(paragraph);
  }
}
