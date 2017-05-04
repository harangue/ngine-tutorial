import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstaclesNewComponent } from './obstacles-new.component';

describe('ObstaclesNewComponent', () => {
  let component: ObstaclesNewComponent;
  let fixture: ComponentFixture<ObstaclesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstaclesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstaclesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
