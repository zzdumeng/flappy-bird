import GameObject from './GameObject'
import h from './h'

class Sprite extends GameObject{
  constructor(url: string) {
    super()
    const sprite = <HTMLImageElement> h('img', {src: url, 
    className: 'sprite'}, [])
    this.object = sprite
  }
}

export default Sprite
