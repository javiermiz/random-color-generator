import { useCallback, useEffect } from "react"
import { useState } from "react"

const useColors = () => {
	const [colors, setColors] = useState({})

	const setColor = useCallback((color) => {
		let { r, g, b } = hexToRgb(color)
		let invertedColor = getInvertedColor(color)

		setColors({ hex: color, inverted: invertedColor, rgb: `${r},${g},${b}` })
	}, [])

	const getRandomColor = () => {
		const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
		let colorString = "#"

		for (let i = 0; i < 6; i++) {
			colorString += characters[Math.floor(Math.random() * characters.length)]
		}

		return colorString
	}

	const hexToRgb = (hex) => {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
			  }
			: null
	}

	const getInvertedColor = (hex) => {
		const padZero = (str, len) => {
			len = len || 2
			var zeros = new Array(len).join("0")
			return (zeros + str).slice(-len)
		}

		if (hex.indexOf("#") === 0) {
			hex = hex.slice(1)
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
		}
		if (hex.length !== 6) {
			throw new Error("Invalid HEX color.")
		}
		// invert color components
		var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
			g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
			b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16)
		// pad each with zeros and return
		return "#" + padZero(r) + padZero(g) + padZero(b)
	}

	useEffect(() => {
		setColor(getRandomColor())
	}, [setColor])

	return { colors, setColor, getRandomColor }
}

export { useColors }
