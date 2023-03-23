import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Datopersonal } from 'src/app/model/datopersonal';
import { DatopersonalService } from 'src/app/servicios/datopersonal.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {
  form: FormGroup;
  id: number;
 datosper: Datopersonal[] = []; 
 
  constructor(private dpService:DatopersonalService) { }

  ngOnInit(): void {
    this.cargarDPersonal()
  }
  //llamamos a los métodos
  public cargarDPersonal():void{   //no va a haber ningun retorno, solo una carga de datos
    this.dpService.list().subscribe(db => {this.datosper=db}); // uso el this porque esta fuera del método
  }
  public borrar(id:number){
    if(id != undefined){
      this.dpService.eliminarDatopersonal(id).subscribe(
        data =>{
          this.cargarDPersonal();
        }, err =>{
          alert("No se pudo elmiminar los datos personales")
        }
      )
    }
  }

}
