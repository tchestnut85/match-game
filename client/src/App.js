import React from 'react';

import Home from 'pages/Home/Home';

import { GameProvider } from './state/gameContext';

import './App.module.scss';

function App() {
	return (
		<GameProvider>
			<div>
				<Home />
			</div>
		</GameProvider>
	);
}

export default App;
