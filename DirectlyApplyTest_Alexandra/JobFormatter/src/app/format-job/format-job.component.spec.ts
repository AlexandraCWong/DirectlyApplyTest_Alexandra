import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatJobComponent } from './format-job.component';

describe('FormatJobComponent', () => {
  let component: FormatJobComponent;
  let fixture: ComponentFixture<FormatJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
