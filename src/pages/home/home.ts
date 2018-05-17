import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  key: string = "children";
  data: Array<Object> = [
    { 
      name: 'Laptop',
      children: [
        {
          name: 'Apple',
          children: [{name: 'Macbook Air'}, {name: 'Macbook Pro'}]
        },
        { 
          name: 'Microsoft',
          children: [{name: 'Surface Pro'}]
        }
      ]
    },
    {
      name: 'Desktop',
      children: [{name: 'Dell'}]
    }
  ]
  
  constructor(public navCtrl: NavController) {

  }

}
