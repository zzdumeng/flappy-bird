import h from './h'
import GameObject from './GameObject'

class Bird extends GameObject {
  constructor() {
    super()
    
    const bird = h('img', {src: './img/bird0.png'}, []) as HTMLImageElement

    this.object = bird

  }

  update(dt) {

  }

}

export default Bird
