function setup() {
    createCanvas(500, 500);
    background("yellow");
  }
  
  function draw() {
  
    stroke("blue");
    fill("red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 5, 5);
    }
  }
  