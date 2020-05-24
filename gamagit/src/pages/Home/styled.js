import styled from 'styled-components';

export const Form = styled.div
	`
		background-color: #282c34;
		min-height: 40vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
		padding-bottom: 70px;
		text-align: center;
	`;

export const Input = styled.input
	`
		border: 1px solid #ddd;
		height: 1.5rem;
		padding: 0 .5rem;
		border-radius: .25rem;
	`;

export const Button = styled.button
	`
		height: 2.5rem;
		border: 1px solid #103050;
		padding: 0 1rem;
		border-radius: .25rem;
		color: #fff;
		background: #002040;
		margin-botton: 50px;
		padding-botton: 50px;
	`;

export const ErroMsg = styled.div
		`	
		min-height: 10vh;
		p {
			font-size: 20px;
			background: rgba(10, 30, 60, 0.5);
			color: rgba(255, 30, 0, 0.8);
			margin: 20px;
			padding: 10px;
		}
	`;