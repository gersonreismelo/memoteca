import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: "Aprendendo Angular",
    autoria: "Padre José de Anchieta",
    modelo: 'modelo1'
  }

  criarPensamento() {
    alert("Pensamento criado!")
  }

  cancelarAcao(){
    alert("Ação cancelada!")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
