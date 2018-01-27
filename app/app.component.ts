import { Component } from '@angular/core';

interface Nav {
  name: string,
  path: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <nav class= "nav">
<a *ngFor="let item of nav"
    [routerLink]= "item.path"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{exact: item.exact}">
    {{item.name}}
    </a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  nav: Nav[] = [{
    name: 'home',
    path: '/',
    exact: true
  },
  {
    name: 'passengers',
    path: '/passengers',
    exact: false
  },
  {
    name: '404',
    path: '/oops',
    exact: false
  }]
}