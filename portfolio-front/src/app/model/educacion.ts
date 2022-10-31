export class Educacion {
  id?: number;
  nombreEducacion: string;
  nombreInstitucion:string;

  constructor(nombreEducacion: string, nombreInstitucion: string){
      this.nombreEducacion = nombreEducacion;
      this.nombreInstitucion = nombreInstitucion;
  }

}
