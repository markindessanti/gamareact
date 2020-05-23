import React from 'react';
// import logo from './logo.svg';
import './App.css';

function Form(props) {
	return (
		<div className="Form">
			<h2>{props.formtitle}</h2>
			<form>
				<p>Nome:</p>
				<input className="input-text" type="text" name="nome" placeholder="Digite seu nome..." defaultValue="" />
				<input className="input-text" type="text" name="email" placeholder="Digite seu email..." defaultValue="" />
				<input type="submit" name="submitButton" value="Enviar" />
			</form>
		</div>
	);
}

export default Form;
