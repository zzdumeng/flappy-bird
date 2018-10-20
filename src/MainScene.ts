import Scene from './pure/Scene'
import GameBase from './pure/GameBase'
import Sprite from './pure/Sprite'
import Bird from './Bird'
import Grass from './Grass'
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

    const bg = new Sprite(['./img/bg.jpg'])
    const bird = new Bird(0.2)
    const grass = new Grass()

    this.add(bg).add(bird).add(grass)

    window.requestAnimationFrame(function() {

      bird.x = (this.game.width - bird.width ) / 2
      bird.y =  200
      grass.y = 423
      grass.x = 0
    }.bind(this))
  }
}

export default MainScene
