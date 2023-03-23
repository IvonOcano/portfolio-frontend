import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  form: FormGroup;
  id: number;
  educaciones: Educacion[] = [];
  constructor(private sEducacion: EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  //llamamos a los métodos
  public cargarEducacion():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sEducacion.list().subscribe(db => {this.educaciones=db}); // uso el this porque esta fuera del método
  }

  public borrar(id:number){
    if(id != undefined){
      this.sEducacion.eliminarEducacion(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo elmiminar la educación")
        }
      )
    }
  }
}
