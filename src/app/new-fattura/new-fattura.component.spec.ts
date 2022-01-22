import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFatturaComponent } from './new-fattura.component';

describe('NewFatturaComponent', () => {
  let component: NewFatturaComponent;
  let fixture: ComponentFixture<NewFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
