import Crystal from './Crystal.js'
import { favicon } from './util.js'

window.setup = () => {
	createCanvas(windowWidth, windowHeight)

	noLoop()
	angleMode(DEGREES)
	rectMode(RADIUS)
}

window.draw = () => {
	const CRYSTAL_SIZE_MAX = 500
	const GAP_MIN = 10

	const crystalSize = min(CRYSTAL_SIZE_MAX, min(windowWidth, windowHeight) - 2 * GAP_MIN)
	
	const cols = int((windowWidth - GAP_MIN) / (crystalSize + GAP_MIN))
	const rows = int((windowHeight - GAP_MIN) / (crystalSize + GAP_MIN))

	const gapHor = (windowWidth - cols * crystalSize) / (cols + 1)
	const gapVer = (windowHeight - rows * crystalSize) / (rows + 1)
	
	for (let i = 0; i < cols * rows; i++) {
		const x = gapHor + crystalSize / 2 + (i % cols) * (crystalSize + gapHor)
		const y = gapVer + crystalSize / 2 + int(i / cols) * (crystalSize + gapVer)
		
		new Crystal(x, y, crystalSize).render()
		// const canvas = document.getElementsByTagName('canvas')
		// image = canvas[0].toDataURL('image/png').replace('image/png', 'image/octet-stream')
		// window.location.href = image
	}

	// favicon(displayDensity(), crystalSize, gapHor, gapVer)
}

// setTimeout(function() {
// 	location.reload();
// }, 3000)

window.windowResized = () => {
	resizeCanvas(windowWidth, windowHeight)
}
