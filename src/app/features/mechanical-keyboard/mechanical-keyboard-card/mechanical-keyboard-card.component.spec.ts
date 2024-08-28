import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalKeyboardCardComponent } from './mechanical-keyboard-card.component';

describe('MechanicalKeyboardCardComponent', () => {
  let component: MechanicalKeyboardCardComponent;
  let fixture: ComponentFixture<MechanicalKeyboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MechanicalKeyboardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicalKeyboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
