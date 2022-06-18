import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricistComponent } from './lyricist.component';

describe('LyricistComponent', () => {
  let component: LyricistComponent;
  let fixture: ComponentFixture<LyricistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
