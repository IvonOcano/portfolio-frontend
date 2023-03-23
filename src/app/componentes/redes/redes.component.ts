import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { DatosService } from 'src/app/servicios/datos.service';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
  redes: Red[]=[];


  constructor(private sRed: RedService) { }

  listarItems(): void{
    this.sRed.list().subscribe(data =>{
      this.redes=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
