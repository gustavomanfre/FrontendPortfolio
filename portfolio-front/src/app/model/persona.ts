
export class Persona {

  idPersona?: number;
  nombrePersona: string;
  apellidoPersona: string;
  urlDescargaCv: string;
  urlFoto: string;
  nombrePerfilTecnico: string;
  parrafoAcercaDe: string;
  nombre_perfil_acerca: string;

  constructor(apellidoPersona: string, nombrePerfilTecnico:string , nombrePersona: string , 
    nombre_perfil_acerca: string , parrafoAcercaDe: string , urlDescargaCv:string , urlFoto:string){

      this.nombrePersona = nombrePersona;
      this.apellidoPersona = apellidoPersona;
      this.urlFoto = urlFoto;
      this.urlDescargaCv = urlDescargaCv;
      this.nombrePerfilTecnico = nombrePerfilTecnico;
      this.parrafoAcercaDe = parrafoAcercaDe;
      this.nombre_perfil_acerca = nombre_perfil_acerca;
  }

}
