let image_filelist = ['images/apple.jpeg','images/orange.jpeg','images/banana.jpeg'];
let imagelist = [];


let a = ["apple","orange","banana"]
print(a[0]); // print "apple"
print(a[1]); // "orange"
print(a[2]); // "banana"
print(a.length); // 3 <- number of objects

function preload() {
  for(let filename of image_filelist){
    imagelist.push( loadImage(filename) );
  }
  
  print(imagelist.length+ " images are loaded into the list!");

}

function draw() {
  show();
}

let current_image = 0;

function show(){
  image(imagelist[current_image], 0, 0);
}

function next(){
  current_image = current_image + 1;
  if(current_image > imagelist.length - 1){
    current_image = 0;
  }
  print("next image is " + current_image);
}

function prev(){
  current_image = current_image - 1;
  if(current_image < 0){
    current_image = imagelist.length -1;
  }
  
  print("previous image is "+ current_image);
}

//step 6

let nextButton;
let prevButton;

function setup() {
  createCanvas(600, 400); 

  prevButton = createButton('prev');
  prevButton.mousePressed(prev);
  
  nextButton = createButton('next');
  nextButton.mousePressed(prev);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}