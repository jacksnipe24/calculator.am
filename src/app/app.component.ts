import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(event => {
        this.titleService.setTitle(event['title']);

        if (this.metaService.getTag('name=description') !== null) {
          this.metaService.updateTag({
            name: 'description',
            content: event['description']
          });
        } else {
          this.metaService.addTag({
            name: 'description',
            content: event['description']
          });
        }

        if (this.metaService.getTag('property="og:description"') !== null) {
          this.metaService.updateTag({
            property: 'og:description',
            content: event['description']
          });
        } else {
          this.metaService.addTag({
            property: 'og:description',
            content: event['description']
          });
        }
      });
  }
}
