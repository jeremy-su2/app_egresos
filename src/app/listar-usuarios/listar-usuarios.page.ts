import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {

  constructor(private formularioService: FormularioService){ }
  datos_formularios;
  ngOnInit() {
  }

ionViewWillEnter(){
  this.obtenerformulario();
}

  obtenerformulario(){

    this.formularioService.obtenerformulario().subscribe(
      (Response:any) => {
        this.datos_formularios = Response.registros;
      },
      error => {
        alert("Error en la peticion");
      }
    );
  }
}
