import TimeTarget from './TimeTarget'
import Scene from './Scene'
import h from './h'

class GameBase extends TimeTarget {
  container: HTMLElement
  currentScene: Scene
  scenes: {} = {};
  constructor(public width: number, public height: number) {
    super()

    //
    const container = h('div', { className: 'pure-game' }, []) as HTMLElement
    container.style.width = width + 'px'
    container.style.height = height + 'px'

    this.container = container
    document.body.appendChild(container)
    this.addScene = this.addScene.bind(this)
  }

  // get width () {
  //   return
  // }

  // get height() {

  // }

  addScene(name: string, scene: Scene) {
    this.scenes[name] = scene
    this.container.appendChild(scene.container)
    scene.hide()
    scene.init()
    return this
  }
  showScene(name: string) {
    if (this.scenes[name]) {
      if (this.currentScene) {
        this.currentScene.hide()
      }
      this.currentScene = this.scenes[name]
      this.currentScene.show()
    }
  }
  removeScene(name: string | Scene) {
    if (name instanceof Scene) {
      for (let k in this.scenes) {
        if (this.scenes[k] === name) {
          this.container.removeChild(this.scenes[k].container)
          this.scenes[k] = null
          break
        }
      }
      if (this.currentScene === name) {
        this.currentScene = null
      }
    } else {
      if (this.scenes[name] === this.currentScene) this.currentScene = null
      this.container.removeChild(this.scenes[name].container)
      this.scenes[name] = null
    }
  }
}

export default GameBase
