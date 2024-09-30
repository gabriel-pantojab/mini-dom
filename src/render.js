export function render(node) {
	if (typeof node === 'boolean') {
		return document.createDocumentFragment();
	}

	if (typeof node === 'number' || typeof node === 'string') {
		return document.createTextNode(node);
	}

	const element = document.createElement(node.type);

	if (node.props) {
		for (let prop in node.props) {
			element.setAttribute(prop, node.props[prop]);
		}
	}

	if (node.children) {
		for (let child of node.children) {
			element.appendChild(render(child));
		}
	}

	return element;
}
