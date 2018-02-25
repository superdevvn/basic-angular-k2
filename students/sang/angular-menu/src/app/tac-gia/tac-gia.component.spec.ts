import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacGiaComponent } from './tac-gia.component';

describe('TacGiaComponent', () => {
  let component: TacGiaComponent;
  let fixture: ComponentFixture<TacGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
