import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizPerguntaComponent } from './quiz/quiz-pergunta/quiz-pergunta.component';


const routes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      { path: 'quiz-pergunta', component: QuizPerguntaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
