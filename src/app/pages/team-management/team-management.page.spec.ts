import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamManagementPage } from './team-management.page';

describe('TeamManagementPage', () => {
  let component: TeamManagementPage;
  let fixture: ComponentFixture<TeamManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
