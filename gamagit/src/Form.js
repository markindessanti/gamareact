import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function Form(props) {
	const [usuario, setUsuario] = useState('');

	function handleForm() {
		// console.log(`Usuario ${usuario}`);
		axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
		axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response.data));

	}
	return (
		<div className="Form">
			<h2>{props.formtitle}</h2>
			<p>Usuário digitado: {usuario}</p>
			<form>
				<p>Nome:</p>
				<input className="input-text" type="text" placeholder="Digite seu nome..." value={usuario} onChange={e => setUsuario(e.target.value)} />
				<input className="input-text" type="text" placeholder="Digite seu email..." onChange={e => console.log(e.target.value)} />
				{/*<input type="submit" name="submitButton" onClick={handleForm} value="Enviar" />*/}
				<button type="button" name="submitButton" onClick={handleForm}>Enviar</button>
			</form>
		</div>
	);
}

export default Form;
