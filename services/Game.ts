import * as BABYLON from 'babylonjs';
import * as $ from 'jquery';
export class Game {
  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  private _camera: BABYLON.FreeCamera;
  private _light: BABYLON.Light;
  constructor(canvasElement: string) {
    this._canvas = <HTMLCanvasElement>$(`#${canvasElement}`)[0];
    this._canvas.height = window.innerHeight / 5;
    this._engine = new BABYLON.Engine(this._canvas, true);
  }
  creatScene(): void {
    this._scene = new BABYLON.Scene(this._engine);
    this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
    this._camera.setTarget(BABYLON.Vector3.Zero());
    this._camera.attachControl(this._canvas, false);
    this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments: 16, diameter: 2}, this._scene);
    sphere.position.y = 1;
    const ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 6, height: 6, subdivisions: 2}, this._scene);
  }
  doRender(): void {
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
    window.addEventListener('resize', () => {
      this._engine.resize();
   });
  }
}

