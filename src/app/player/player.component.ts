import { Component, OnInit } from '@angular/core';
import { AssetService, KeyService, SpriteStyle, StyleBinding, ViewportService, ClockService } from '@ngine/core';
import { Observable } from 'rxjs/rx';

import { LevelService } from '../level.service';

@Component({
  selector: 'app-player',
  template: ``,
  providers: [ SpriteStyle ],
})
export class PlayerComponent implements OnInit {

  private readonly RELATIVE_SIZE = 0.025;

  private readonly ACCELARATION = 0.001;
  private readonly MAX_VELOCITY = 0.01;
  private readonly GRAVITY = -0.001;

  constructor(
    private assets: AssetService,
    private keys: KeyService,
    private viewport: ViewportService,
    private clock: ClockService,
    private level: LevelService,
    @StyleBinding() private style: SpriteStyle,
  ) { }

  ngOnInit() {
    // this.clock.tick.subscribe(() => {
    //   this.style.position.x += 5;
    // });
    this.level.position$.subscribe((x) => {
      this.style.position.x = x;
    });

    this.assets
      .loadImages([ { path: '/assets/img/player.png' } ])
      .subscribe(([playerImage]) => {
        this.style.image = playerImage.style;
        const size = this.viewport.relativeY(this.RELATIVE_SIZE) /
            playerImage.data.image.height;
        this.style.scale = this.style.scale.setX(size).setY(size);

        this.style.position = this.style.position
          .setY(0)
          .setZ(5);
      });

    const acceleration$ = Observable.merge(
      this.keys.keyDown.get('space').map(() => this.ACCELARATION),
      this.keys.keyUp.get('space').map(() => this.GRAVITY)
    ).startWith(this.GRAVITY);

    const position$ = this.level.accelerateify(
      <any> this.clock.tick,
      acceleration$,
      this.MAX_VELOCITY,
      -0.5,
      0.5,
      0
    );

    position$
      .takeUntil(this.level.gameOver$)
      .subscribe((position) => {
        this.style.position.y = this.viewport.relativeY(position);
      });

    this.level.position$
      .map((x) => x + this.viewport.relativeX(0.5))
      .withLatestFrom(
        position$.map((x) => x + 0.5),
        this.level.obstacles$.scan((acc, current) => {
          return [...acc, current].slice(this.level.NUM_OBSTACLES * -1);
        }, [])
      )
      .filter(([positionX, positionY, obstacles]) => {
        const matches = obstacles.filter(([bottomObstacle, topObstacle]) => {
          return (
            positionX > bottomObstacle.x &&
            positionX < (bottomObstacle.x + this.level.OBSTACLE_OFFSET)
          ) && (
            positionY < (bottomObstacle.y) ||
            positionY > (topObstacle.y)
          );
        });
        return matches.length > 0;
      })
      .subscribe(() => {
        this.level.gameOver();
      });
  }

}
