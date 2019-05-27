import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanerPage } from './planer.page';

describe('PlanerPage', () => {
  let component: PlanerPage;
  let fixture: ComponentFixture<PlanerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
