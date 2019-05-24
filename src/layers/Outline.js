import Layer from './Layer.js'
import { polygon } from '../util.js'

export default class Outline extends Layer {
  
  constructor() {
    super(...arguments)
  }

  render() {
    noFill()
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()

    const state = random(["hexagon", "ellipse", "octagon"])
    if (state == "hexagon") {
      polygon(6, 0, 0, this.radius)
    } else if (state == "octagon") {
      polygon(8, 0, 0, this.radius)
    } else {
      ellipse(0, 0, this.size, this.size)
    }

    pop()
  }

}
