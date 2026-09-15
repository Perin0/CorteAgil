import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  produto: string = ''
  preco: number = 0
  quantidade: number = 1

  isButtonDisabled = false
  verMoreThanZero(){
    if (this.quantidade == 0){
      this.isButtonDisabled = true;
    }
    else{
      this.isButtonDisabled = false
    } 
  }
  addCountQtd(){
    this.quantidade += 1;
    this.verMoreThanZero();
  }
  subCountQtd(){
    this.quantidade -= 1;
    this.verMoreThanZero();
  }
  addCarrinho(){
    const paragraph = document.createElement('p');
    paragraph.textContent = `Adicionado, ${this.quantidade} ${this.produto} ao carrinho!`;
    document.body.appendChild(paragraph);
  }
}
