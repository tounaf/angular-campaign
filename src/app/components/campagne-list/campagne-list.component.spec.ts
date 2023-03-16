import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneListComponent } from './campagne-list.component';

describe('CampagneListComponent', () => {
  let component: CampagneListComponent;
  let fixture: ComponentFixture<CampagneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
