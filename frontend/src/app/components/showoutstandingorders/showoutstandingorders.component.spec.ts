import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoutstandingordersComponent } from './showoutstandingorders.component';

describe('ShowoutstandingordersComponent', () => {
  let component: ShowoutstandingordersComponent;
  let fixture: ComponentFixture<ShowoutstandingordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoutstandingordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowoutstandingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
