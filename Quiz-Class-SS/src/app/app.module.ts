import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizPerguntaComponent } from './quiz-pergunta/quiz-pergunta.component';
import { QuizAlternativasComponent } from './quiz-alternativas/quiz-alternativas.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizPerguntaComponent,
    QuizAlternativasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
