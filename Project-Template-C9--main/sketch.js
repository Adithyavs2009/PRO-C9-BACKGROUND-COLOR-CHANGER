
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
   // write the code to change background color to blue when LEFT_ARROW is pressed

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
  // write the code to change background color to yellow when UP_ARROW is pressed
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }
 // write the code to change background color to green when DOWN_ARROW is pressed
  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

