import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  blogtitle = 'Blogpost';
  bseurl = 'http://localhost:4200';

  constructor() {}
}
