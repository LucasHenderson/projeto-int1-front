import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGrupoComponent } from './ver-grupo.component';

describe('VerGrupoComponent', () => {
  let component: VerGrupoComponent;
  let fixture: ComponentFixture<VerGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
