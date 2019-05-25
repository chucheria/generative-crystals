export default class Layer {

  constructor(size) {
    this.sides = 6
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes

    this.size = size
    this.radius = this.size / 2

    this.numSteps = random([8, 10])
    this.stepLength = this.radius / this.numSteps

    // this.palette = [
    //   color(255, 198, 71),
    //   color(0, 40, 94),
    //   color(83, 139, 255)
    // ]

    // this.palette = [
    //   color(255, 128, 102),
    //   color(0, 201, 167),
    //   color(132, 94, 194)
    // ]

    this.palette = [
      color(255, 198, 71), // yellow
      color(255, 52, 154), // pink
      color(4, 0, 152) // blue
    ]

    this.color = random(this.palette)
    this.strokeWeight = random([1, 2])
  }

}
