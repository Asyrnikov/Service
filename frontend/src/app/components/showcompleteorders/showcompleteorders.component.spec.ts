import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcompleteordersComponent } from './showcompleteorders.component';

describe('ShowcompleteordersComponent', () => {
  let component: ShowcompleteordersComponent;
  let fixture: ComponentFixture<ShowcompleteordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcompleteordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcompleteordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
