import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeCrudComponent } from './cidade-crud.component';

describe('CidadeCrudComponent', () => {
  let component: CidadeCrudComponent;
  let fixture: ComponentFixture<CidadeCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CidadeCrudComponent]
    });
    fixture = TestBed.createComponent(CidadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
