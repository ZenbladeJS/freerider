setInterval(function () {
	document.dispatchEvent((new KeyboardEvent("keydown", {
		cancelable: true,
		char: " ",
		key: " ",
		shiftKey: false,
		keyCode: 32,
		which: 32
	})));
	setTimeout(function () {
		document.dispatchEvent((new KeyboardEvent("keyup", {
			cancelable: true,
			char: " ",
			key: " ",
			shiftKey: false,
			keyCode: 32,
			which: 32
		})));
	}, 1)
}, 20);
