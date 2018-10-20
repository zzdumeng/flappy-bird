import GameBase from './pure/GameBase'
import Scene from './pure/Scene'
import {createShape, ShapeType} from './pure/Shape/index'
import CircleShape from './pure/Shape/CircleShape';
import Bird from './Bird'

class TestGame  extends GameBase{
  constructor(public width: number, public height: number) {
    super(width, height)
  
    const scene1 = new Scene(this)
    const b0 = createShape(ShapeType.Circle, {x: 50, y: 50, r:50}) as CircleShape
    b0.fill('red')
    scene1.add(b0)

    const bird = new Bird(0.2)
    bird.x = 150
    bird.y = 50
    scene1.add(bird)

    this.addScene(scene1)
    this.showScene(scene1)
  }
}

const game = new TestGame(480, 320)
