class Bird extends BaseClass
{
  constructor(x,y)
  {
    // super is used to tansfer properties for parent class to child class through the parent class constructer 
    super(x,y,50,50);

  }

  display()
  {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    super.display() 
  }
}