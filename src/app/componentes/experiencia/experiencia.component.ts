import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { DatosService } from '../../servicios/datos.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[] //se llama a la entidad Experiencia

  constructor(private sExperiencia: ExperienciaService) { }//se llama al servicio Experiencia

  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarExperiencia();
  }

    //llamamos a los métodos
    public cargarExperiencia():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sExperiencia.list().subscribe(db => {this.experiencias=db}); // uso el this porque esta fuera del método
    }
    
    public borrar(id:number){
      if(id != undefined){
        this.sExperiencia.eliminarExperiencia(id).subscribe(
          data =>{
            // alert("Experiencia eliminada correctamente)
            this.cargarExperiencia();
          }, err =>{
            alert("No se pudo elmiminar la experiencia")
          }
        )
      }
    }
  

}
