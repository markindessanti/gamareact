import React from 'react';

export default function Repositories() {
	return (
		<div className="Repositories">
			<h1>Repositórios</h1>
			{
				document.getElementById('formulario').innerHTML = ''
			}
		</div>
	)
}