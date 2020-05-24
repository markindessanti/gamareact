import styled from 'styled-components';
import { Link } from "react-router-dom";

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
		padding-bottom: 20px;
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

export const Img = styled.img
	`
		padding-top: 30px;
		width: 150px;
	`;

export const LinkHome = styled(Link)
	`
		font-family: Arial;
		font-weight: 400;
		font-stretch: normal;
		font-size: 13.3333px;
		border: 1px solid #103050;
		padding: 1rem;
		border-radius: .25rem;
		color: #fff;
		background: #002040;
		margin-botton: 50px;
		text-decoration: none;
		vertical-align: center;
	`;