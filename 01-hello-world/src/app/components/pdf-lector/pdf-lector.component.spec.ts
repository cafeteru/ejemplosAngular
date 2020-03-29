import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfLectorComponent } from './pdf-lector.component';

describe('PdfLectorComponent', () => {
  let component: PdfLectorComponent;
  let fixture: ComponentFixture<PdfLectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfLectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
