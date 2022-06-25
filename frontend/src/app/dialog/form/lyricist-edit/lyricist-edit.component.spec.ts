import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricistEditComponent } from './lyricist-edit.component';

describe('LyricistEditComponent', () => {
  let component: LyricistEditComponent;
  let fixture: ComponentFixture<LyricistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
