import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowunpaidordersComponent } from './showunpaidorders.component';

describe('ShowunpaidordersComponent', () => {
  let component: ShowunpaidordersComponent;
  let fixture: ComponentFixture<ShowunpaidordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowunpaidordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowunpaidordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
