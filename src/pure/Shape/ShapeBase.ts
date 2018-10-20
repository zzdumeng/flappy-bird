import GameObject from '../GameObject'
import h from '../h'

enum ShapeType {
  Circle,
  Rectangle,
}
class Shape extends GameObject{
  shape: HTMLElement
  constructor() {
    super()
    const shape = <HTMLElement> h('div', {className: 'pure-shape'}, [])
    this.shape = shape
    this.addChild(shape)
    // super.init()
  }

  draw() {

  }

  fill(c: string) {
    this.shape.style.backgroundColor = c
  } 

  opacity(o: number) {
    this.shape.style.opacity = String(o)
  }
}

export default Shape
export {ShapeType}
