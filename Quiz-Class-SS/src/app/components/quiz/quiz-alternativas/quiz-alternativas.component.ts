import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Alternativas } from 'src/app/models/alternativas';

@Component({
  selector: 'app-quiz-alternativas',
  templateUrl: './quiz-alternativas.component.html',
  styleUrls: ['./quiz-alternativas.component.scss']
})
export class QuizAlternativasComponent implements OnInit {
  // propiedades
  Alternativas: Alternativas;
  CodigoRodada: number;  // vou pegar da session storage
  AlternativaCorreta: string;
// Formulario
  quizALternativasForm = this.fb.group({
    alternativa1: [this.Alternativas.ALTERNATIVA_1],
    alternativa2: [this.Alternativas.ALTERNATIVA_2],
    alternativa3: [this.Alternativas.ALTERNATIVA_3],
    alternativa4: [this.Alternativas.ALTERNATIVA_4],
    alternativa5: [this.Alternativas.ALTERNATIVA_5]
  })

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.Alternativas = this.ObterAlternativas(this.CodigoRodada);
  }

  ObterAlternativas(CD_RODADA: number): Alternativas {
    let provisorio: Alternativas; // Vai sair esta linha, a busca será atraves do serviço
    return provisorio;
  }

}
