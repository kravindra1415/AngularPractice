import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtSec1Component } from './txt-sec1.component';

describe('TxtSec1Component', () => {
  let component: TxtSec1Component;
  let fixture: ComponentFixture<TxtSec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtSec1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
