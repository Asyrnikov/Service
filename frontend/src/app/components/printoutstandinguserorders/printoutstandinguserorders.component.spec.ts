import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintoutstandinguserordersComponent } from './printoutstandinguserorders.component';

describe('PrintoutstandinguserordersComponent', () => {
  let component: PrintoutstandinguserordersComponent;
  let fixture: ComponentFixture<PrintoutstandinguserordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintoutstandinguserordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintoutstandinguserordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
