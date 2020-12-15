//Create variables here
var Dog,happydog,foodStock,foodS

var database
function preload()
{
	dogImg=loadImage("images/dogimg.png")
 happyDogImg=loadImage("images/dogimg1.png")
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10)
  dog.addImage("dog", dogImg)
  dog.scale = 0.2

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  





}


function draw() {
  background(46, 139, 87)  

  drawSprites();
  //add styles here

  stroke("blue");
  fill("white");
  textSize(18);
  text("Press The Up Arrow Key To Feed The Dog Milk", 50, 50);

  
  stroke("blue");
  fill("white");
  textSize(18);
  text("Press The down Arrow Key To stop Feeding the dog milk ", 35, 75);

  
  stroke("blue");
  fill("white");
  textSize(18);
  if(foodS){
  text("food remaining" + foodS, 150, 150);
  }


 if (keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDogImg)
 }

 if (keyWentDown(DOWN_ARROW)){
  
  dog.addImage(DogImg)
}

}


function readStock(data){
  foodS=data.val()
}

function writeStock(x){

  if(x <= 0) {
    x = 0;
  } else {
    x = x -1;
  }

  database.ref('/').update({
    food:x
  })
}
