import GameBase from './GameBase'
import Bird from './Bird'
import GameObject from './GameObject'
import Sprite from "./Sprite";
import Tunnel from "./Tunnel"
import Preloader from './Preloader'
import h from './h'

class Game extends GameBase{
  bird: Bird
  tunnels: Tunnel[]
  logo: Sprite
  _game: HTMLElement
  preloader: Preloader
  constructor(public width: number, public height: number,
  public    resources: string[]) {
    super()
    const progress = (p) =>  console.log(p)
    this.preloader = new Preloader(this.resources, progress, this.init.bind(this) )

  }
  init() {

     this._game = h('div', {className: 'game'},[]) as HTMLElement
    document.body.appendChild(this._game)

    const bg = h('div', {className: 'bg'},
    []) as HTMLElement
    bg.style.width = this.width + 'px'
    bg.style.height = this.height + 'px'
    bg.style.backgroundImage = 'url(./img/bg.jpg)'
    this._game.appendChild(bg)
    // this.add(bg)

    this.bird = new Bird()

    // create start stage

    this.logo  = new Sprite('./img/head.jpg')
    this.logo.x = this.width /2 - this.logo.width/2
    this.logo.y = 40
    this.add(this.logo)
  }
  add (obj: GameObject) {
    this._game.appendChild(obj.object)
  }
}

export default Game
