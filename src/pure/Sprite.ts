import GameObject from './GameObject'
import GameTime from './GameTime'
import h from './h'

class Sprite extends GameObject {
  deltaTime: number = 0
  index = 0
  constructor(public sheets: string[], public speed: number = 0.5) {
    super()
    const sprite = <HTMLImageElement>h(
      'img',
      {
        src: sheets[0],
        className: 'pure-sprite',
      },
      []
    )
    this.object = sprite
    this.deltaTime = GameTime.elapsedTime
    super.init()
    // this.start(this)
  }

  update(dt) {
    if (this.sheets.length > 1) {
      if (GameTime.elapsedTime - this.deltaTime >= this.speed) {
        let i = this.index + 1
        if(i>=this.sheets.length) i = 0
        this.index = i
        this.object.src = this.sheets[i]
        this.deltaTime = GameTime.elapsedTime
      }
    }
  }
}

export default Sprite
