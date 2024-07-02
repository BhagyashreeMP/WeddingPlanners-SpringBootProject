import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustsuccessComponent } from './custsuccess.component';

describe('CustsuccessComponent', () => {
  let component: CustsuccessComponent;
  let fixture: ComponentFixture<CustsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
