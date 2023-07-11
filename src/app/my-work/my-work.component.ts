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
      img: './assets/img/join.png',
      language: 'Javascript | CSS | HTML',
      spec: `Task manager inspired by the Kanban System.
            Create and organize tasks using drag and drop 
            functions, assign users and categories.`,
      link: 'https://github.com/Fel1xR0eder/Join-Kanban-Tool',
      test: 'https://felixroeder.de/join/index.html '

    }, {
      name: 'Sharkie',
      img: './assets/img/sharkie.png',
      language: 'Javascript OOP | CSS |HTML',
      spec: `Jump, run and throw game based on object-oriented approach.
            Help Sharkie to fight against evil jellyfishes, pufferfishes and the big orca.`,
      link: 'https://github.com/Fel1xR0eder/Sharkie-Game',
      test: 'https://felixroeder.de/sharkie/index.html'
    }, {
      name: 'Placeholder for the next project',
      img: './assets/img/ring-of-fire.png',
      language: 'Placeholder',
      spec: `Placeholder for future portfolio projects (slack clone, etc),`,
      link: 'https://github.com/Fel1xR0eder/Ringoffire',
      test: 'https://ringoffire-7d049.web.app'
    }
  ];
}