import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('headerLinks') headerLinks: ElementRef;

  public openBurger: boolean = false;
  menu = false;

  ngOnInit(): void {
    const menuBtn = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('navbar');
    const mobileMenuLinks = document.querySelectorAll('.mobile-navbar a');
    const mobileBurger = document.getElementById('burgerMenuMobile');

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