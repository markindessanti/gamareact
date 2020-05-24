import React from 'react';
import * as S from './styled';

const userName = localStorage.getItem('userName');
const userAvatar = localStorage.getItem('userAvatar');
const repositoriesName = JSON.parse(localStorage.getItem('repositoriesName'));

export default function Repositories() {
	return (
		<S.divRepositories>
			<S.Img src={userAvatar.replace('"', '')} alt="Foto do usuário" />
			<h2>Repositórios de {userName.replace('"', '').replace('"', '')}</h2>
			<S.List>
				{
					repositoriesName.map(repo => {
						return <S.ListItem key={repo}>{repo}</S.ListItem>
					})
				}
			</S.List>
		</S.divRepositories>
	)
}