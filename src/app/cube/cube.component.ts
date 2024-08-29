import {AfterViewInit,Component,ElementRef, Input,OnInit,viewChild,ViewChild } from '@angular/core';
import {GLTF,GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {CSS2DRenderer} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import * as three from 'three'; 
import { TextGridComponent } from '../text-grid/text-grid.component';

@Component({
  selector: 'app-cube',
  standalone: true, 
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.css',
  imports: [TextGridComponent]
})
export class CubeComponent implements  AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef;

  @Input() public rotationSpeedX: number = 0.05;
  
  @Input() public rotationSpeedY: number = 0.01;


  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1000;

  @Input('farClipping') public farClippingPlane: number = 1000000;

  private camera!: three.PerspectiveCamera;

  private get canvas():HTMLCanvasElement{
    return this.canvasRef.nativeElement;
  }
  
  private directionlight1!:three.DirectionalLight;
  private directionlight2!:three.DirectionalLight;
  private directionlight3!:three.DirectionalLight;
  private directionlight4!:three.DirectionalLight;
  private directionlight5!:three.DirectionalLight;
  private directionlight6!:three.DirectionalLight;
  private ambientLight:three.AmbientLight;
  private loader:GLTFLoader = new GLTFLoader;
  private renderer!:three.WebGLRenderer;
  private model:three.Object3D<three.Object3DEventMap>
  private scene!:three.Scene;

  private createScene(){
    this.scene = new three.Scene();
    this.scene.background = new three.Color(0xffffff);
    this.loader.load('../../assets/sborka_nasos.gltf',(gltf:GLTF) =>{
      this . model = gltf.scene.children[0];
      var box =  new three.Box3().setFromObject(this.model);
      this.model.position.multiplyScalar(1);
      this.model.position.setZ(100)
      this.scene.add(this.model);
    });
    let aspextRatio = this.getAspectRatio();
    this.camera = new three.PerspectiveCamera(this.fieldOfView, aspextRatio, this.nearClippingPlane, this.farClippingPlane);
    this.camera.position.x = 7003;
    this.camera.position.y = 7002;
    this.camera.position.z = 13000;
    this.ambientLight = new three.AmbientLight(0x000000, 100)
    this.scene.add(this.ambientLight);
    this.directionlight1 = new three.DirectionalLight(0xffffff,0.7 );
    this.directionlight1.position.set(1,0,1);
    this.directionlight1.castShadow = false;
    this.scene.add(this.directionlight1);
    this.directionlight2 = new three.DirectionalLight(0xffffff,0.7 );
    this.directionlight2.position.set(0,0,-1);
    this.directionlight2.castShadow = true;
    this.scene.add(this.directionlight2); 
    this.directionlight3 = new three.DirectionalLight(0xffffff,0.7 );
    this.directionlight3.position.set(0,1,0);
    this.directionlight3.castShadow = true;
    this.scene.add(this.directionlight3);
    this.directionlight4 = new three.DirectionalLight(0xffffff,0.7 );
    this.directionlight4.position.set(0,-1,0);
    this.directionlight4.castShadow = true;
    this.scene.add(this.directionlight4);
    this.directionlight5 = new three.DirectionalLight(0xffffff,0.7 );
    this.directionlight5.position.set(1,0,0);
    this.directionlight5.castShadow = true;
    this.scene.add(this.directionlight2); 
    this.directionlight6 = new three.DirectionalLight(0xffffff,0.7 );
    this.directionlight6.position.set(-1,0,0);
    this.directionlight6.castShadow = true;
    this.scene.add(this.directionlight6);
  }
  private getAspectRatio(){
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private controls: OrbitControls;

  private createControls(){
    const renderer = new CSS2DRenderer();
    renderer.setSize(this.canvas.width, this.canvas.height);

    this.controls = new OrbitControls(this.camera,renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1;
    this.controls.enableZoom = true;
    this.controls.enableRotate = true;
  
  }

  private startRenderingLoop(){
    this.renderer = new three.WebGLRenderer({canvas:this.canvas, alpha:true});
      this.renderer.setPixelRatio(devicePixelRatio);
      this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
      let componennt: CubeComponent = this;
      let d = this.controls;
      (function render( ){
        requestAnimationFrame(render);
        d.update();
        componennt.renderer.render(componennt.scene, componennt.camera);
      }()
    );
  }
  ngAfterViewInit(): void {
    this.createScene();
    this.createControls();
    this.startRenderingLoop();
  }
}
