import Sprite from './pure/Sprite'

class Bird extends Sprite {
  constructor(speed: number = 0.5) {
  const sheets = ['./img/bird0.png', './img/bird1.png']
    super(sheets, speed)
    

  }

  update(dt) {
    super.update(dt)
  }

}

export default Bird
