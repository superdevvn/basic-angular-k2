import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuonTraComponent } from './muon-tra.component';

describe('MuonTraComponent', () => {
  let component: MuonTraComponent;
  let fixture: ComponentFixture<MuonTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuonTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuonTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
