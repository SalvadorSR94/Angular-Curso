import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {

heroes: string[]= ['Spiderman', 'IronMan', 'Hulk','Thor','Capitan Am'];
heroesBorrado: string='';
borrarHeroe(){
  this.heroesBorrado = this.heroes.shift() || '';
  
}
}
