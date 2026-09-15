import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-verdadeiro',
  standalone: false,
  templateUrl: './ex4-verdadeiro.html',
  styleUrl: './ex4-verdadeiro.scss',
})
export class Ex4Verdadeiro {
  isButtonDisabled = true
  verificarViabilidade(){
    this.isButtonDisabled = !this.isButtonDisabled
  }
}
