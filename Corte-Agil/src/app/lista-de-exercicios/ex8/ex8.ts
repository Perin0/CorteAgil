import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  produto: String = '';
  preco: number = 0;
  quantidade: number = 0; 
}
