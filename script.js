const shape = document.getElementById("shape")

const sliders = document.querySelectorAll(".slider")
const labels = document.querySelectorAll(".label")

sliders.forEach((slider, index) => {
	const label = labels[index]

	slider.value = Math.floor(Math.random() * 101)
	shape.style[`border${slider.name}Radius`] = slider.value + "%"
	label.innerText = slider.value + "%"

	slider.addEventListener("input", () => {
		shape.style[`border${slider.name}Radius`] = slider.value + "%"
		label.innerText = slider.value + "%"
	})
})
