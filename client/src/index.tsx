import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Scores from './pages/Scores/Scores';
import Home from './pages/Home/Home';

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
		errorElement: '', // TODO - add a Not Found page using useRouteError or a redirect
	},
];

const router = createBrowserRouter(routes);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
