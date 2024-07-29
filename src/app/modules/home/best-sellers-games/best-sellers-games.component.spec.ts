import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersGamesComponent } from './best-sellers-games.component';

describe('BestSellersGamesComponent', () => {
  let component: BestSellersGamesComponent;
  let fixture: ComponentFixture<BestSellersGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellersGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellersGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
