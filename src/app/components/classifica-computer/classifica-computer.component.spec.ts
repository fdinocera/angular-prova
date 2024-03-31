import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificaComputerComponent } from './classifica-computer.component';

describe('ClassificaComputerComponent', () => {
  let component: ClassificaComputerComponent;
  let fixture: ComponentFixture<ClassificaComputerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificaComputerComponent]
    });
    fixture = TestBed.createComponent(ClassificaComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
