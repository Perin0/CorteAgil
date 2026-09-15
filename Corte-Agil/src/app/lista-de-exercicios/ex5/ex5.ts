import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  standalone: false,
  templateUrl: './ex5.html',
  styleUrl: './ex5.scss',
})
export class Ex5 {
  count = 1
  isButtonDisabled = false
  verMoreThanZero(){
    if (this.count == 0){
      this.isButtonDisabled = true;
    }
    else{
      this.isButtonDisabled = false
    } 
  }
  addCount(){
    this.count += 1;
    this.verMoreThanZero();
  }
  subCount(){
    this.count -= 1;
    this.verMoreThanZero();
  }
}
