class GameObject {
  private _t: number
  object: HTMLElement
  constructor() {
   
    this._t = Date.now()
    this._update = this._update.bind(this)
    window.requestAnimationFrame(this._update)
  }

  _update() {
    let dt = Date.now() -  this._t
    this.update(dt)
    window.requestAnimationFrame(this._update)
  }

  update(dt) {

  }
  set x(nv) {
    this.object.style.left = nv + 'px' 
  }
  set y(nv) {

    this.object.style.top = nv + 'px' 
  }

  get width():number {
    return this.object.clientWidth
  }
  get height(): number {

    return this.object.clientHeight
  }
}

export default GameObject
