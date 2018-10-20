import Scene from './pure/Scene'
import GameBase from './pure/GameBase'
import Sprite from './pure/Sprite'
import Bird from './Bird'

class StartScene extends Scene {
  constructor(public game: GameBase) {
    super(game)

  }

  // do the stuff related on geometry
  init() {
    super.init()

    const logo = new Sprite(['./img/head.jpg'])
    const bg = new Sprite(['./img/bg.jpg'])
    const start = new Sprite(['./img/start.jpg'])
    const bird = new Bird(0.2)

    start.on('click', function() {
      this.game.showScene('main')
    }.bind(this))

    this.add(bg).add(logo).add(start)
    .add(bird)

    window.requestAnimationFrame(function() {

      logo.x = (this.game.width - logo.width ) / 2
      logo.y = 100
      start.x = (this.game.width - start.width ) / 2
      start.y = this.game.height - 100
      bird.x = (this.game.width - bird.width ) / 2
      bird.y =  200
    }.bind(this))
  }
}

export default StartScene
