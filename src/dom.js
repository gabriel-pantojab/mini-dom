export function dom(type, props, ...args) {
	const children = [...args];

	return {
		type,
		props,
		children,
	};
}
