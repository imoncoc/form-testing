import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormNameCheckerComponent } from './react-form-name-checker.component';

describe('ReactFormNameCheckerComponent', () => {
  let component: ReactFormNameCheckerComponent;
  let fixture: ComponentFixture<ReactFormNameCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactFormNameCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormNameCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
