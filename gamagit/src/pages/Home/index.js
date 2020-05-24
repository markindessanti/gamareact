import React, { useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from "react-router-dom";

function Home(props) {
	const [usuario, setUsuario] = useState('');
	const history = useHistory();

	async function handleForm() {
		// console.log(`Usuario ${usuario}`);
		await axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
			const repositories = response.data;
			const repositoriesName = [];
			repositories.forEach(repository => {
				repositoriesName.push(repository.name);
			});
			// console.log(repositoriesName);
			localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
		});

		await axios.get(`https://api.github.com/users/${usuario}`).then(response => {
			const userName = response.data.name;
			const userAvatar = response.data.avatar_url;
			// console.log(userName, userAvatar);
			localStorage.setItem('userName', JSON.stringify(userName));
			localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
		});

		history.push('/repositories');
	}
	return (
		<>
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
		</>
	);
}

export default Home;
