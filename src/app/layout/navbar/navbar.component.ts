import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent  {
  

  toogleMenu() {
    const menuBars = document.querySelector('.navbar-mobile-bars')
    const body = document.querySelector('body')
    const navbarList = document.querySelector('.navbar-list')

    if (navbarList && body && menuBars) {
      navbarList.classList.remove('deactive')
      navbarList.classList.toggle('active');
  
      const menuIconOpen = document.createElement('img');
      menuIconOpen.src = '../../../assets/images/xmark-solid.svg';
      menuIconOpen.classList.add('navbar-mobile-bars-icon');
      menuIconOpen.style.width = '3rem';
  
      const menuIconClosed = document.createElement('img');
      menuIconClosed.src = '../../../assets/images/bars-solid.svg';
      menuIconClosed.classList.add('navbar-mobile-bars-icon');
      menuIconClosed.style.width = '3rem';
  
      const menuIconOld = menuBars.querySelector('.navbar-mobile-bars-icon'); 
  
      if (navbarList.classList.contains('active') && menuIconOld) {
          body.style.overflowY = 'hidden';
          menuBars.replaceChild(menuIconOpen, menuIconOld)
  
      } else if (menuIconOld) {
          body.style.overflowY = 'auto';
          menuBars.replaceChild(menuIconClosed, menuIconOld);
          navbarList.classList.add('deactive')
      }

      const navbarLinks = navbarList.querySelectorAll('a');
      navbarLinks.forEach(link => {
          link.addEventListener('click', () => {
              this.toogleMenu(); 
          });
      });

  }
  }
}

