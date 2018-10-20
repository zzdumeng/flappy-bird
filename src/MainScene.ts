import Scene from './pure/Scene'
import GameBase from './pure/GameBase'
import Sprite from './pure/Sprite'
import Bird from './Bird'
import {createShape, ShapeType} from './pure/Shape/index'

class MainScene extends Scene {
  constructor(public game: GameBase) {
    super(game)

  }

  // do the stuff related on geometry
  init() {
    super.init()
    
    const ball = createShape(ShapeType.Circle, {x:100, y:100, r: 100})
    ball.fill('blue')
    ball.on('click', ()=> this.game.showScene('start'))
    this.add(ball)
  }
}

export default MainScene
