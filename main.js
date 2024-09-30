import { dom, render } from './src';

const app = document.getElementById('app');

const h1 = dom('h1', { id: 'title' }, 'Mini - DOM');

app.appendChild(render(h1));
