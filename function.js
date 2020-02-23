function setup() {
  // The canvas
  can = createCanvas(canvasSize, canvasSize);
  // This creates a black background
  background(0);
  // Pressing this will start ellipse mode
  ellipseButton = createButton("Set ellipse mode")
  ellipseButton.mousePressed(ellipseModeFun)
  // Pressing this will start rect mode
  rectButton = createButton("Set rectangle mode")
  rectButton.mousePressed(rectModeFun)
  // The class of the button
  ellipseButton.class('button')
  rectButton.class('button')
}
function draw() {
  // The code for the ellipses
  if (ellipseMode === true) {
    loop()
    strokeWeight(s2.value())
    stroke(inp2.value())
    let val1 = s1.value()
    let val2 = s3.value()
    if (mouseIsPressed) {
      fill(inp1.value())
      ellipse(mouseX, mouseY, val1, val1);
    }
  } else if (rectMode === true) {
    if (mouseIsPressed) {
      loop()
      strokeWeight(s2.value())
      stroke(inp2.value())
      fill(inp1.value())
      rect(mouseX, mouseY, 20, 20)
    }
  }
}
function changeBackground() {
  background(random(0, 255), random(0, 255), random(0, 255));
}
function clearScreen() {
  if (ellipseMode === true) {
    clear();
    background(0);
    fill(255)
    inp1.color("white")
    inp2.color("black")
    s2.value(0)
  } else if (rectMode === true) {
    clear();
    background(0);
    fill(255)
    inp1.color("white")
    inp2.color("black")
    s2.value(0)
  }
}
function makeMultiColor() {
  loop()
}
function stopMulticolor() {
  noLoop()
}
function makeR() {
  sr = sr - 1
  fill(sr, sg, sb)
}
function saveYourWork() {
  i1 = createInput('Name your File')
  i1.mousePressed(clearI1)
  save1 = true
}
function keyPressed() {
  if (keyCode == ENTER) {
    if (save1 == true) {
      saveCanvas(can, i1.value(), "jpg")
    }
  }
}
function clearI1() {
  i1.value('')
}
function clearI3() {
  i3.value("")
}
function setMidShade() {
  // Finding a shade between the two
  let commonShade = lerpColor(inp1.color(), inp1.color(), 0.5);
  fill(commonShade)
}

function setShade1() {
  setMidShade();
  console.log('You are choosing shade 1 to be : ', this.value());
}
function useUneven() {
  // Any Help here?
  if (unEven = false) {
    unEven = true
    ellipse(mouseX, mouseY, s1.value(), s3.value())
  } else if (unEven = true) {
    unEven = false
  }
}
// What happens when you press the button for ellipse mode
function ellipseModeFun() {
  ellipseMode = true
  ellipsePressed = true
  rectMode = false
  if (ellipseMode === true) {
    // The area where we can change the color and stroke of the background and the shape
    p1 = createP("Change Style")
    b2 = createButton("Random Back-Ground Color");
    b2.mousePressed(changeBackground);
    inp1 = createColorPicker("white")
    inp2 = createColorPicker("black");
    s2 = createSlider(0, 25, 0)
    // The area where you can delete what you did and revert back to the basic colors and sizes
    p2 = createP("Put Back To Normal")
    b3 = createButton("Delete Changes");
    b3.mousePressed(clearScreen);
    // This is the area where you can stop painting and keep it like the way you did it so you cant mess it up or you can continue where you left off if you dont like the way you did the drawing
    p3 = createP("Finishing Touches")
    b4 = createButton("Continue Painting")
    b4.mousePressed(makeMultiColor)
    b5 = createButton("Finish Painting")
    b5.mousePressed(stopMulticolor)
    // This is where you can save your work and have it but you have to download it onto your device. Dont worry there is no malware whe you download the drawing
    p4 = createP("Save/Download Your Work")
    b7 = createButton("Save Your Work")
    b7.mousePressed(saveYourWork)
    p5 = createP("Change Size")
    b8 = createButton("Use uneven circles")
    b8.mousePressed(useUneven)
    s1 = createSlider(1, 100, 25)
    s3 = createSlider(1, 100, 25)
    colors = fill("white")
    // The classes of the buttons that I used
    b2.class('button')
    b3.class('button')
    b4.class('button')
    b5.class('button')
    b7.class('button')
    b8.class('button')
    s1.class('slider')
    // The code for the color pickers
    setMidShade();
    setMidShade();
    // The class of the sliders that I used
    s1.class('slider')
    s2.class('slider')
    s3.class("slider")
    // The class of the paragraphs that I used
    p1.class('paragraph')
    p2.class('paragraph')
    p3.class('paragraph')
    p4.class('paragraph')
    p5.class('paragraph')
  } else if (ellipseMode === true && rectMode === true) {
    b2.remove()
    b3.remove()
    b4.remove()
    b5.remove()
    b7.remove()
    b8.remove()
    s1.remove()
    s2.remove()
    s3.remove()
    p1.remove()
    p2.remove()
    p3.remove()
    p4.remove()
    p5.remove()
    inp1.remove()
    inp2.remove()
    rectMode = false
  }
}
function rectModeFun() {
  rectMode = true
  if (rectMode === true && ellipseMode === true) {
    b2.remove()
    b3.remove()
    b4.remove()
    b5.remove()
    b7.remove()
    b8.remove()
    s1.remove()
    s2.remove()
    s3.remove()
    p1.remove()
    p2.remove()
    p3.remove()
    p4.remove()
    p5.remove()
    inp1.remove()
    inp2.remove()
    ellipseMode = false
    p1 = createP("Change Style")
    b2 = createButton("Random Back-Ground Color");
    b2.mousePressed(changeBackground);
    inp1 = createColorPicker("white")
    inp2 = createColorPicker("black");
    s2 = createSlider(0, 25, 0)
    p2 = createP("Put Back To Normal")
    b3 = createButton("Delete Changes");
    b3.mousePressed(clearScreen);
    p3 = createP("Finishing Touches")
    b4 = createButton("Continue Painting")
    b4.mousePressed(makeMultiColor)
    b5 = createButton("Finish Painting")
    b5.mousePressed(stopMulticolor)
    p4 = createP("Download Item")
    b7 = createButton("Save Your Work")
    b7.mousePressed(saveYourWork)
    b2.class('button')
    b3.class('button')
    b4.class('button')
    b5.class('button')
    b7.class('button')
    b8.class('button')
    s1.class('slider')
    setMidShade();
    setMidShade();
    s1.class('slider')
    s2.class('slider')
    s3.class("slider")
    p1.class('paragraph')
    // p2.class('paragraph')
    // p3.class('paragraph')
    // p4.class('paragraph')
  } else if (rectMode === true && ellipseMode === false) {
    p1 = createP("Change Style")
    b2 = createButton("Random Back-Ground Color");
    b2.mousePressed(changeBackground);
    inp1 = createColorPicker("white")
    inp2 = createColorPicker("black");
    s2 = createSlider(0, 25, 0)
    p2 = createP("Put Back To Normal")
    b3 = createButton("Delete Changes");
    b3.mousePressed(clearScreen);
    p3 = createP("Finishing Touches")
    b4 = createButton("Continue Painting")
    b4.mousePressed(makeMultiColor)
    b5 = createButton("Finish Painting")
    b5.mousePressed(stopMulticolor)
    p4 = createP("Download Item")
    b7 = createButton("Save Your Work")
    b7.mousePressed(saveYourWork)
    b2.class('button')
    b3.class('button')
    b4.class('button')
    b5.class('button')
    b7.class('button')
    setMidShade();
    setMidShade();
  } else if (ellipseMode === true && rectMode === true) {
    b2.remove()
    b3.remove()
    b4.remove()
    b5.remove()
    b7.remove()
    b8.remove()
    s1.remove()
    s2.remove()
    s3.remove()
    p1.remove()
    p2.remove()
    p3.remove()
    p4.remove()
    p5.remove()
    inp1.remove()
    inp2.remove()
    rectMode = false
  }
}