import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCounterComponent } from './type-counter.component';

describe('TypeCounterComponent', () => {
  let component: TypeCounterComponent;
  let fixture: ComponentFixture<TypeCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
