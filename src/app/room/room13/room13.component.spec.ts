import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room13Component } from './room13.component';

describe('Room13Component', () => {
  let component: Room13Component;
  let fixture: ComponentFixture<Room13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Room13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
