import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html',
  styleUrl: './ex1.scss',
})
export class Ex1 {
  mensagemVisivel: string = "mensagem invisível"
  mostrarMensagem: boolean = false
  alterarMensagem(): void{
    this.mostrarMensagem = !this.mostrarMensagem
  }
}
