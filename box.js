class Block 
{
  constructor(x,y,w,h) 
  {
    var blockfeatures = {
        restitution : 1
      } 
      this.block = Bodies.rectangle (x,y,w,h,blockfeatures)
      World.add(myWorld,this.block)
      this.w= w  
      this.h = h
      
  }
  display ()
  {
    push ()
    translate (this.block.position.x,this.block.position.y) 
    rotate (this.block.angle)
  rectMode(CENTER)
  rect (0,0,this.w,this.h)
  pop ()
  }
}
