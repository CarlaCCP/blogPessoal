import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/userLogin';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
      return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: Usuario){
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }
}
