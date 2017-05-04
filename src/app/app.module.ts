import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { NgineModule } from '@ngine/core';
import { NgineThreeModule } from '@ngine/three';
// import { NgineMatterModule } from '@ngine/matter';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ObstaclesComponent } from './obstacles/obstacles.component';
import { ObstacleComponent } from './obstacle/obstacle.component';

import { LevelService } from './level.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ObstaclesComponent,
    ObstacleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Don't forget these!
    NgineModule,
    NgineThreeModule
  ],
  entryComponents: [ ObstacleComponent ],
  providers: [
    LevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
