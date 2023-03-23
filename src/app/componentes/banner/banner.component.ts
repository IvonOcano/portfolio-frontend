import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  form: FormGroup;
  id: number;
 perso: Persona[] = []; 
  banner = '/assets/img/banner11.jpg';
  constructor(private pService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona()
  }
  //llamamos a los métodos
  public cargarPersona():void{   //no va a haber ningun retorno, solo una carga de datos
    this.pService.list().subscribe(db => {this.perso=db}); // uso el this porque esta fuera del método
  }
  public borrar(id:number){
    if(id != undefined){
      this.pService.eliminarPersona(id).subscribe(
        data =>{
          this.cargarPersona();
        }, err =>{
          alert("No se pudo elmiminar los datos personales")
        }
      )
    }
  }
}
