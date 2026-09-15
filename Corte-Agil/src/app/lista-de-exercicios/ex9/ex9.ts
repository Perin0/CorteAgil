import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  produto: String = '';
  preco: number = 0;
  quantidade: number = 1; 

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
}
