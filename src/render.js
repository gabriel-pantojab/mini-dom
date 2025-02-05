import { applyProperties } from './utils/utils';

export function render(node, container) {
	if (typeof node === 'boolean') {
		container.appendChild(document.createDocumentFragment());
		return;
	}

	if (typeof node === 'number' || typeof node === 'string') {
		container.appendChild(document.createTextNode(node));
		return;
	}

	if (typeof node.type === 'function') {
		const nodeFunction = node.type;
		render(nodeFunction(node.props), container);
		return;
	}

	const element = document.createElement(node.type);

	if (node.props) {
		applyProperties(element, node.props);
	}

	if (node.children) {
		for (let child of node.children) {
			render(child, element);
		}
	}

	container.appendChild(element);
}
