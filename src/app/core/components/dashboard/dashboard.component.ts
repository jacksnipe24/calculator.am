import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('financeState', [
      state('inactive', style({
        transform: 'scale(1)',
          zIndex: '0'
      })),
      state('active',   style({
        transform: 'scale(1.1)',
        zIndex: '999'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ]),
    trigger('mathState', [
      state('inactive', style({
        transform: 'scale(1)',
        zIndex: '0'
      })),
      state('active',   style({
        transform: 'scale(1.1)',
        zIndex: '999'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ]),
    trigger('unit', [
      state('inactive', style({
        transform: 'scale(1)',
        zIndex: '0'
      })),
      state('active',   style({
        transform: 'scale(1.1)',
        zIndex: '999'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  financeState = 'inactive';
  mathState = 'inactive';
  unitState = 'inactive';
  constructor() { }
  ngOnInit() {
  }

  makeActive(card: string) {
    switch (card) {
      case 'financeState' : {
        this.financeState = 'active';
        return;
      }
      case 'mathState' : {
        this.mathState = 'active';
        return;
      }
      case 'unitState' : {
        this.unitState = 'active';
        return;
      }

    }
  }

  makeInActive(card: string) {
    switch (card) {
      case 'financeState' : {
        this.financeState = 'inactive';
        return;
      }
      case 'mathState' : {
        this.mathState = 'inactive';
        return;
      }
      case 'unitState' : {
        this.unitState = 'inactive';
        return;
      }
    }
  }

}
