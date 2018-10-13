import { Injectable } from '@angular/core';
import { pages } from '../../configs/db/db';
import { PageContent } from '../../models/page';

@Injectable()
export class CalcFunctionsService {
  constructor() {}

  getPage(name: string): PageContent {
    return pages[name];
  }

  calculateCagr(presentValue, futureValue, periodTime): string | number {
    const n = 1 / +periodTime;
    const r = parseFloat(futureValue) / parseFloat(presentValue);
    if (
      n === Infinity ||
      n === -Infinity ||
      isNaN(n) ||
      r === Infinity ||
      r === -Infinity ||
      isNaN(r)
    ) {
      return 0;
    }
    return ((Math.pow(r, n) - 1) * 100).toFixed(2);
  }

  calculateGeneralConversion(from, to, value): number {
    let res = +((value * from) / to);
    if (Math.round(res) !== res) {
      res = +res.toFixed(10);
    }
    return res;
  }

  calculateCoompoundInterestStandart(base, rate, n, t, monthly): any {
    const res = [];
    let step = 12 / n;
    for (let i = 0; i < t; i++) {
      let yInterest;
      let tInterest;
      const a = 1 + rate / n;
      let b = Math.pow(a, (i + 1) * n);
      if (monthly) {
        b = Math.pow(a, ((i + 1) / 12) * n);
      }
      const balance = +(base * b).toFixed(2);
      if (i === 0) {
        yInterest = tInterest = balance - base;
        if (monthly && (n === 4 || n === 2 || n === 1) && t > 1) {
          res.push({ y: 0, t: 0, b: base, i: i + 1 });
        } else {
          res.push({
            y: +yInterest.toFixed(2),
            t: +tInterest.toFixed(2),
            b: balance,
            i: i + 1
          });
        }
      } else {
        if (monthly && ((n === 4 || n === 2 || n === 1) && i !== t - 1)) {
          if (i === step - 1) {
            yInterest = +(balance - res[i - 1].b).toFixed(2);
            tInterest = +(yInterest + res[i - 1].t).toFixed(2);
            res.push({ y: yInterest, t: tInterest, b: balance, i: i + 1 });
            step = step + 12 / n;
          } else {
            res.push({ y: 0, t: res[i - 1].t, b: res[i - 1].b, i: i + 1 });
          }
        } else {
          yInterest = +(balance - res[i - 1].b).toFixed(2);
          tInterest = +(yInterest + res[i - 1].t).toFixed(2);
          res.push({ y: yInterest, t: tInterest, b: balance, i: i + 1 });
        }
      }
    }
    return res;
  }
}
