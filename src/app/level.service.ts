import { Injectable } from '@angular/core';
import { ClockService, Vector, CameraService, ViewportService } from '@ngine/core';
import { Observable, Subject } from 'rxjs/rx';

@Injectable()
export class LevelService {

  private readonly INCREASE_AMOUNT = 2;   // How much to increase the speed by
  private readonly INCREASE_EVERY = 200;  // Increase speed every x moves
  // private readonly INCREASE_EVERY = 1000000000000;
  private readonly BASE_SPEED = 5;        // Starting speed

  public readonly OBSTACLE_OFFSET = 100; // Spacing between obstacles
  public readonly NUM_OBSTACLES = Math.floor(this.viewport.getWidth() / this.OBSTACLE_OFFSET) * 2;

  private readonly MAX_VELOCITY = 0.05;
  private readonly NEXT_ACCELERATION_MIN = 10;
  private readonly NEXT_ACCELERATION_MAX = 40;
  private readonly MAX_ACCELERATION = 0.02;
  private readonly MIN_ACCELERATION = -0.02;

  private readonly MAX_GAP = 0.5;
  private readonly MIN_GAP = 0.3;
  private readonly STARTING_GAP = 0.5;
  private readonly START_HEIGHT = 0.5;
  private readonly OBSTACLE_PADDING = 0.05;

  public position$;
  public obstacles$;

  public gameOver$: any = new Subject<boolean>();

  constructor(
    private clock: ClockService,
    private camera: CameraService,
    private viewport: ViewportService,
  ) {
    const timer$ = this.clock.tick
      .scan((x) => x + 1, 0);

    const speed$ = timer$
      .filter((x) => x % this.INCREASE_EVERY === 0)
      .map((x) => Math.floor(x / this.INCREASE_EVERY) * this.INCREASE_AMOUNT + this.BASE_SPEED)
      .startWith(this.BASE_SPEED);

    this.position$ = timer$
      .withLatestFrom(speed$)
      .scan((prev, [time, speed]) => prev + speed, 0)
      .takeUntil(this.gameOver$);

    const obstaclePos$ = this.position$
      .withLatestFrom(speed$)
      .filter(([x, speed]) => x % this.OBSTACLE_OFFSET < speed)
      .scan((x) => x + 1, this.NUM_OBSTACLES)
      .map((obstacleNum) => (obstacleNum - 1) * this.OBSTACLE_OFFSET);

    const terrainAcceleration$ = Observable.of(null)
      .concatMap(() => {
        return timer$
          .skip(Math.floor(this.randomNum(
            this.NEXT_ACCELERATION_MIN,
            this.NEXT_ACCELERATION_MAX
          )))
          .first();
      })
      .repeat()
      .map(() => this.randomNum(this.MIN_ACCELERATION, this.MAX_ACCELERATION));
    const terrainHeight$ = this.accelerateify(
      obstaclePos$,
      terrainAcceleration$,
      this.MAX_VELOCITY,
      0.1,
      0.9,
      this.START_HEIGHT,
    ).startWith(this.START_HEIGHT);

    const gapHeight$ = this.accelerateify(
      obstaclePos$,
      terrainAcceleration$,
      this.MAX_VELOCITY,
      this.MIN_GAP,
      this.MAX_GAP,
      this.STARTING_GAP
    )
    .startWith(this.STARTING_GAP);

    const startingObstacles = Array(this.NUM_OBSTACLES).fill(0).map((_, i) => {
      return [
        new Vector(i * this.OBSTACLE_OFFSET, this.START_HEIGHT - this.STARTING_GAP / 2),
        new Vector(i * this.OBSTACLE_OFFSET, this.START_HEIGHT + this.STARTING_GAP / 2),
      ];
    });

    this.obstacles$ = obstaclePos$
      .withLatestFrom(terrainHeight$, gapHeight$)
      .map(([obstaclePos, terrainHeight, gapHeight]) => {
        return [
          // Bottom
          new Vector(
            obstaclePos,
            Math.max(terrainHeight - (gapHeight / 2), this.OBSTACLE_PADDING)
          ),
          // Top
          new Vector(
            obstaclePos,
            Math.min(terrainHeight + (gapHeight / 2), 1 - this.OBSTACLE_PADDING)
          ),
        ];
      })
      .share()
      .startWith(...startingObstacles);
  }

  randomNum (min, max) {
    return Math.random() * (max - min) + min;
  }

  startGame () {
    this.position$
      .subscribe((position) => {
        this.camera.getActive().setPosition(
          new Vector(position, 0)
        );
      });

    this.position$
      .subscribe((score) => {
        document.getElementById('score').innerText = score;
      });

    this.gameOver$
      .subscribe(() => {
        document.getElementById('game-over').style.display = 'block';
      });
  }

  gameOver () {
    this.gameOver$.next(true);
  }

  accelerateify (
    tick$: Observable<any>,
    accelerate$: Observable<number>,
    maxVelocity: number,
    minPosition: number = null,
    maxPosition: number = null,
    startPos: number = 0,
  ) {
    const velocity$ = tick$
      .withLatestFrom(accelerate$)
      .scan((prev, [tick, acceleration]) => {
        return Math.max(
          Math.min(prev + acceleration, maxVelocity),
          maxVelocity * -1
        );
      }, 0);

    return velocity$
      .scan((prev, velocity) => {
        let position = prev + velocity;
        if (minPosition !== null) {
          position = Math.max(position, minPosition);
        }
        if (maxPosition !== null) {
          position = Math.min(position, maxPosition);
        }
        return position;
      }, startPos);
  }
}
