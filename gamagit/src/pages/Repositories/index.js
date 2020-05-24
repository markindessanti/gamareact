import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories() {
	const [userName, setUserName] = useState([]);
	const [userAvatar, setUserAvatar] = useState([]);
	const [respositories, setRepositories] = useState([]);

	useEffect(() => {
		const userName = localStorage.getItem('userName').replace(/"/g, '');
		const userAvatar = localStorage.getItem('userAvatar').replace(/"/, '');
		const repositoriesName = JSON.parse(localStorage.getItem('repositoriesName'));

		setUserName(userName);
		setUserAvatar(userAvatar);
		setRepositories(repositoriesName);

		localStorage.clear();
	}, []);
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
		</S.divRepositories>
	)
}