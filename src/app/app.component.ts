import { Component } from '@angular/core';
import { LevelService } from './level.service';

@Component({
  selector: 'app-root',
  template: `
    <app-player></app-player>
    <app-obstacles [flipped]="false"></app-obstacles>
    <app-obstacles [flipped]="true"></app-obstacles>
  `,
})
export class AppComponent {
  constructor (
    private level: LevelService,
  ) {}

  ngOnInit () {
    this.level.startGame();
  }
}
