class Log extends BaseClass
{
  constructor(x,y,height,angle)
  {
    super(x,y,20,height,angle);
    
    this.image = loadImage("sprites/wood2.png");
    // whenever you need to set an angle Matter.Body.setAngle(objectname,angle)
    Matter.Body.setAngle(this.body,angle)
  }
  display ()
  {
    super.display()

  }
}