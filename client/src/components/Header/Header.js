import { APP_NAME } from 'constants';

import Navbar from 'components/Navbar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.container}>
			<h1>{APP_NAME}</h1>
			<Navbar />
		</header>
	);
};

export default Header;
