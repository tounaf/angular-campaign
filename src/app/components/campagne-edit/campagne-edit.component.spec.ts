import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneEditComponent } from './campagne-edit.component';

describe('CampagneEditComponent', () => {
  let component: CampagneEditComponent;
  let fixture: ComponentFixture<CampagneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
