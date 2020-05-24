import styled from 'styled-components';

export const divRepositories = styled.div
	`
		background-color: #282c34;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
	`;

export const List = styled.ul
	`
		list-style: none;
		padding: 0;
		font-family: serif;
	`;

export const ListItem = styled.ul
	`
		margin: .5rem 0;
		background: #202030;
		padding: .5rem;
	`;