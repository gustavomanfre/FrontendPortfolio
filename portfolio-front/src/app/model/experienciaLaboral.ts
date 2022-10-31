export class Experiencia {

  id?: number;
  nombreEmpresa: string;
  nombreExperiencia: string;
  tipoExperiencia: string;


  constructor (nombreEmpresa: string , nombreExperiencia: string , tipoExperiencia: string){
      this.nombreEmpresa = nombreEmpresa
      this.nombreExperiencia = nombreExperiencia
      this.tipoExperiencia = tipoExperiencia

  }

}
