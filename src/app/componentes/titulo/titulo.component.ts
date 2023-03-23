import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  //Esto es para traer un array
  persona: any = [];
  titulo : any = [];
  constructor(private datos: DatosService, private perso: PersonaService ) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(db => {
      this.persona = db.persona;
      this.titulo = db.persona;
    })
  }

}
