import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

nombre:string = 'Wolverine';
edad: number = 49

get nombreCapitalizado () :string {
    return this.nombre.toUpperCase () ;

}

obtenerNombre () : string {
    return `${this.nombre} - ${this.edad }` ;
}

cambiarNombre () : void {
 this.nombre = 'Psylocke' ;

}

cambiarEdad () : void {
    this.edad = 30;
}

}