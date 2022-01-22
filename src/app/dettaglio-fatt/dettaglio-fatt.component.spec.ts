import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioFattComponent } from './dettaglio-fatt.component';

describe('DettaglioFattComponent', () => {
  let component: DettaglioFattComponent;
  let fixture: ComponentFixture<DettaglioFattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioFattComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioFattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
