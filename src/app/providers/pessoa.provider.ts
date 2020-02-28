import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaProvider {
  
  constructor(
    private pessoaService: PessoaService
  ) { }

  save(data: Pessoa): Promise<any> {
    return this.pessoaService.save(data);
  }

  getAll(): Promise<Pessoa[]> {
    return this.pessoaService.getAll();
  }

  get(id: number): Promise<Pessoa> {
    return this.pessoaService.get(id);
  }

  update(data: Pessoa): Promise<any> {
    return this.pessoaService.update(data.idPessoa, data);
  }
}
