import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string;
  constructor(private rota: Router) {}

  abrirPaginaTeste(){
    this.rota.navigateByUrl(`/teste/${this.nome}`);
  }

}
