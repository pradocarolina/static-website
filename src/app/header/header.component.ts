import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activeRoute: string;

  constructor(private _route: Router) {
    
    this._route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.activeRoute = this._route.url;
      }
    })
   }

  ngOnInit(): void {
  }

}
