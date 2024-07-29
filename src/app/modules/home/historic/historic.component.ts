import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent {
  @ViewChild('itemsContainer', { static: false }) itemsContainer!: ElementRef;
  
  items = [
    {
      image: 'assets/smart-plug.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/fire-tv.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/echo-spot.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/kit-casa.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/remoto-universal.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/alexa-echo.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/echo-spot.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    {
      image: 'assets/remoto-universal.jpg',
      title: 'Smart Plug Wi-Fi 10A/1000W-NBR, Positivo Casa Inteligente, ligue ou desligue seus...',
      reviews: '16.568',
      rating: 4.5,
      price: '82,34',
      shippingInfo: 'Receba até <strong>terça-feira, julho 30</strong><br>Opção de frete GRÁTIS disponível'
    },
    
    
    // Outros itens podem ser adicionados aqui
  ];

  previousSlide() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.scrollBy({ left: -210, behavior: 'smooth' });
    }
  }
  
  nextSlide() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.scrollBy({ left: 210, behavior: 'smooth' });
    }
  }
  
  
}

