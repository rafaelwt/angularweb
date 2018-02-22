import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { resolve } from 'dns';
import { reject } from 'q';
@Injectable()
export class ProductosService {

  productos:any[]=[];
  productos_filtrado: any[]=[];
  cargando_producto:boolean=false;

  constructor(private http:Http) { 

    this.cargarProductos();

  }

  public buscarProducto (termino:string){


    console.log("Buscando producto");
    console.log(this.productos.length);

    if (this.productos_filtrado.length === 0){

      this.cargarProductos().then(()=>{
          //termino la carga
          this.filtrarProducto(termino);
      });
    }else{

      this.filtrarProducto(termino);

    }


  }

  private filtrarProducto(termino:string){

    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach(prod => {

      if (prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
        this.productos_filtrado.push(prod);
      }
      //console.log(prod);
    });

  }

  public cargarProducto (cod :string){
    
    return this.http.get(`https://paginaweb-f5a9e.firebaseio.com/productos/${cod}.json`);

  }

  public cargarProductos(){

    this.cargando_producto= true;

        let promesa = new Promise(( resolve,reject )=>{
          this.http.get('https://paginaweb-f5a9e.firebaseio.com/productos_idx.json').subscribe(res => {
            //console.log(res.json());
            this.cargando_producto = false;
            this.productos = res.json();
            resolve();


           /* setTimeout(() => {
              
              this.cargando_producto = false;
              this.productos = res.json();
              
            }, 1500);*/
        
            });

        })

        return promesa;

  }

}
