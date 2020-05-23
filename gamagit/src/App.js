import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Primeira React App</h1>
				<p>Estudados os conceitos de componentização, <em>fragments</em>, propriedades e estados</p>
				{/*
					<a
						className="App-link"
						href="https://reactjs.org"
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

export default App;
