import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintunpaiduserordersComponent } from './printunpaiduserorders.component';

describe('PrintunpaiduserordersComponent', () => {
  let component: PrintunpaiduserordersComponent;
  let fixture: ComponentFixture<PrintunpaiduserordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintunpaiduserordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintunpaiduserordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
