import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.scss',
})
export class Ex4 {
  nomeProduto: string = 'Teclado'
  quantidadeEstoque: number = 5
  botaoDesabilitado = false
  diminuirQuantidade(){
    this.quantidadeEstoque -= 1
    if (this.quantidadeEstoque == 0){
      this.botaoDesabilitado = !this.botaoDesabilitado
    }
  }
}
