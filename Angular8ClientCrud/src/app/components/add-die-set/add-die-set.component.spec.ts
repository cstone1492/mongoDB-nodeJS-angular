import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieSetComponent } from './add-die-set.component';

describe('AddDieSetComponent', () => {
  let component: AddDieSetComponent;
  let fixture: ComponentFixture<AddDieSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDieSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDieSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
