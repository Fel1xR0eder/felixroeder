import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @ViewChild('headerLinks') headerLinks: ElementRef;

  openBurger: boolean = false;

  @Input() darkMode = true;
  @Input() blueLogo = true;

  constructor(public app: AppComponent) { }

  ngOnInit(): void {
    let menuBtn = document.getElementById('burgerMenu');
    let mobileMenu = document.getElementById('navbar');
    let mobileMenuLinks = document.querySelectorAll('.mobile-navbar a');
    let mobileBurger = document.getElementById('burgerMenuMobile');

    this.toggleMobileMenu(menuBtn, mobileMenu, mobileMenuLinks, mobileBurger);
  }

  changeLanguage() {
    if(this.app.language) {
      this.app.translate.use('de');
      this.app.language = false;
    } else {
      this.app.translate.use('en');
      this.app.language = true;
    }
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