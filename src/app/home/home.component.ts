import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = [
    { name: 'Cozinha', image: 'assets/cat1.jpg' },
    { name: 'Brinquedos e Jogos', image: 'assets/cat2.jpg' },
    { name: 'Bebês', image: 'assets/cat3.jpg' },
    { name: 'Papelaria e Escritório', image: 'assets/cat4.jpg' },
    { name: 'Alimentos e Bebidas', image: 'assets/cat5.jpg' },
    { name: 'Eletrônicos', image: 'assets/cat6.jpg' },
    { name: 'Ferramentas e Construção', image: 'assets/cat7.jpg' }
    // Adicione mais categorias conforme necessário
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
    } else if (this.currentIndex > this.categories.length - itemsVisible) {
      this.currentIndex = this.categories.length - itemsVisible;
    }

    const carrosselInner = document.querySelector('.carrossel-inner') as HTMLElement;
    const newTransform = -this.currentIndex * (100 / itemsVisible);
    carrosselInner.style.transform = `translateX(${newTransform}%)`;
  }
}