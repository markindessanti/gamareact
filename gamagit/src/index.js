import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<Form formtitle="Meu Formulário" />
	</React.StrictMode>,
	document.getElementById('teste')
);

ReactDOM.render(
	<React.StrictMode>
		<Footer devNome="&copy;Dessanti Web Design" />
	</React.StrictMode>,
	document.getElementById('footer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
