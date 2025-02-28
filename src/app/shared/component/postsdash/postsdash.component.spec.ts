import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdashComponent } from './postsdash.component';

describe('PostsdashComponent', () => {
  let component: PostsdashComponent;
  let fixture: ComponentFixture<PostsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
