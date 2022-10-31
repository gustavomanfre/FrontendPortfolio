import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  URL = environment.URL + 'auth/';

  constructor(private http:HttpClient) { }

  //Tenemos para crear un usuario nuevo y login..

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.http.post<any>(this.URL + 'nuevo', nuevoUsuario);
 }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.URL + 'login', loginUsuario)
  }

}




