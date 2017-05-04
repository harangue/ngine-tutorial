import { Component, Input } from '@angular/core';
import { AssetService, SpriteStyle, StyleBinding, ViewportService, Vector } from '@ngine/core';

export enum ObstacleColor {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
};

const OBSTACLE_COLOR_TO_PATH = {
  [ObstacleColor.RED]: '/assets/img/obstacle_3.png',
  [ObstacleColor.ORANGE]: '/assets/img/obstacle_5.png',
  [ObstacleColor.YELLOW]: '/assets/img/obstacle_4.png',
  [ObstacleColor.GREEN]: '/assets/img/obstacle_1.png',
  [ObstacleColor.BLUE]: '/assets/img/obstacle_2.png',
  [ObstacleColor.PURPLE]: '/assets/img/obstacle_6.png',
};

@Component({
  selector: 'app-obstacle',
  template: ``,
  providers: [ SpriteStyle ],
})
export class ObstacleComponent {
  private height: number;
  private flipped: boolean;
  private type: ObstacleColor;

  constructor(
    @StyleBinding() private style: SpriteStyle,
    private viewport: ViewportService,
    private assets: AssetService,
  ) {}

  setHeight (height: number) {
    this.height = height;
  }

  setFlipped (flipped: boolean) {
    if (flipped) {
      this.style.rotation.y = Math.PI;
    } else {
      this.style.rotation.y = 0;
    }
    this.flipped = flipped;
  }

  setType (type: ObstacleColor) {
    this.type = type;

    this.assets.loadImages([
      { path: OBSTACLE_COLOR_TO_PATH[this.type] }
    ]).subscribe(([image]) => {
      this.style.image = image.style;
    });
  }

  setPosition (position: number) {
    this.assets.loadImages([
      { path: OBSTACLE_COLOR_TO_PATH[this.type] }
    ]).subscribe(([image]) => {
      let pos = Vector.zero()
        .moveX(this.viewport.getWidth() / -2)
        .moveX(image.data.image.width / -2)
        .moveX(position)
        .setY(0)
        .moveY(this.viewport.getHeight() / -2)
        .moveY(this.viewport.relativeY(this.height))
        .setZ(0);

      if (this.flipped) {
        pos = pos.moveY(image.data.image.height / 2);
      } else {
        pos = pos.moveY(image.data.image.height / -2);
      }

      this.style.position = pos;
    });
  }

  // setPosition (position: number) {
  //   this.assets.loadImages([
  //     { path: OBSTACLE_COLOR_TO_PATH[this.type] }
  //   ]).subscribe(([image]) => {
  //     let pos = Vector.zero()
  //       .moveX(this.viewport.getWidth() / -2)
  //       .moveX(image.data.image.width / -2)
  //       .moveX(position)
  //       .setY(0)
  //       .setZ(0);

  //     if (this.flipped) {
  //       pos = pos
  //         .moveY(this.viewport.getHeight() / 2)
  //         .moveY(image.data.image.height / 2)
  //         .moveY(this.viewport.relativeY(this.height) * -1);
  //     } else {
  //       pos = pos
  //         .moveY(this.viewport.getHeight() / -2)
  //         .moveY(image.data.image.height / -2)
  //         .moveY(this.viewport.relativeY(this.height));
  //     }

  //     this.style.position = pos;
  //   });
  // }

}
