import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
 
@Injectable()
export class InformacionService {

  info: any = {};
  cargada : boolean = false;
  cargada_sobre_nosotros : boolean = false;
  equipo:any[] =[];
  constructor(public http:Http) {

      this.cargarInfo();
      this.cargarSobreNosotros();

   }

   public cargarInfo (){
      this.http.get("assets/data/info.pagina.json").subscribe(data => {
        //console.log(data.json());
          this.cargada = true;
          this.info = data.json();
      });
   }

   public cargarSobreNosotros(){
      this.http.get("https://paginaweb-f5a9e.firebaseio.com/equipo.json").subscribe(data => {
          ///console.log(data.json());
          this.cargada_sobre_nosotros = true;
          this.equipo = data.json();
      });

   }

}
