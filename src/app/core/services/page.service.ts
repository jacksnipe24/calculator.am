import { Injectable } from '@angular/core';
import { PageContent } from '../../models/page';
import { pages } from '../../configs/db/db';

@Injectable()
export class PageService {
  constructor() {}

  getPage(name: string): PageContent {
    return pages[name];
  }
}
