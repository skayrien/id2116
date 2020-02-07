let song;

let playing = 0;

let brightness = 0;

let level;
let size;

let playImage; // adam levine mouth open
let stopImage; // adam levine mouth closed

//a variable to store background image
let bgImage;

function preload(){
    song = loadSound('song/song1.mp3');
}

function setup() {
  cnv=createCanvas(900, 600);
  amplitude = new p5.Amplitude();
  
  playImage = loadImage("image/adamsinging.png");
  stopImage = loadImage("image/adamnotsinging.png");
  
  bgImage = stopImage; //set default bgimage to adam not singing

}

function draw() {
  background(100);
  imageMode(CENTER);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  if (size <12) {
    brightness = 0
  }else{
    brightness = 1
    
  }
    
  if(brightness == 1){
   image(playImage,width/2,height/2,900,600);
  }else{
   image(stopImage,width/2,height/2,900,600);
  }
  
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause(); 
  } else {
    song.play();
  }
     if(brightness === 0) {
    on();
   } else {
     off();
   }
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
    }
}

function play(){
  playing = 1; 
  bgImage = playImage;
  
  song.play();
}

function pause(){
  playing = 0; 
  
  
  song.pause();
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