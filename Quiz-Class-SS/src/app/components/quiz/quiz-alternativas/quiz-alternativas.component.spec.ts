import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAlternativasComponent } from './quiz-alternativas.component';

describe('QuizAlternativasComponent', () => {
  let component: QuizAlternativasComponent;
  let fixture: ComponentFixture<QuizAlternativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAlternativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
