// @jsx dom
import { dom, render } from './src';

const app = document.getElementById('app');

const Header = ({ title }) => (
	<header
		onClick={() => console.log('clicked')}
		style={{
			color: 'red',
		}}
		className="header flex">
		<h1>{title}</h1>
	</header>
);

render(<Header title={'Mini - DOM'} />, app);
