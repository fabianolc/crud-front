import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaProvider } from 'src/app/providers/pessoa.provider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(
    private router: Router,
    private pessoaProvider: PessoaProvider
  ) { }

  ngOnInit() {

  }

  save() {
    this.pessoaProvider.save(this.pessoa);
  }
}
