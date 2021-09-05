import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelTodoComponent } from './del-todo.component';

describe('DelTodoComponent', () => {
  let component: DelTodoComponent;
  let fixture: ComponentFixture<DelTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
