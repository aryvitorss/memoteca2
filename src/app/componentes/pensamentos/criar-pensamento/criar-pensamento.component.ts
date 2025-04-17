import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento ={

      conteudo: '',
      autoria:'',
      modelo:''
  }

  constructor(private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("novo pensamento criado!")
    this.service.criar(this.pensamento).subscribe()
    this.router.navigate(['/listarPensamento'])
  }

  deletarPensamento(){
    alert("deletar pensamento criado!")
    this.router.navigate(['/listarPensamento'])
  }

}
