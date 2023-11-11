import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-lets-work',
  templateUrl: './lets-work.component.html',
  styleUrls: ['./lets-work.component.scss']
})
export class LetsWorkComponent {
  
  isSafari:any = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


}
