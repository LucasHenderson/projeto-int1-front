import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirGrupoComponent } from './excluir-grupo.component';

describe('ExcluirGrupoComponent', () => {
  let component: ExcluirGrupoComponent;
  let fixture: ComponentFixture<ExcluirGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
