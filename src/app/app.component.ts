import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  msg:string = '';

  cars = [
    {'name': 'A5', 'marca': 'Audi', 'color':'Gris'},
    {'name': 'RX-8', 'marca': 'Mazda', 'color':'Rojo'},
    {'name': 'Camaro', 'marca': 'Chevrolet', 'color':'Amarillo'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addCar():void{
    this.cars.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteCar(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.cars.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editCar(i):void {
    this.hideUpdate = false;
    this.model2.name = this.cars[i].name;
    this.model2.marca = this.cars[i].marca;
    this.model2.color = this.cars[i].color;
    this.myValue = i;
  }

  updateCar():void {
    let i = this.myValue;
    for(let j = 0; j < this.cars.length; j++){
      if(i == j) {
        this.cars[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
