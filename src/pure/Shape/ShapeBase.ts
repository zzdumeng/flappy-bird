import GameObject from '../GameObject'
import h from '../h'

enum ShapeType {
  Circle,
  Rectangle,
}
class Shape extends GameObject{
  constructor() {
    super()
    const shape = <HTMLElement> h('div', {className: 'pure-shape'}, [])
    this.object = shape

    super.init()
  }

  draw() {

  }

  fill(c: string) {
    this.object.style.backgroundColor = c
  } 

  opacity(o: number) {
    this.object.style.opacity = String(o)
  }
}

export default Shape
export {ShapeType}
