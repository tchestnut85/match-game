import { useEffect, useState } from 'react';
import {
	useRouteError,
	isRouteErrorResponse,
	useNavigate,
} from 'react-router-dom';

import { MESSAGES, ROUTES } from '../../constants';

import styles from './NotFound.module.scss';

const NAV_TIMEOUT = 5000;
const NAV_INTERVAL = 1000;
const { notFound: NOT_FOUND_MSGS } = MESSAGES;

const NotFound = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	const [timer, setTimer] = useState(NAV_TIMEOUT / NAV_INTERVAL);

	useEffect(() => {
		const navTimeout = setTimeout(() => {
			navigate(ROUTES.home);
		}, NAV_TIMEOUT);

		return () => clearTimeout(navTimeout);
	}, []);

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTimer(prevTimer => prevTimer - 1);
		}, NAV_INTERVAL);

		return () => clearInterval(timerInterval);
	}, [timer]);

	return (
		<main className={styles.container}>
			<section className={styles.scores}>
				<h2>{NOT_FOUND_MSGS.heading}</h2>
				{isRouteErrorResponse(error) && (
					<>
						<p>
							{NOT_FOUND_MSGS.error} {error.status} {error.statusText}
						</p>
						<p>
							{NOT_FOUND_MSGS.redirect} {timer}
						</p>
					</>
				)}
			</section>
		</main>
	);
};

export default NotFound;
