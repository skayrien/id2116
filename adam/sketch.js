let song;

let playing = 0;

let brightness = 0;

let playImage; // adam levine mouth open
let stopImage; // adam levine mouth closed

//a variable to store background image
let bgImage;

function preload(){
    song = loadSound('song/song1.mp3');
}

function setup() {
  createCanvas(450, 300);

  
  playImage = loadImage("image/adamsinging.png");
  stopImage = loadImage("image/adamnotsinging.png");
  
  bgImage = stopImage; //set default bgimage to adam not singing

}

function draw() {
  background(220);
  imageMode(CENTER);
  if(brightness == 1){
   image(playImage,width/2,height/2,450,300);
  }else{
   image(stopImage,width/2,height/2,450,300);
  }
  
}

function mousePressed() {
  if (playing === 0) {
    play(); 
  } else {
    stop();
  }
     if(brightness === 0) {
    on();
   } else {
     off();
   }
}

function play(){
  playing = 1; 
  bgImage = playImage;
  
  song.play();
}

function stop(){
  playing = 0; 
  
  
  song.stop();
  bgImage = stopImage;
}
//function touchStarted(){
 // on();
//}

//function touchEnded(){
  //on();
//}



function on(){
   
   brightness = 1;
}

function off(){
   
   brightness = 0;
}