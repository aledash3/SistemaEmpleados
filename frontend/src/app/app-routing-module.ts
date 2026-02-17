import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte';
import { Informacion } from './components/informacion/informacion';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'formulario', component: Formulario },
  { path: 'reporte', component: Reporte },
  { path: 'info', component: Informacion }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
