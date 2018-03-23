import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocGiaComponent } from './doc-gia.component';

describe('DocGiaComponent', () => {
  let component: DocGiaComponent;
  let fixture: ComponentFixture<DocGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
