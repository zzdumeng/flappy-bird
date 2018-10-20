interface ImageResource {}

class Preloader {
  // TODO: support more type of resources
  constructor(public resources: string[], public onProgress: Function, public onLoad: Function) {
    let loaded = 0
    const self = this
    resources.forEach(function(res) {
      const i = new Image()
      i.onload = function() {
        loaded += 1
      self._onProgress(loaded)
      if(loaded === self.resources.length) {
        self._onLoad()
      }
      }
      i.src = './img/' + res
    })
  }
  _onProgress(p) {
    this.onProgress(p/this.resources.length)
  }
  _onLoad() {
    this.onLoad()
  }
}

export default Preloader
