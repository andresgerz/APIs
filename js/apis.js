
// function begin(){

// //quadrat figures
//   var element = document.getElementById("picture");

//   picture = element.getContext("2d");
  
//   picture.fillStyle = "blue";

//   picture.globalAlpha = 0.65;  

//   picture.fillRect(110,110,100,100);
//   picture.strokeRect(10,10,50,50);
//   picture.fillRect(135,135,50,50);
//   picture.clearRect(150,130,40,40);

// //==================================================================================
// //Lineal Gradient

//   var element2 = document.getElementById("gradient");

//   gradient = element2.getContext("2d");

//   var grad = gradient.createLinearGradient(0,200,1000,200);

//   grad.addColorStop(0.25,"red");

//   grad.addColorStop(1,"darkgreen");

//   gradient.fillStyle = grad;

//   gradient.fillRect(0,0,600,400);

// //========================================================================================
// //Radial Gradient

//   var element3 = document.getElementById("radial");

//   radial = element3.getContext("2d");

//   var grad2 = radial.createRadialGradient(300,200,100,300,200,150);

//   grad2.addColorStop(0,"orange");
//   grad2.addColorStop(1,"skyblue");

//   radial.fillStyle = grad2;
//   radial.fillRect(0,0,600,400);

// //========================================================================================
// //Sketch

//   var element4 = document.getElementById("sketch");

//   sketch = element4.getContext("2d");

//   sketch.beginPath();
//   sketch.moveTo(100,300);
//   sketch.lineTo(400,300);
//   sketch.lineTo(500,100);
//   sketch.lineTo(200,100);

//   sketch.clip();                        //This mask cover the lines

//   sketch.beginPath();

//   for(i=0;i<600;i+=10){
//     sketch.moveTo(i,0);
//     sketch.lineTo(i,400);
//   }

//   for(j=0;j<400;j+=10){
//     sketch.moveTo(0,j);
//     sketch.lineTo(600,j);
//   }

//   sketch.stroke();



// //========================================================================================
// //Curves

//   var element5 = document.getElementById("curves")
//   curves=element5.getContext("2d");

//   curves.beginPath();
//   curves.arc(460,80,40,0,Math.PI,false);

//   curves.moveTo(50,50);
//   curves.quadraticCurveTo(100,125,50,200,false);
  
//   curves.moveTo(350,150);
//   curves.bezierCurveTo(300,225,400,225,350,300);
//   curves.stroke();

// //========================================================================================
// //Face

//   var element6=document.getElementById("face");
//   face=element6.getContext("2d");

//   face.arc(300,200,100,0,2*Math.PI,false); 
//   face.stroke();

//   face.lineWidth=10;  
//   face.lineCap="round";
//   face.beginPath();

//   face.arc(300,220,50,0,Math.PI,false);
//   face.stroke();
//   face.lineWidth=5;
//   face.lineJoin="miter";
//   face.beginPath();

//   face.moveTo(290,180);
//   face.lineTo(310,200);
//   face.lineTo(290,200);
//   face.stroke();

//   lineWidth=10;
//   face.beginPath();
//   face.arc(275,155,5,0,2*Math.PI,false);  
//   face.arc(335,155,5,0,2*Math.PI,false);  
//   face.fill();

//   face.beginPath();
//   face.arc(270,150,15,0,2*Math.PI,false);
//   face.stroke();
  
//   face.beginPath();
//   face.arc(330,150,15,0,2*Math.PI,false);  
//   face.stroke();


// var element7 = document.getElementById("black");

//   black=element7.getContext("2d");

//   black.shadowColor="rgba(0,0,0,0.5)";
//   black.shadowOffsetX=4;
//   black.shadowOffsetY=4;
//   black.shadowBlur=5;
//   black.font="bold 50px timesroman";
//   black.textAlign="start";
//   black.textBaseline="top";
//   black.fillText("Hallo",200,200);

//   black.moveTo(100,100);
//   black.lineTo(200,100);
//   black.stroke();

//   var dimensions = black.measureText("Hallo");

//   black.strokeRect(200,200,dimensions.width,60);

// //=======================================================================================
// //Transforms

//   var element8=document.getElementById("transform");

//   transform = element8.getContext("2d");

//   transform.font = "bold 20px verdana";
//   transform.fillText("Hello students",50,30);
//   transform.translate(1200,900); 
//   transform.scale(3,3);
//   transform.rotate(Math.PI);
//   transform.fillText("Hello students",50,30);



// //=======================================================================================

// var element9=document.getElementById("transformation");

//   transformation=element9.getContext("2d");

//   transformation.transform(1,0,0,1,0,0);
//   transformation.font="bold 20px verdana";
//   transformation.fillText("Einverstanden",50,50);



// //=======================================================================================

// var element10=document.getElementById("superposition");

//   superposition=element10.getContext("2d");

//   superposition.fillStyle="#880000";
//   superposition.fillRect(400,250,300,100);

//   superposition.globalCompositeOperation="source-out"; 

//   superposition.fillStyle="#AAAAFF";
//   superposition.font="bold 80px verdana";
//   superposition.textAlign="center";
//   superposition.textBaseline="middle";
//   superposition.fillText("Hello students", 550, 300);


// //=======================================================================================

// var element11=document.getElementById("images");

//   images=element11.getContext("2d");

//   var imagen = new Image();

//   imagen.src = "./images/html-logo.jpg";

//   imagen.addEventListener("load", function(){
//     images.drawImage(imagen, 250, 0, 250, 500, 0, 0, 400, 400)}, false);


// //=======================================================================================

// var element12=document.getElementById("image2");

//   image2=element12.getContext("2d");

//   var imagen2 = new Image();

//   imagen2.src = "./images/html-logo.jpg";

//   imagen2.addEventListener("load", function(){
//     image2.drawImage(imagen2, 0, 0, element12.width, element12.height)}, false);    


//=======================================================================================================================================
// getImageData(), putImageData() and createImageData() don't function in google chrome browser, this function with firefox browser

//   var element13=document.getElementById("image3");
//   image3=element13.getContext("2d");

//   var imagen3 = new Image();
//   imagen3.src = "images/rick01.png";
//   imagen3.addEventListener("load", manipulateImage, false);


// function manipulateImage(e){

//   imagen3=e.target;
//   image3.drawImage(imagen3, 0, 0);
  
//   var info_imagen=image3.getImageData(0, 0, 696, 1082);

//   var position;

//   for(x=0; x<=696; x++){
//     for(y=0; y<=1082; y++){

//       position=(info_imagen.width*4*y)+(x*4); 

//       info_imagen.data[position]=255-info_imagen.data[position];
//       info_imagen.data[position+1]=255-info_imagen.data[position+1];
//       info_imagen.data[position+2]=255-info_imagen.data[position+2];

//     }
//   }

//   image3.putImageData(info_imagen, 700, 0);
// }

//======================================================================================================
// Canvas: Animations

// var element14 = document.getElementById("animation");

//   animation = element14.getContext("2d");

//   setInterval(toAnimate, 0.01);

// var y=540;
// var state="down";
// var height=y+20;

// function toAnimate(){
 
//   animation.clearRect(0, 0, 1200, 900);
//     animation.beginPath();
//   animation.arc(500, y, 40, 0, Math.PI*2, false);
//   animation.fill();

  
//   if(y<=860 && state=="down"){
//     y+=1;
//     console.log(y);
//   }

//   if(y==861){
//     height+=50;
//     state="up";
//   }
 
//   if(height<=y && state=="up"){
//     state="up";
//     y-=1;
//     console.log(y);
//   }

//   if(y==height){
//     state="down";
    
//   }
//   console.log(y);
// }
//==========================================================================================================================
//Animation 2

//   var element15 = document.getElementById("animation2");

//   animation2 = element15.getContext("2d");

//   window.addEventListener("mousemove", toAnimate2, false);


// function toAnimate2(e) {

//   animation2.clearRect(0, 0, 1200, 900);

//   var xMouse = e.clientX;
//   var yMouse = e.clientY;
//   var xCenter = 550;
//   var yCenter = 325;

//   var angle=Math.atan2(xMouse-xCenter, yMouse-yCenter);
//   var x=xCenter+Math.round(Math.sin(angle)*10);
//   var y=yCenter+Math.round(Math.cos(angle)*10);

//   animation2.beginPath();
//   animation2.arc(xCenter, yCenter, 20, 0, Math.PI*2, false); 
//   animation2.moveTo(620, 325);
//   animation2.arc(600, yCenter, 20, 0, Math.PI*2, false); 
//   animation2.stroke();  

//   animation2.beginPath();
//   animation2.arc(x, y, 10, 0, Math.PI*2, false); 
//   animation2.moveTo(x, y);
//   animation2.arc(x+50, y, 10, 0, Math.PI*2, false); 
//   animation2.fill();  
// }

// //======================================================================================================
// }

// window.addEventListener("load", begin, false);


//======================================================================================================
// API Drap & Drop: dragstart, dragend and drag

// var elem_origin;
// var elem_destination;

// function start(){

//   elem_origin = document.getElementById("bowie-tesla");

//   elem_origin.addEventListener("dragstart", begin_drag, false );

//   elem_destination = document.getElementById("destination");
  
//   elem_destination.addEventListener("dragover", function(e){
//     e.preventDefault();} , false);

//   elem_destination.addEventListener("drop", dropping, false);

//   elem_origin.addEventListener("dragend", finished, false);

//   elem_destination.addEventListener("dragenter", entering, false);

//   elem_destination.addEventListener("dragleave", leaving, false);

        
//   function begin_drag(e){

//     var code="<img src='" + elem_origin.getAttribute("src") + "'>";

//     e.dataTransfer.setData("Text", code);
//   }

//   function dropping(e){

//     e.preventDefault();
//     elem_destination.innerHTML = e.dataTransfer.getData("Text");
//     }

//   function finished(e){

//     var element = e.target;
//     element.style.visibility="hidden";
//   }

//   function entering(e){

//     e.preventDefault();
//     elem_destination.style.background="rgba(50,255,50,0.5)";
//   }

//   function leaving(e){

//     e.preventDefault();
//     elem_destination.style.background="#FFF"; 
//   }
// };

// window.addEventListener("load", start, false);

function beginImages(){

  var images = document.querySelectorAll("#boxImages img");

  for(var i=0; i< images.length; i++){

    images[i].addEventListener("dragstart", starting, false);

    if(i != 1){

      images[i].addEventListener("dragend", finished, false);
    }
    
  }

  var elem_destination2 = document.getElementById("zoneDestination");

  elem_destination2.addEventListener("dragenter", inside, false);

  elem_destination2.addEventListener("dragover", function(e){

    e.preventDefault();}, false);

  elem_destination2.addEventListener("drop", droping, false);

  elem_destination2.addEventListener("dragleave", outside, false);


function starting(e){

  var elemen = e.target;

  e.dataTransfer.setData("Text", elemen.getAttribute("id"));
}

function droping(e){

  e.preventDefault();

  var id = e.dataTransfer.getData("Text");

  if(id != "image-II"){

    var src = document.getElementById(id).src;
    elem_destination2.innerHTML = "<img src='" + src + "'>";

  }else{

    elem_destination2.innerHTML="The image isn't admit";
    elem_destination2.style.background="#fa0000";
  }
  
}

function inside(e){
  
  e.preventDefault();

  var id = e.dataTransfer.getData("Text");

  if(id != "image-II"){
    elem_destination2.style.background="rgba(00,150,00,0.8)";

  }else{

    elem_destination2.style.background="rgba(255,00,00,0.8)";
  }
  
}

function outside(e){

  e.preventDefault();

  elem_destination2.style.background="#ffffff";
}

function finished(e){

  var element = e.target;

  element.style.visibility="hidden";
}

}

window.addEventListener("load", beginImages, false);


