import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Header from './Header/Header';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles.container}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
