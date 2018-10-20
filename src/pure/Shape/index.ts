import {ShapeType} from './ShapeBase' 
import CircleShape from './CircleShape'

function createShape(t:ShapeType, data ) {
  switch(t) {
    case ShapeType.Circle:
      return new CircleShape(data)
    default:
    break;
  }
}

export  {createShape, ShapeType}

