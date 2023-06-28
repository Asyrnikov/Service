import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintcheckeduserordersComponent } from './printcheckeduserorders.component';

describe('PrintcheckeduserordersComponent', () => {
  let component: PrintcheckeduserordersComponent;
  let fixture: ComponentFixture<PrintcheckeduserordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintcheckeduserordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintcheckeduserordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
