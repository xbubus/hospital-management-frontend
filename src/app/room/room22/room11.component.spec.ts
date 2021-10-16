import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room11Component } from './room11.component';

describe('Room11Component', () => {
  let component: Room11Component;
  let fixture: ComponentFixture<Room11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Room11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
