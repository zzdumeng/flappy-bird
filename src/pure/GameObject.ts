import TimeTarget from './TimeTarget'
import h from './h'

class GameObject extends TimeTarget{
  object: HTMLElement
  constructor() {
    super()
    this.object = h('div', {className: 'pure-game-object'}, []) as HTMLElement
  }
  // init() {
  //   this.object.classList.add('pure-game-object')
  // }
  update(dt) {

  }
  protected addChild(ele: HTMLElement) {
    this.object.appendChild(ele)
  }
  append(o: GameObject) {
    this.object.appendChild(o.object)
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

  get x() {
    return this.object.offsetLeft
  }
  get y() {
    return this.object.offsetTop
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
