import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoReadComponent } from './estado-read.component';

describe('EstadoReadComponent', () => {
  let component: EstadoReadComponent;
  let fixture: ComponentFixture<EstadoReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoReadComponent]
    });
    fixture = TestBed.createComponent(EstadoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
