import React, { useState } from 'react';
// import logo from './logo.svg';
import '../../App';
import axios from 'axios';
import * as S from './styled';

function Form(props) {
	const [usuario, setUsuario] = useState('');

	function handleForm() {
		// console.log(`Usuario ${usuario}`);
		axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
			const repositories = response.data;
			const repositoriesName = [];
			repositories.forEach(repository => {
				repositoriesName.push(repository.name);
			});
			// console.log(repositoriesName);
			localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
		});

		axios.get(`https://api.github.com/users/${usuario}`).then(response => {
			const userName = response.data.name;
			const userAvatar = response.data.avatar_url;
			// console.log(userName, userAvatar);
			localStorage.setItem('userName', JSON.stringify(userName));
			localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
		});
	}
	return (
		<S.Form>
			<h2>{props.formtitle}</h2>
			<p>Usuário a ser pesquisado: {usuario}</p>
			<form>
				<p>Nome:</p>
				<S.Input className="input-text" type="text" placeholder="Digite seu nome..." value={usuario} onChange={e => setUsuario(e.target.value)} />
				{/*<input className="input-text" type="text" placeholder="Digite seu email..." onChange={e => console.log(e.target.value)} />*/}
				{/*<input type="submit" name="submitButton" onClick={handleForm} value="Enviar" />*/}
				<S.Button type="button" name="submitButton" onClick={handleForm}>Pesquisar</S.Button>
			</form>
		</S.Form>
	);
}

export default Form;
