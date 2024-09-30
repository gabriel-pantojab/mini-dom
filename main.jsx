// @jsx dom
import { dom, render } from './src';

const app = document.getElementById('app');

const Header = (
	<header>
		<h1>Mini - DOM</h1>
	</header>
);

render(Header, app);
