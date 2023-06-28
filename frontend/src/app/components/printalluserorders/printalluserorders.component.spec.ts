import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintalluserordersComponent } from './printalluserorders.component';

describe('PrintalluserordersComponent', () => {
  let component: PrintalluserordersComponent;
  let fixture: ComponentFixture<PrintalluserordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintalluserordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintalluserordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
