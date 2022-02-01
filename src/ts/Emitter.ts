import { ParticleContainer } from 'pixi.js';
import particles = require('pixi-particles');
// import { getSmily } from './Textures';
// import * as PIXI from 'pixi.js';

export class Emitter extends ParticleContainer {
  private pEmitter: particles.Emitter;

  constructor(maxCount: number, props?:any) {
    super(maxCount, props);
    this.pEmitter = new particles.Emitter(this,
      // [getSmily(), getSmily(), getSmily()],
      ["../assets/img/gold.png"],

      {
        "alpha": {
          "start": 1,
          "end": 0.31
        },
        "scale": {
          "start": 0.5,
          "end": 1
        },
        "color": {
          "start": "ffffff",
          "end": "9ff3ff"
        },
        "speed": {
          "start": 1000,
          "end": 200
        },
        "startRotation": {
          "min": 225,
          "max": 320
        },
        "rotationSpeed": {
          "min": 0,
          "max": 20
        },
        "lifetime": {
          "min": 0.25,
          "max": 1
        },
        "blendMode": "normal",
        "frequency": 0.001,
        "emitterLifetime": 5,
        "maxParticles": 10000,
        "pos": {
          "x": 12,
          "y": 200
        },
        "addAtBack": true,
        "spawnType": "circle",
        "spawnCircle": {
          "x": 0,
          "y": 0,
          "r": 0
        }
      });
  }

  public start(): void {
    this.pEmitter.emit = true;
  }

  public update(delta: number): void {
    this.pEmitter.update(delta * 0.001);
  }
}
