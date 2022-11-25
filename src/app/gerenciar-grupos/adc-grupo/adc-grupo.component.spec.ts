import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcGrupoComponent } from './adc-grupo.component';

describe('AdcGrupoComponent', () => {
  let component: AdcGrupoComponent;
  let fixture: ComponentFixture<AdcGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdcGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
