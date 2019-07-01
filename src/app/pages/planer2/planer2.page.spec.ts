import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Planer2Page } from './planer2.page';

describe('Planer2Page', () => {
  let component: Planer2Page;
  let fixture: ComponentFixture<Planer2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Planer2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Planer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
