import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {
  nomeAluno: String = ''
  quantidadeMaterias: number = 1
  isButtonDisabled: boolean = false

  submitSuccessMSG(){
    const paragraph = document.createElement('p');
    paragraph.textContent = `O aluno, ${this.nomeAluno} foi matriculado em ${this.quantidadeMaterias} matérias!`;
    document.body.appendChild(paragraph);
  }

  verMoreThanZero(){
    if (this.quantidadeMaterias == 0){
      this.isButtonDisabled = true;
    }
    else{
      this.isButtonDisabled = false
    } 
  }

  addCountQtd(){
    this.quantidadeMaterias += 1;
    this.verMoreThanZero();
  }
  
  subCountQtd(){
    this.quantidadeMaterias -= 1;
    this.verMoreThanZero();
  }
}
