import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  ngOnInit(): void { }



  projects = [
    {
      name: 'Join',
      img: './../../assets/img/join.png',
      language: 'Javascript | CSS | HTML',
      spec: 'Task manager inspired by the Kanban System.Create and organize tasks using drag and drop functions, assign users and categories. '
    },
    {
      name: 'Sharkie',
      img: './../../assets/img/sharkie.png',
      language: 'Javascript OOP | CSS |HTML',
      spec: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {
      name: 'Ring of Fire',
      img: './../../assets/img/ring-of-fire.png',
      language: 'Angular | SCSS | HTML | Firebase',
      spec: 'Popular drinking game as a webapp based on Angular and Firebase'
    }
  ];

}
