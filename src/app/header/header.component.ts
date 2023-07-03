import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @ViewChild('headerLinks') headerLinks: ElementRef;

  public openBurger: boolean = false;

  @Input() darkMode = true;
  @Input() blueLogo = true;


  ngOnInit(): void {
    let menuBtn = document.getElementById('burgerMenu');
    let mobileMenu = document.getElementById('navbar');
    let mobileMenuLinks = document.querySelectorAll('.mobile-navbar a');
    let mobileBurger = document.getElementById('burgerMenuMobile');

    this.toggleMobileMenu(menuBtn, mobileMenu, mobileMenuLinks, mobileBurger);
  }

  
  toggleMobileMenu(menuBtn, mobileMenu, mobileMenuLinks, mobileBurger) {
    
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('is-active');
      mobileMenu?.classList.toggle('is-active');
    });

    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.remove('is-active');
        menuBtn?.classList.remove('is-active');
      });
    });

    mobileBurger?.addEventListener('click', () => {
      mobileMenu?.classList.remove('is-active');
      menuBtn?.classList.remove('is-active');
    });
  }
}