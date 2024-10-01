function applyClass(element, classes) {
	classes.forEach((className) => {
		element.classList.add(className);
	});
}

export function applyProperties(element, props) {
	for (let prop in props) {
		if (prop === 'className') {
			const classes = props.className.split(' ');
			applyClass(element, classes);
		} else element.setAttribute(prop, props[prop]);
	}
}