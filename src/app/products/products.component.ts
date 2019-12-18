import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {"title":'USB Charger', "description": "My Description here"}
  ];

  title:string = '';
  description:string = '';

  addProduct(value:any) {
    this.products.push({'title':value.title, 'description': value.description});
    this.title = '';
    this.description = '';
  }

  removeProduct(product){
    this.products.splice(product, 1);
  }
}
