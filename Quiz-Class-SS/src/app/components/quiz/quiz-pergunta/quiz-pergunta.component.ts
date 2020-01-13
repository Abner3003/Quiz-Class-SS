import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-pergunta',
  templateUrl: './quiz-pergunta.component.html',
  styleUrls: ['./quiz-pergunta.component.scss']
})
export class QuizPerguntaComponent implements OnInit {
  PerguntasRodada: string[];
  PerguntaAtual: string;

  constructor() { }

  ngOnInit() {
    // carregar perguntas da rodada do service
    // carregar perguntaAtual do array
  }

  proximaQuestao() {

  }

  QuestaoAnterior() {

  }
  SetPassoAtual() {

  }

  GetPassoAtual() {

  }
}
