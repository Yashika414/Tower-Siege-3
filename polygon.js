class Polygon 
{
  constructor(x,y,w,h) 
  {
    var polygonfeatures = {
        restitution : 1
      } 
      this.polygon = Bodies.rectangle (x,y,w,h,polygonfeatures)
      World.add(myWorld,this.polygon)
      this.w= w  
      this.h = h
      this.image = loadImage("polygon.png")
  }
  display ()
  { 
    push ()
    translate (this.polygon.position.x,this.polygon.position.y) 
    rotate (this.polygon.angle)
  imageMode(CENTER)
  image (this.image,0,0,this.w,this.h)
  pop ()
  }
}
