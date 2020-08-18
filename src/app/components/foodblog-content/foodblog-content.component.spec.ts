import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodblogContentComponent } from './foodblog-content.component';

describe('FoodblogContentComponent', () => {
  let component: FoodblogContentComponent;
  let fixture: ComponentFixture<FoodblogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodblogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodblogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
