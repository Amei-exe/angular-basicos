import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

heroes: string [] = ['Amei', 'Teorbro', 'Bolsa :v', 'Pablo'] ;
heroeBorrado: string = '';




borrarHeroe () {
 
  this.heroeBorrado = this.heroes.shift () || '' ;
  
}

}