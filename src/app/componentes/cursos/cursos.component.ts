import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
    //Esto es para traer un array
cursitos : Curso[]=[]

  constructor(private sCurso: CursoService) { }
  
  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarCurso();
  }

  //llamamos a los métodos
  public cargarCurso():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sCurso.list().subscribe(db => {this.cursitos=db}); // uso el this porque esta fuera del método
  }
  public borrar(id:number){
    if(id != undefined){
      this.sCurso.delete(id).subscribe(
        data =>{
          // alert("Curso eliminado correctamente)
          this.cargarCurso();
        }, err =>{
          alert("No se pudo elmiminar el curso")
        }
      )
    }
  }

}
