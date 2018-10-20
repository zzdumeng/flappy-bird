import Sprite from './pure/Sprite'
import GameObject from './pure/GameObject';

class Grass extends GameObject {
  going = true;
  constructor() {
    super()
    const sheets = []
    const grass0 = new Sprite(['./img/grass.jpg'])
    const grass1 = new Sprite(['./img/grass.jpg'])
    grass0.x = 0
    grass0.y = 0
    grass1.x = 343 // TODO:
    grass1.y = 0
    this.append(grass0)
    this.append(grass1)

  }
  stop() {
    this.going = false
  }
  update(dt) {
    if(this.going) {
      const x = this.x - 100 * dt
      if(x<-343)
        this.x = 0
      else this.x = x
    }
  }

}

export default Grass
