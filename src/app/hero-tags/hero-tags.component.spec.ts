import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTagsComponent } from './hero-tags.component';

describe('HeroTagsComponent', () => {
  let component: HeroTagsComponent;
  let fixture: ComponentFixture<HeroTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
