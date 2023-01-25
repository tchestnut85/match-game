import React from 'react';

import styles from './Link.module.scss';

type LinkProps = {
	url: string;
	children: React.ReactNode;
	className?: string;
};

const Link = ({ url, children, className = '' }: LinkProps) => (
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		className={`${styles.container} ${className}`}
	>
		{children}
	</a>
);

export default Link;
