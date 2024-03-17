import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {
    userLoggedIn: boolean = false;
    user: {} = ''
    userPhotoURL: string = '';
    userName: string = '';
    userEmail: string = ''
    userDropdownOpen: boolean = false;
    menuBarsDisplayed: boolean = true;

    constructor(private authService: AuthService, private router: Router) {
      
    }

    ngOnInit(): void {
      console.log(environment.USER)
      this.user = environment.USER
      this.userPhotoURL = environment.USER_PHOTO_URL
      this.userName = environment.USER_NAME
      this.userEmail = environment.USER_EMAIL
      if( this.user && Object.keys(this.user).length > 0) {
        this.userLoggedIn = true
        this.menuBarsDisplayed = false
      } else {
        this.userLoggedIn = false
      }
    }

  logout(): void {
    this.authService.signOutUser()
    .then(() => {
      this.userLoggedIn = false;
      this.menuBarsDisplayed = true;
      this.router.navigate(['/']);
      
    })
    .catch((error) => {
      console.error(error)
    })
  }

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

  toggleDropDown() {
    this.userDropdownOpen = !this.userDropdownOpen;
  }
}

