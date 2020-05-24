import React, {useState} from 'react';
import * as S from './styled';
// import logo from './logo.svg';
import '../../App';

function Footer(props) {
	const [usuario] = useState('Markin Dessanti');
 	return (
		<>
			<S.Footer>
				<footer>
					<p>Desenvolvido por {props.devNome}</p>
					<p className="programador">Programado por {usuario}</p>
				</footer>
			</S.Footer>
		</>
	);
}

export default Footer;
