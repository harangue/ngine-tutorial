import { Component, OnInit, ComponentFactoryResolver, ComponentFactory, ViewChild, ViewContainerRef, ComponentRef, Input } from '@angular/core';
import { ViewportService, ClockService, Vector, CameraService } from '@ngine/core';
import { Observable } from 'rxjs/rx';

import { ObstacleComponent, ObstacleColor } from '../obstacle/obstacle.component';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-obstacles',
  template: `
    <ngine-group #obstacles></ngine-group>
  `,
})
export class ObstaclesComponent implements OnInit {
  @Input() flipped: boolean;
  @ViewChild('obstacles', { read: ViewContainerRef }) obstaclesRef: ViewContainerRef;

  private readonly MAX_HEIGHT = 0.4; // Maximum height of our obstacles
  private readonly MIN_HEIGHT = 0.05; // Minimum height of our obstacles
  private readonly POS_OFFSET = 100; // Spacing between obstacles

  private readonly MOVE_AMOUNT = 5;

  private destroyStream$;
  private obstacles: ComponentRef<ObstacleComponent>[] = [];
  private obstacleFactory: ComponentFactory<ObstacleComponent>;

  constructor(
    private viewport: ViewportService,
    private clock: ClockService,
    private resolver: ComponentFactoryResolver,
    private camera: CameraService,
    private level: LevelService,
  ) { }

  ngOnInit() {
    this.obstacleFactory = this.resolver.resolveComponentFactory(ObstacleComponent);

    this.level.obstacles$
      .map(([bottom, top]) => (this.flipped) ? top : bottom)
      .subscribe((position) => {
        this.obstacles.push(this.genObstacle(position));
        if (this.obstacles.length > this.level.NUM_OBSTACLES) {
          this.obstacles.shift().destroy();
        }
      });
  }

  private genObstacle (position: Vector) {
    const ref = this.obstaclesRef.createComponent(this.obstacleFactory);
    ref.instance.setType(this.getRandomObstacleColor());
    ref.instance.setHeight(position.y);
    ref.instance.setFlipped(this.flipped);
    ref.instance.setPosition(position.x);

    return ref;
  }

  private getRandomObstacleColor (): ObstacleColor {
    const i = Math.floor(Math.random() * (5 + 1));
    return i;
  }

}

interface Obstacle {
  type: ObstacleColor;
  height: number;
  position?: number;
  defaultPosition: number;
  layer: number;
};
