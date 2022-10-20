import React from 'react';

import styles from './Link.module.scss';

interface ILinkProps {
	url: string;
	children: React.ReactNode;
	className?: string;
}

const Link = ({ url, children, className = '' }: ILinkProps) => (
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
