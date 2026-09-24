import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  produtos: Produto[] = [
        { id: 1, nome: 'Tecido de Fibra de Bananeira', preco: 145.50, quantidade: 0, promocao: true},
        { id: 2, nome: 'Painel Acústico de Bagaço de Cana', preco: 89.90, quantidade: 3, promocao: false},
        { id: 3, nome: 'Tijolo Ecológico Modulado', preco: 4.50, quantidade: 2500, promocao: false},
        { id: 4, nome: 'Isolante Térmico Lignocelulósico', preco: 115.00, quantidade: 3, promocao: false},
        { id: 5, nome: 'Compósito Estrutural Reforçado', preco: 320.75, quantidade: 0, promocao: false}
      ];
}
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}