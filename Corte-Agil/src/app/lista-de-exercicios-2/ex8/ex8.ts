import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  produtos: Produto[] = [
    { id: 1, nome: 'Tecido de Fibra de Bananeira', preco: 145.50, quantidade: 30 },
    { id: 2, nome: 'Painel Acústico de Bagaço de Cana', preco: 89.90, quantidade: 150 },
    { id: 3, nome: 'Tijolo Ecológico Modulado', preco: 4.50, quantidade: 2500 },
    { id: 4, nome: 'Isolante Térmico Lignocelulósico', preco: 115.00, quantidade: 45 },
    { id: 5, nome: 'Compósito Estrutural Reforçado', preco: 320.75, quantidade: 12 }
  ];
}
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}