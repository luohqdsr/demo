
import React , {Component}from 'react';


// import * as THREE from 'three';
// import * as PLYLoader from 'threejs-ply-loader';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // 注意是examples/jsm
// import {PLYLoader}  from 'three/examples/jsm/loaders/PLYLoader';
import connect from 'react-redux'
import Slider from "react-slick";
import {Image } from 'antd';
 
import THREE from "./three";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'react-native-swiper'

import 'swiper/swiper.scss';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './index.less'

class ThreeDComparison extends Component {
    
    
  
    componentDidMount(){
        this.initThree();
    }
    
    initThree(){
        
       
        var scene, camera, renderer,hemiLight,spotlight ;
        let raycaster  = new THREE.Raycaster();
        let mouse = new THREE.Vector2
        let objects = [];
        var controls

        //加载场景
        let container 
       // document.body.appendChild( container );
        init();
        animate();
        
        
        
			// function init() {


			// 	camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientWidth, 1, 1000 );
			// 	camera.position.set( 10, 100, 200 );

			// 	scene = new THREE.Scene();
			// 	scene.background = new THREE.Color( 0xa0a0a0 );
				

			// 	// Light


			// 	var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
			// 	hemiLight.position.set( 0, 200, 0 );
			// 	scene.add( hemiLight );

			// 	var directionalLight = new THREE.DirectionalLight( 0xffffff );
			// 	directionalLight.position.set( 0, 200, 100 );
			// 	directionalLight.castShadow = true;
			// 	directionalLight.shadow.camera.top = 180;
			// 	directionalLight.shadow.camera.bottom = - 100;
			// 	directionalLight.shadow.camera.left = - 120;
			// 	directionalLight.shadow.camera.right = 120;
			// 	scene.add( directionalLight );

			// 	// ground

			// 	var ground = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
			// 	ground.rotation.x = - Math.PI / 2;
			// 	ground.receiveShadow = true;
			// 	scene.add( ground );

			// 	var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
			// 	grid.material.opacity = 0.2;
			// 	grid.material.transparent = true;
			// 	scene.add( grid );

				


              

            //     var loader = new THREE.PLYLoader();
                
			// 	loader.load(exhibitObj , function ( geometry ) {
            //         console.log()

			// 		geometry.computeVertexNormals();

			// 		var material = new THREE.MeshStandardMaterial( { color: 0x0055ff, flatShading: true } );
			// 		var mesh = new THREE.Mesh( geometry, material );

			// 		mesh = new THREE.Mesh( geometry, material );
			// 		mesh.castShadow = true;
			// 		mesh.position.y = 25;

			// 		scene.add( mesh );

			// 	} );

				

			// 	//

			// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
			// 	renderer.setPixelRatio( window.devicePixelRatio );
			// 	renderer.setSize( container.clientWidth, container.clientHeight );
			// 	renderer.shadowMap.enabled = true;
			// 	container.appendChild( renderer.domElement );

			// 	//

			// 	var controls = new OrbitControls( camera, renderer.domElement );
			// 	controls.target.set( 0, 25, 0 );
			// 	controls.update();



			// }




        function init(){
            container = document.getElementById('plantCanvas');
            
            //加载相机
           
            console.log(container.clientWidth, container.clientHeight);

            camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
            camera.position.set(10, 50, 10);
           

            //cameraTarget = new THREE.Vector3(0, 0, 0);

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);

            


            
            
            //地板
            const plane = new THREE.Mesh(
                new THREE.PlaneBufferGeometry(60, 60),
                new THREE.MeshPhongMaterial({
                    color: 0xF4A460,
                    specular: 0x101010
                })
            )
            plane.position.y = -0.5;
            plane.rotation.x = -Math.PI / 2;
            plane.receiveShadow = true;
            scene.add(plane);

   
 
            var loader = new THREE.PLYLoader();
            let sd = 100;
            
            const plyLoad =(doucument,path) =>{
            const pathdata1="/data/1T001/"+doucument+"/Reconstruction/"+path;
            const asd =pathdata1 +'.ply';
            loader.load( asd, function ( geometry ) {
                
                console.log()

                geometry.computeVertexNormals();

                var material = new THREE.MeshBasicMaterial({
                    vertexColors: THREE.VertexColors,
                    side: THREE.DoubleSide
                });
                //var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200, vertexColors: THREE.VertexColors} );
                var mesh = new THREE.Mesh(geometry, material);

                //mesh.position.y = 0;
                //mesh.position.x -= 60;
                //mesh.position.y -= 50;
                mesh.rotation.x = -Math.PI / 2;
                //mesh.scale.multiplyScalar( 0.001 );
                mesh.castShadow = true;
                mesh.name =path
                mesh.receiveShadow = true;
                //mesh.doubleSided = true;

                scene.add(mesh);
                objects.push(mesh);
                

            } );

            }
            const datapath =["100__2019_04_16__05_06_42__Leaf0","100__2019_04_16__05_06_42__Leaf1",
            "100__2019_04_16__05_06_42__Leaf2","100__2019_04_16__05_06_42__Leaf3","100__2019_04_16__05_06_42__Leaf4",
            "100__2019_04_16__05_06_42__Leaf5","100__2019_04_16__05_06_42__Leaf6"]
            datapath.map(v =>(
                plyLoad(sd,v)
            ))
              
               
       
                //loader.setPath('/data/1T001/100/Reconstruction/') exhibitObj1
                // loader.load( asd, function ( geometry ) {
                    
                //     console.log()

				// 	geometry.computeVertexNormals();

                //     var material = new THREE.MeshBasicMaterial({
                //         vertexColors: THREE.VertexColors,
                //         side: THREE.DoubleSide
                //     });
                //     //var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200, vertexColors: THREE.VertexColors} );
                //     var mesh = new THREE.Mesh(geometry, material);

                //     //mesh.position.y = 0;
                //     //mesh.position.x -= 60;
                //     //mesh.position.y -= 50;
                //     mesh.rotation.x = -Math.PI / 2;
                //     //mesh.scale.multiplyScalar( 0.001 );
                //     mesh.castShadow = true;
                //     mesh.receiveShadow = true;
                //     //mesh.doubleSided = true;

                //     scene.add(mesh);
                //     objects.push(mesh);
                    

                // } );

 

            // Lights
            hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
            //hemiLight.color.setHSL(0.6, 1, 0.6);
            //hemiLight.groundColor.setHSL(0.095, 1, 0.75);
            hemiLight.position.set(0, 10, 5);
            scene.add(hemiLight);

            spotlight = createSpotlight(0x555555);
            spotlight.position.set(-15, 30, 15);
            spotlight.distance = 80;
            spotlight.angle = 0.8;
            var lightHelper = new THREE.SpotLightHelper(spotlight);
            scene.add(spotlight);
            

            


            renderer = new THREE.WebGLRenderer(  );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( container.clientWidth, container.clientHeight );
            renderer.gammaInput = true;
            renderer.gammaOutput = true;
            renderer.shadowMap.enabled = true;
            container.appendChild( renderer.domElement );

            //
            

            controls = new OrbitControls( camera, renderer.domElement );
            controls.target.set(0, 0, 0);
            controls.enableKeys = false;



            window.addEventListener( 'resize', onWindowResize, false );
            container.addEventListener('click',onMouseClick, false)
           
 
           
        }
 
     

        function onMouseClick(e){
            console.log(1)
            e.preventDefault();
            mouse.x = (e.offsetX / container.clientWidth) * 2 - 1;
            mouse.y = -(e.offsetY / container.clientHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            var intersects = raycaster.intersectObjects(objects, true);//获取名称
        
            console.log(intersects)


        }

        function createSpotlight(color) {
            var newObj = new THREE.SpotLight(color, 1.5);
            newObj.castShadow = true;
            newObj.angle = 0.5;
            newObj.penumbra = 0.4;
            newObj.decay = 0.5;
            newObj.distance = 100;
            return newObj;
        }

        function animate() {
            // controls.update();
            requestAnimationFrame( animate );
            renderer.render( scene, camera );

        }
        function onWindowResize() {

            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
        
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
        function onMouseMove( event ) {
            console.log(2)

            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
        
            mouse.x = ( container.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( container.clientY / window.innerHeight ) * 2 + 1;
            console.log(mouse.x)
        }
        
      
        



        

    }

     onChange(a, b, c) {
        console.log(a, b, c);
      }
      mouseenterObject = (e)=>{
          console.log("11")
        e.preventDefault();

        // mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        // mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        
            // 鼠标坐标映射到三维坐标
            const mouse = new THREE.Vector2();
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        //             mouse.x = (e.offsetX/ container.clientWidth) * 2 - 1;
        // mouse.y = -(e.offsetY / container.clientHeight) * 2 + 1;


        
        console.log( mouse.x );

        // let mouse = new THREE.Vector2();
        // mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        // mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        // let vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);
        // let raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        // let intersects = raycaster.intersectObjects(scene.children, true); //选中的三维模型

        // console.log(intersects);
     




    }

    

    
    render(){
        const  setting ={
            className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    
      
      
       
    
        }


     
        return(
            <div className='view-content'> 
        
                <div id='plantCanvas'
               
                > </div>

                

<Swiper
        className="all-plant-image-carousel"
        spaceBetween={30}
        slidesPerView={4}
        isDuplicate={false}
        centeredSlides={true}
        navigation
        loop={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
     
     
    >
      <SwiperSlide className='plant-img'>Slide 1</SwiperSlide>
      <SwiperSlide className='plant-img'>Slide 2</SwiperSlide>
      <SwiperSlide className='plant-img'>Slide 3</SwiperSlide>
      <SwiperSlide className='plant-img'>Slide 4</SwiperSlide>
      ...
    </Swiper>


                
                
                
                 {/* <div 
                 onClick={this.mouseenterObject}
                 className='all-plant-image-carousel'
                 >
                    <Slider {...setting}>
                                <div>
                                    <div className='plant-img'>
                                        1
                                    </div>
                                </div>
                                <div>
                                    <div className='plant-img'>
                                        2
                                    </div>
                                </div>
                                <div>
                                    <div className='plant-img'>
                                        2
                                    </div>
                                </div>
                                <div>
                                    <div className='plant-img'>
                                        3
                                    </div>
                                </div>
                        
                         
                                
                        
                       

                    </Slider>

                 </div>
                  */}
                 <div className='topview-image'>
                     <div className='right-image'>
                     <Image
                        preview={false}
                        
                       
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                     </div>
                 </div>

               
                
            </div>
           
        )
    }
}
export default ThreeDComparison;