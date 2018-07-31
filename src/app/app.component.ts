import { Component } from '@angular/core';

import { Memo } from './app.model';
import { AppService } from './app.service';

/**
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  /** */
  memo: string = '';

  /**  */
  items: Memo[] = [];

  /**
   *
   * @param appService
   */
  constructor(private appService: AppService) {

  }

  /**
   *
   */
  register(): void {
    this.appService.post(this.memo).subscribe(state => {
      alert('success');
    });
  }

  /**
   *
   */
  refresh(): void {
    this.appService.get().subscribe(data => {
      this.items = data;
    });
  }
}
