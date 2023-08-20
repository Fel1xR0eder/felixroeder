import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  ngOnInit(): void { }

  constructor(public app: AppComponent) { }

  projects = [
    {
      name: 'Join',
      img: './assets/img/join.png',
      language: 'Javascript | CSS | HTML',
      spec: `Task manager inspired by the Kanban System.
            Create and organize tasks using drag and drop 
            functions, assign users and categories.`,
      spec_de: `Task manager inspiriert nach dem Kanban-System. 
                Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen,
                weisen Sie Benutzer und Kategorien zu.`,
      link: 'https://github.com/Fel1xR0eder/Join-Kanban-Tool',
      test: 'https://felixroeder.de/join/index.html '

    }, {
      name: 'Sharkie',
      img: './assets/img/sharkie.png',
      language: 'Javascript OOP | CSS |HTML',
      spec: `Jump, run and throw game based on object-oriented approach.
            Help Sharkie to fight against evil jellyfishes, pufferfishes and the big orca.`,
      spec_de: `Sprung-, Lauf- und Wurfspiel auf der Grundlage eines objektorientierten Ansatzes. 
                Hilf Sharkie, gegen böse Quallen, Kugelfische und den großen Orca zu kämpfen.`,
      link: 'https://github.com/Fel1xR0eder/Sharkie-Game',
      test: 'https://felixroeder.de/sharkie/index.html'
    } 
    // ,{
    //   name: 'Placeholder for the next project',
    //   img: './assets/img/ring-of-fire.png',
    //   language: 'Placeholder',
    //   spec: `Placeholder for future portfolio projects (slack clone, etc),`,
    //   link: 'https://github.com/Fel1xR0eder/Ringoffire',
    //   test: 'https://ringoffire-7d049.web.app'
    // }
  ];
}