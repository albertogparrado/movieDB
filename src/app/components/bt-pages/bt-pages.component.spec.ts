import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtPagesComponent } from './bt-pages.component';

describe('BtPagesComponent', () => {
  let component: BtPagesComponent;
  let fixture: ComponentFixture<BtPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
