import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoweventsComponent } from './showevents.component';

describe('ShoweventsComponent', () => {
  let component: ShoweventsComponent;
  let fixture: ComponentFixture<ShoweventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoweventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoweventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
