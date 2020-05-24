import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";

export default function Repositories() {
	const history = useHistory();
	const [userName, setUserName] = useState([]);
	const [userAvatar, setUserAvatar] = useState([]);
	const [respositories, setRepositories] = useState([]);

	useEffect(() => {
		let repositoriesName = localStorage.getItem('repositoriesName');
		if (localStorage.getItem('repositoriesName') != null) {
			const userName = localStorage.getItem('userName').replace(/"/g, '');
			const userAvatar = localStorage.getItem('userAvatar').replace(/"/, '');
			repositoriesName = JSON.parse(localStorage.getItem('repositoriesName'));
			setUserName(userName);
			setUserAvatar(userAvatar);
			setRepositories(repositoriesName);

			localStorage.clear();
		} else {
			history.push('/');
		}
	}, [history]);
	return (
		<S.divRepositories>
			<S.Img src={userAvatar} alt="Foto do usuário" />
			<h2>Repositórios de {userName}</h2>
			<S.List>
				{
					respositories.map(repo => {
						return <S.ListItem key={repo}>{repo}</S.ListItem>
					})
				}
			</S.List>
			<S.LinkHome to='/'>Voltar</S.LinkHome>
		</S.divRepositories>
	)
}