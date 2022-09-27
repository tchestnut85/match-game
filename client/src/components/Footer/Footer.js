import Link from 'components/Link/Link';

import { LINKS, MESSAGES } from 'constants';

import styles from './Footer.module.scss';

const Footer = () => (
	<footer className={styles.container}>
		<p>
			{MESSAGES.unsplashCredits.text}
			<span>
				<Link url={LINKS.unsplash}>{MESSAGES.unsplashCredits.unsplash}</Link>
			</span>
		</p>
	</footer>
);

export default Footer;
