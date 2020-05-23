import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './pages/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<Footer devNome="&copy;Dessanti Web Design" />
	</React.StrictMode>,
	document.getElementById('footer')
);

serviceWorker.unregister();
