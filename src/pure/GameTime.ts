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

  static get time() {
    return GameTime.instance._time - Date.now()
  }

  // static get deltaTime() {

  // }
}

export default GameTime
