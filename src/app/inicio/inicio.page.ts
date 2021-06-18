import { Component, OnInit } from '@angular/core';

interface componente {
  icono: string;
  nombre: string;
  direccion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente [] = [
    {
      icono:"exit-outline",
      nombre:"Lista de Egresos",
      direccion:"/Listar-Egresos",

  },
    {
      icono:"people-outline",
      nombre:"Lista de Usuarios",
      direccion:"/Listar-Usuarios",

  },
  {
    icono:"reader-outline",
    nombre:"Registro de Egresos",
    direccion:"/Registro-Egresos",

  },
  {
    icono:"person-add-outline",
    nombre:"Registro de Usuarios",
    direccion:"/Registro-Usuarios",

  }
];

  constructor() { }

  ngOnInit() {
  }

}
