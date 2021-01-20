class rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX= offsetX

        this.offsetY = offsetY

      var  options = {
          bodyA:body1,
          bodyB:body2,
          
         stiffness:0.03,
         length:500,
         pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.body = Constraint.create(options)
      World.add(world,this.body)
    }
    display()
    {
       var pointA = this.body.bodyA.position

       var pointB = this.body.bodyB.position

       strokeWeight(2)

      var Anchor1X = pointA.x

      var Anchor1Y = pointA.y

      var Anchor2X = pointB.x + this.offsetX

      var Anchor2Y = pointB.y + this.offsetY


       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
}