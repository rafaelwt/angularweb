import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando_producto:boolean=false;

  constructor(private http:Http) { 

    this.cargarProductos();

  }

  public cargarProducto (cod :string){
    
    return this.http.get(`https://paginaweb-f5a9e.firebaseio.com/productos/${cod}.json`);

  }

  public cargarProductos(){

 //   if (this.produtos.length === 0){

        this.cargando_producto= true;
        this.http.get('https://paginaweb-f5a9e.firebaseio.com/productos_idx.json').subscribe(res => {
                  //console.log(res.json());
                  this.cargando_producto = false;
                  this.productos = res.json();
                 /* setTimeout(() => {
                    
                    this.cargando_producto = false;
                    this.productos = res.json();
                    
                  }, 1500);*/
              
        });
   // }
  }

}
