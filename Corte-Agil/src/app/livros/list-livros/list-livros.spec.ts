import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivros } from './list-livros';

describe('ListLivros', () => {
  let component: ListLivros;
  let fixture: ComponentFixture<ListLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(ListLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
