import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: false,
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion implements OnInit {

  gastos: any[] = [];

  constructor(){}

  ngOnInit(): void {
    this.gastos = [
      {
        nombre: 'Vivienda',
        descripcion: 'Gasto relacionado con alquiler, hipoteca o servicios del hogar.',
        deducible: true,
        imagen: 'v.png'
      },
      {
        nombre: 'Salud',
        descripcion: 'Gasto médico y servicios de salud.',
        deducible: true,
        imagen: 's.png'
      },
      {
        nombre: 'Educacion',
        descripcion: 'Gasto en estudios, matrícula, libros y cursos.',
        deducible: true,
        imagen: 'e.png'
      }
    ];
  }

  mensaje() {
    alert('Componente de Informacion');
  }

  mensaje1(nombre: string) {
    alert('Gasto seleccionado: ' + nombre);
  }

  borrarDeducible(gasto: any) {
    const index = this.gastos.indexOf(gasto);
    if (index !== -1) {
      this.gastos.splice(index, 1);
    }
  }
}



