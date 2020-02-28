import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils } from '../http';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private http: HttpClient,
    private utils: HttpUtils
  ) { }

  save(data: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(`${this.utils.apiUrl}pessoa`, this.utils.setJsonBody(data), this.utils.headers).toPromise();
  }

  getAll(): Promise<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.utils.apiUrl}pessoa`).toPromise();
  }

  get(id: number): Promise<Pessoa> {
    return this.http.get<Pessoa>(`${this.utils.apiUrl}pessoa/${id}`).toPromise();
  }

  update(id: number, data: Pessoa): Promise<Pessoa> {
    return this.http.put<Pessoa>(`${this.utils.apiUrl}pessoa/${id}`, this.utils.setJsonBody(data), this.utils.headers).toPromise();
  }
  
}
