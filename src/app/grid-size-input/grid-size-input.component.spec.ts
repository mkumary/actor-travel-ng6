import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSizeInputComponent } from './grid-size-input.component';

describe('GridSizeInputComponent', () => {
  let component: GridSizeInputComponent;
  let fixture: ComponentFixture<GridSizeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSizeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
