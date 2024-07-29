import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sellers-games',
  templateUrl: './best-sellers-games.component.html',
  styleUrls: ['./best-sellers-games.component.scss']
})
export class BestSellersGamesComponent implements OnInit {
  games = [
    { name: 'Game 1', image: 'assets/play1.jpg' },
    { name: 'Game 3', image: 'assets/play3.jpg' },
    { name: 'Game 4', image: 'assets/play4.jpg' },
    { name: 'Game 5', image: 'assets/play5.jpg' },
    { name: 'Game 2', image: 'assets/play2.jpg' },
    { name: 'Game 6', image: 'assets/play6.jpg' },
    { name: 'Game 7', image: 'assets/play7.jpg' },
    { name: 'Game 8', image: 'assets/play8.jpg' },
    { name: 'Game 9', image: 'assets/play9.jpg' },
    { name: 'Game 10', image: 'assets/play10.jpg' }
  ];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void { }

  slide(direction: number): void {
    const itemsVisible = 7; // Número de itens visíveis de uma vez
    this.currentIndex += direction;

    // Evita índices fora dos limites
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    } else if (this.currentIndex > this.games.length - itemsVisible) {
      this.currentIndex = this.games.length - itemsVisible;
    }

    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    const newTransform = -this.currentIndex * (100 / itemsVisible);
    carouselInner.style.transform = `translateX(${newTransform}%)`;
  }
}
