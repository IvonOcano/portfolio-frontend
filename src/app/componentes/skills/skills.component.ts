import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  form: FormGroup;
  id: number;
  skill: Habilidad[] = [];
  porcentaje: number;
  

  constructor(private sHabilidad: HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }
   //llamamos a los métodos
   public cargarHabilidad():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sHabilidad.list().subscribe(db => {this.skill=db}); // uso el this porque esta fuera del método
  }
  public borrar(id:number){
    if(id != undefined){
      this.sHabilidad.eliminarHabilidad(id).subscribe(
        data =>{
          this.cargarHabilidad();
        }, err =>{
          alert("No se pudo elmiminar la educación")
        }
      )
    }
  }

}
