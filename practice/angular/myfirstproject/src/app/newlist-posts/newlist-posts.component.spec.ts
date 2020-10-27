import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlistPostsComponent } from './newlist-posts.component';

describe('NewlistPostsComponent', () => {
  let component: NewlistPostsComponent;
  let fixture: ComponentFixture<NewlistPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlistPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlistPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
