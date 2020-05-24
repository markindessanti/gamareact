import React from 'react';
import * as S from './styled';

export default function Repositories() {
	return (
		<S.divRepositories>
			<h1>Repositórios</h1>
			<S.List>
				<S.ListItem>Repositório 1</S.ListItem>
				<S.ListItem>Repositório 2</S.ListItem>
				<S.ListItem>Repositório 3</S.ListItem>
				<S.ListItem>Repositório 4</S.ListItem>
				<S.ListItem>Repositório 5</S.ListItem>
				<S.ListItem>Repositório 6</S.ListItem>
				<S.ListItem>Repositório 7</S.ListItem>
				<S.ListItem>Repositório 8</S.ListItem>
				<S.ListItem>Repositório 9</S.ListItem>
			</S.List>
			{
				document.getElementById('formulario').innerHTML = ''
			}
		</S.divRepositories>
	)
}