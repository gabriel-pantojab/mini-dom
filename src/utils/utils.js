function applyClass(element, classes) {
	classes.forEach((className) => {
		element.classList.add(className);
	});
}

function applyStyles(element, styles) {
	for (let style in styles) {
		element.style[style] = styles[style];
	}
}

function addEventToElement(element, event, handleEvent) {
	element.addEventListener(event, handleEvent);
}

function diffProps(element, prop, propValue) {
	if (prop in element) {
		element[prop] = propValue;
	} else {
		element.setAttribute(prop, propValue);
	}
}

export function applyProperties(element, props) {
	for (let prop in props) {
		if (prop === 'className') {
			const classes = props.className.split(' ');
			applyClass(element, classes);
		} else if (prop === 'style') {
			const styles = props.style;
			applyStyles(element, styles);
		} else if (prop.startsWith('on')) {
			const event = prop.toLowerCase().substring(2);
			addEventToElement(element, event, props[prop]);
		} else {
			diffProps(element, prop, props[prop]);
		}
	}
}
