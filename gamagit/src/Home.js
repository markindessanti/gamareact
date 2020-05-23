import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Form from './Form';

ReactDOM.render(
	<React.StrictMode>
		<Form formtitle="Meu Formulário" />
	</React.StrictMode>,
	document.getElementById('formulario')
);

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Primeira React App</h1>
				<p>Estudados os conceitos de componentização, <em>fragments</em>, propriedades e estados</p>
				{/*
					<a
						className="App-link"
						href="https:eactjs.org"
						target="_blank"
						rel="noopener noreferrer"
						>
						Learn React
					</a>
				*/}

			</header>
		</div>
	);
}

export default Home;
