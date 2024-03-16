import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arrow-to-top',
  templateUrl: './arrow-to-top.component.html',
  styleUrls: ['./arrow-to-top.component.scss']
})
export class ArrowToTopComponent {
  constructor() {
    this.aparecerNaTela()
  }

  @HostListener('window:scroll', [])
  aparecerNaTela() {
    let altura = window.scrollY
    const arrowToTop = document.querySelector('.arrow-to-top__container')

    if (altura >= 600 && arrowToTop) {
      arrowToTop.classList.add('active')
    } else if (altura < 600 && arrowToTop) {
      arrowToTop.classList.remove('active')
    }
  }

  voltarParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
