import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';
  firmark = 'grey';
  secmark = 'grey';
  thirmark = 'grey';

  constructor(){}
  passChek(event : any){
    const pass:Array<string> = event.target.value.split('')
    let num = 0
    let str = 0
    let symb = 0
    if (pass.length >=8) {
      pass.forEach((e:string) =>{
        if(Number(e)){num++}
        else if(/^[a-zA-Z]+$/.test(e)){str++}
        else{symb++}})
      if(num > 0 && str > 0 && symb > 0){
        this.firmark = 'green';
        this.secmark = 'green';
        this.thirmark = 'green';
      }
      else if(num > 0 && str > 0 || symb > 0 && num > 0 || str > 0 && symb > 0){
        this.firmark = 'yellow';
        this.secmark = 'yellow';
        this.thirmark = 'grey';
      }else if(num > 0 || str > 0 || symb > 0){
        this.firmark = 'red';
        this.secmark = 'grey';
        this.thirmark = 'grey';
      }
    }else if (pass.length <=8 && pass.length > 0){
      this.firmark = 'red';
      this.secmark = 'red';
      this.thirmark = 'red';
    }else{
      this.firmark = 'grey';
      this.secmark = 'grey';
      this.thirmark = 'grey';
    }
  }
}