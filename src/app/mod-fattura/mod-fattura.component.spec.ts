import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFatturaComponent } from './mod-fattura.component';

describe('NewFatturaComponent', () => {
  let component: ModFatturaComponent;
  let fixture: ComponentFixture<ModFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
