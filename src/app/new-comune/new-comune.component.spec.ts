import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComuneComponent } from './new-comune.component';

describe('NewComuneComponent', () => {
  let component: NewComuneComponent;
  let fixture: ComponentFixture<NewComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
