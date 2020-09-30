import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieSetsListComponent } from './die-sets-list.component';

describe('DieSetsListComponent', () => {
  let component: DieSetsListComponent;
  let fixture: ComponentFixture<DieSetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieSetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieSetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
