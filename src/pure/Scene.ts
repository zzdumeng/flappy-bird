import TimeTarget from './TimeTarget'
import GameBase from './GameBase'
import GameObject from './GameObject'
import h from './h'

class Scene extends TimeTarget{

  objects: GameObject[] = [];
  container: HTMLElement
  constructor(public game: GameBase) {
    super()
    const c = <HTMLElement> h('div', {className: 'pure-scene' }, [])
    this.container = c

    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }
  init() {

  }
  show() {
    this.container.hidden = false
  }
  hide() {
    this.container.hidden = true
  }
  add(obj: GameObject) {

    this.objects.push(obj)
    this.container.appendChild(obj.object)
    return this
  }

  remove(obj: GameObject) {
    const i = this.objects.indexOf(obj)
    if(i!==-1) {
      this.objects.splice(i, 1)
      this.container.removeChild(obj.object)
    }
    return this
  }

}

export default Scene
