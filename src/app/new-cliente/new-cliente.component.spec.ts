import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClienteComponent } from './new-cliente.component';

describe('NewClienteComponent', () => {
  let component: NewClienteComponent;
  let fixture: ComponentFixture<NewClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
