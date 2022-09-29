import { FaGithub } from 'react-icons/fa';

import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';

import { LINKS, MESSAGES } from 'constants';

import styles from './Footer.module.scss';

const Footer = () => (
	<footer className={styles.container}>
		<p>
			{MESSAGES.unsplashCredits.text}
			<span>
				<Link url={LINKS.unsplash} className={styles.unsplashLink}>
					{MESSAGES.unsplashCredits.unsplash}
				</Link>
			</span>
		</p>
		<Link url={LINKS.github}>
			<Icon icon={FaGithub} />
		</Link>
	</footer>
);

export default Footer;
