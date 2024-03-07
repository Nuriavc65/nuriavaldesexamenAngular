import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  numero:number =0;
  click:boolean = false
  sumar(){
    while(true){
      this.numero = this.numero +1;
    }
  }
  guardar(){
    this.numero =this.numero;
  }
}
