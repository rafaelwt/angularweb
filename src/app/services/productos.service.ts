import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductosService {

  produtos:any[]=[];
  cargando_producto:boolean=false;

  constructor(private http:Http) { 

    this.cargarProducto();

  }

  public cargarProducto(){

 //   if (this.produtos.length === 0){

        this.cargando_producto= true;
        this.http.get('https://paginaweb-f5a9e.firebaseio.com/productos_idx.json').subscribe(res => {
                  console.log(res.json());
                  this.produtos = res.json();
                  this.cargando_producto = false;
        });
   // }
  }

}