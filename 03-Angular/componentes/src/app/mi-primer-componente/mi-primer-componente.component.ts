import {Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {
  @Input()
  public titulo:string;

  @Input()
  public imagen: string;

  @Input()
  public textoImagen: string;

  @Input()
  public height: string

  @Input()
  public width: string

  @Input()
  public textoBoton: string;

  @Output() // EVENTO
  public cambio_sueldo = new EventEmitter();

  constructor() {
    console.log('Instanciado');
  } // instacia la clase (Ayuda -> Angular)

  ngOnInit():void { // La clase esta lista
    console.log('Esta Listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void{ // La clase se destruye
    console.log('Se destruye');
  }

  saludar(){
    alert("Holaaaaa");
  }

  aumentarSueldo(){
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.width = (Number(this.width.substr(0,this.width.length -2))+100).toString()+"px";
    this.height = (Number(this.height.substr(0,this.height.length-2))+100).toString()+"px";
    // this.textoBoton = (+ this.textoBoton).toString();
    // this.cambio_sueldo.emit(this.textoBoton);
  }
}

// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye

