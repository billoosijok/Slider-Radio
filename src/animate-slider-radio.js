window.addEventListener('load', function() {

	const sliderRadios = document.getElementsByClassName("slider-radio");
	const animationDuration = 0.2;
	let timeout = null;

	for (let i = 0; i < sliderRadios.length; i++) {
		let sliderRadio = sliderRadios[i];

		const slidingPiece = document.createElement('div');
		slidingPiece.className = "sliding-piece";
		sliderRadio.appendChild(slidingPiece);
		slidingPiece.style.position = "absolute";
		slidingPiece.style.transition = "width " + animationDuration + "s, height " + animationDuration + "s, top " + animationDuration + "s, left " + animationDuration + "s";

		sliderRadio.addEventListener('click', handleLabelClick);

		// Simply setting up the `sliderPiece` by clicking any pre-checked value;
		const radios = sliderRadio.querySelectorAll("input[type='radio']");
		radios.forEach(function(el) { if(el.checked) el.click() });

		function handleLabelClick(e) {
			if (e.target.nodeName === "INPUT") {

				const radio = e.target;
				const label = radio.nextSibling;

				if(radio.checked) {
					const labelCoords = getElementCoords(label);

					slidingPiece.style['transition-duration'] = animationDuration;
					slidingPiece.style.opacity = 1;
					label.style.backgroundColor = "transparent";
					label.style.boxShadow = "none";

					animateSlidingPiece(labelCoords);

					if (timeout) {
						clearTimeout(timeout);
					}
					timeout = setTimeout(function() {
						// console.log(slidingPiece);
						label.style.backgroundColor = "";
						slidingPiece.style.opacity = '0';
						label.style.boxShadow = "";

						timeout = null;
					}, (animationDuration+0.3) * 1000);

					// window.addEventListener('resize', updateSlidingPieceCoords.bind(sliderRadio, label));
				}

			}

			function updateSlidingPieceCoords(label) {
				animateSlidingPiece(getElementCoords(label));
			}

			function animateSlidingPiece(coords) {
				slidingPiece.style.left = coords.x + "px";
				slidingPiece.style.top = coords.y + "px";
				slidingPiece.style.width = coords.width + "px";
				slidingPiece.style.height = coords.height + "px";
			}
		}
	}

	function getElementCoords(el) {
		const elementPosition =  {x: el.offsetLeft, y: el.offsetTop};
		const elementSize = el.getBoundingClientRect();

		return {
			x: elementPosition.x,
			y: elementPosition.y,
			width: elementSize.width,
			height: elementSize.height
		}
	}
});