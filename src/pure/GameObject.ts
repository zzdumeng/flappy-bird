import TimeTarget from './TimeTarget'

class GameObject extends TimeTarget{
  object: HTMLElement
  constructor() {
    super()
  }
  init() {
    this.object.classList.add('pure-game-object')
  }
  update(dt) {

  }

  on(e: string, cb ) {
    // this.object.addEventListener(e, cb)
    this.object.addEventListener(e, function() {
      console.log('[game object] clicked')
      cb()
    })
  }

  off(e:string, cb) {
    this.object.removeEventListener(e, cb)
  }

  set zIndex(ni) {
    this.object.style.zIndex = ni
  }

  set x(nv) {
    this.object.style.left = nv + 'px' 
  }
  set y(nv) {

    this.object.style.top = nv + 'px' 
  }

  get width():number {
    return this.object.offsetWidth
  }
  set width(nw) {
    this.object.style.width = nw + 'px'
  }
  get height(): number {

    return this.object.offsetHeight
  }
  set height(nh) {
    this.object.style.height = nh + 'px'
  }
}

export default GameObject
