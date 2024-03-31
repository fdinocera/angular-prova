import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificaGiocatoreComponent } from './classifica-giocatore.component';

describe('ClassificaGiocatoreComponent', () => {
  let component: ClassificaGiocatoreComponent;
  let fixture: ComponentFixture<ClassificaGiocatoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificaGiocatoreComponent]
    });
    fixture = TestBed.createComponent(ClassificaGiocatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
