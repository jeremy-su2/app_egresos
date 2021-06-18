import { Component, OnInit } from '@angular/core';
import {FormularioService} from '../servicios/formulario.service';

export class DatosFormulario{
  constructor(
    public campo1,
    public campo2
    ){}
}


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

datos_formulario;

  constructor(private formularioService: FormularioService ) {
    this.datos_formulario =  new DatosFormulario("","");
   }

  ngOnInit() {
  }
  DatosFormulario(){

    this.formularioService.registrarFormulario(this.datos_formulario).subscribe(
      (Response:any)=>{
        if(Response.registro){
          alert("Datos registrados correctamente")
        }else(
          alert("Datos no registrados")
        )
      },
      error=>{
        alert("Error al ingresar los datos")
      }
    )

    console.log("Datos del formulario: ", this.datos_formulario);
  }

}
