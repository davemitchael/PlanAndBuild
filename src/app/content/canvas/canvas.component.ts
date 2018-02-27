import { Component, OnInit } from '@angular/core';
import {Game} from '../../../../services/Game';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('DOMContentLoaded', () => {
      const game = new Game('renderCanvas');
      game.creatScene();
      game.doRender();
    });
  }

}
