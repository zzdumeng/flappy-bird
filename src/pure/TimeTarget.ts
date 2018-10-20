import GameTime from './GameTime'
// this is the base class for all the 
// class in the frame.
//  it only has a update function

class TimeTarget {
  private _t: number
  constructor() {
    this._t = GameTime.elapsedTime
    this._update = this._update.bind(this)
    window.requestAnimationFrame(this._update)
  }

  start(self:TimeTarget) {
    window.requestAnimationFrame(self._update.bind(self))
  }

  private _update() {
    const et = GameTime.elapsedTime  
    let dt = et -  this._t
    this.update(dt)
    this._t = et
    window.requestAnimationFrame(this._update)
  }

  update(dt) {

  }

}

export default TimeTarget
