import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProvinciaComponent } from './new-provincia.component';

describe('NewProvinciaComponent', () => {
  let component: NewProvinciaComponent;
  let fixture: ComponentFixture<NewProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProvinciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
