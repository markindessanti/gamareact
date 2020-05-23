import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function Footer(props) {
	const [usuario, setUsuario] = useState('Markin Dessanti')
 	return (
		<>
			<div className="Footer">
				<footer>
					<p>Desenvolvido por {props.devNome}</p>
					<p className="programador">Programado por {usuario}</p>
				</footer>
			</div>
		</>
	);
}

export default Footer;
