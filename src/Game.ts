import GameObject from './pure/GameObject'
// import Sprite from "./Sprite";
// import Tunnel from "./Tunnel"
import GameBase from './pure/GameBase'
import Preloader from './pure/Preloader'
import StartScene from './StartScene'
import MainScene from './MainScene'

class Game extends GameBase{
  preloader: Preloader
  constructor(public width: number, public height: number,
  public    resources: string[]) {
    super(width, height)
    const progress = (p) =>  console.log(p)
    this.preloader = new Preloader(this.resources, progress, this.init.bind(this) )

  }
  init() {
    const startScene = new StartScene(this)
    const mainScene = new MainScene(this)

    this.addScene('start', startScene)
    this.showScene('start')

    this.addScene('main', mainScene)
  }

  // startGame() {
  //   this.showScene(this.scenes[1])
  // }



}

export default Game
