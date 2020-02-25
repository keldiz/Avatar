class Mouse {
  constructor(_xPos, _yPos, _rotation, _size) {

    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

  display() {
    //eyes 
    fill(49, 41, 102);
    stroke(5);
    strokeWeight(5);

    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    stroke(55, 204, 100);
    square(this.xPos, this.yPos, 45, 20);
    pop();
  }

  move() {

    //this.angle is shorthand for this.angle = this.angle + 1;
    this.rotation++;

    if (this.yPos <= height * 2.3) {
      //this.yPos = this.yPos + 2;
      //shorthand below is +=;
      this.yPos += 2;
    } else {
      this.yPos = -height * 0.3;
    }
  }
}


  // function drawEyes(xPos, yPos, rotation) {
  //   //eyes
  //   push();
  //   rotate(rotation);
  //   fill(49, 41, 102);
  //   stroke(5);
  //   strokeWeight(5);
  //   stroke(55, 204, 100);
  //   square(xPos, yPos, 45, 20);
  //   pop();
  // }