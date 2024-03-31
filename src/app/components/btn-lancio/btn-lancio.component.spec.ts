import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLancioComponent } from './btn-lancio.component';

describe('BtnLancioComponent', () => {
  let component: BtnLancioComponent;
  let fixture: ComponentFixture<BtnLancioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnLancioComponent]
    });
    fixture = TestBed.createComponent(BtnLancioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
