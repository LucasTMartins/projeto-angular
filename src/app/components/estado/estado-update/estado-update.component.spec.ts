import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoUpdateComponent } from './estado-update.component';

describe('EstadoUpdateComponent', () => {
  let component: EstadoUpdateComponent;
  let fixture: ComponentFixture<EstadoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoUpdateComponent]
    });
    fixture = TestBed.createComponent(EstadoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
