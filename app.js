const mainImage = document.querySelector(".main-image");
const scrollableArea = document.querySelector(".scrollable");

function smoothAnimation() {
	let current = 0;
	let ease = 0.03;
	let target = 0;

	const lerp = () => current * (1 - ease) + target * ease;

	return function () {
		target = window.scrollY;
		current = lerp().toFixed(2);
		mainImage.style.transform = `rotateY(-${current * 0.2}deg)`;
		requestAnimationFrame(updateImage);
	};
}

const updateImage = smoothAnimation();
updateImage();
