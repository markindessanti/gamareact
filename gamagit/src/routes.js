import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repositories from './pages/Repositories';
import Home from './pages/Home';

const HomeWithProps = (props) => {
	return (
		<Home
			formtitle={'Formulário de Pesquisa'}
			{...props}
		/>
	);
}

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={HomeWithProps} />
				<Route path='/repositories' component={Repositories} />
			</Switch>
		</BrowserRouter>
	)
}