class GameTime {
 private static _instance: GameTime
  private _time:number

  constructor() {

    this.init()   
  }

  private init() {
    this._time = Date.now()
  }

  static get instance() {
    if(!GameTime._instance) {
      GameTime._instance = new GameTime()
    }
    return GameTime._instance
  }
  
  /**
   * return elapsed time in seconds
   */
  static get elapsedTime() {
    return  (Date.now() - GameTime.instance._time ) /1000
  }

  // static get deltaTime() {

  // }
}

export default GameTime
