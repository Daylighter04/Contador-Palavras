import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorDePalavritasComponent } from './contador-de-palavritas.component';

describe('ContadorDePalavritasComponent', () => {
  let component: ContadorDePalavritasComponent;
  let fixture: ComponentFixture<ContadorDePalavritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorDePalavritasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContadorDePalavritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
