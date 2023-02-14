import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home';
import Scores from './pages/Scores/Scores';
import NotFound from './pages/NotFound/NotFound';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/scores',
				element: <Scores />,
			},
		],
		errorElement: <NotFound />,
	},
];

const router = createBrowserRouter(routes);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
