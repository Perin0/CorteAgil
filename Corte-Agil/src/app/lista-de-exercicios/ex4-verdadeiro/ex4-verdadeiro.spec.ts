import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Verdadeiro } from './ex4-verdadeiro';

describe('Ex4Verdadeiro', () => {
  let component: Ex4Verdadeiro;
  let fixture: ComponentFixture<Ex4Verdadeiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4Verdadeiro],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex4Verdadeiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
