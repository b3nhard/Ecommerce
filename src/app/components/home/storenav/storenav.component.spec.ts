import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorenavComponent } from './storenav.component';

describe('StorenavComponent', () => {
  let component: StorenavComponent;
  let fixture: ComponentFixture<StorenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
