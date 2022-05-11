import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtSec2Component } from './txt-sec2.component';

describe('TxtSec2Component', () => {
  let component: TxtSec2Component;
  let fixture: ComponentFixture<TxtSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtSec2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
