import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})

export class Ex12 {
  produtos: Produto[] = []
  novoProduto: Produto = {
    nome: '',
    quantidade: null
  }
  cadastrar(form: NgForm) {
    if (form.valid) {
      this.produtos.push({ ...this.novoProduto });
      form.resetForm();
    }
  }
  remover(index: number): void{
    this.produtos.splice(index, 1)
  }
}
export interface Produto {
  nome: string,
  quantidade: number | null
}

