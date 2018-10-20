import Shape from './ShapeBase'

interface Circle {
  x:number;
  y:number;
  r:number;
}

class CircleShape extends Shape {
  constructor(public data: Circle) {
  super()   

  this.draw()
  }

  draw() {
    this.x = this.data.x
    this.y = this.data.y
    this.width = this.data.r
    this.height = this.data.r

    this.object.style.borderRadius = '50%'
  }
}

export default CircleShape

