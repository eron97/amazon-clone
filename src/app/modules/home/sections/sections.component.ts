import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {

  calls = [
    {
      image: 'assets/prime1.jpeg',
      title: 'Prime Video: Recomendado para você',
      description: 'DESESPERO PROFUNDO',
      cta: 'Assista agora no Prime'
    },
    {
      image: 'assets/prime2.jpeg',
      title: 'Prime Video: Recomendado para você',
      description: 'Black Adam',
      cta: 'Assista agora no Prime'
    },
    {
      image: 'assets/prime3.jpeg',
      title: 'Prime Video: Recomendado para você',
      description: 'Patos!',
      cta: 'Assista agora no Prime'
    }
  ];

  currentCallIndex = 0;
  currentCall = this.calls[this.currentCallIndex];
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextCall();
    }, 5000); // Altera a chamada a cada 10 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextCall(): void {
    this.currentCallIndex = (this.currentCallIndex + 1) % this.calls.length;
    this.currentCall = this.calls[this.currentCallIndex];
  }
}
