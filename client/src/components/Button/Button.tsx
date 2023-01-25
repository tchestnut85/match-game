import { forwardRef, MouseEventHandler } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
	className?: string;
	disabled?: boolean;
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	type?: 'button' | 'submit';
	value?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = '',
			disabled = false,
			label,
			onClick = undefined,
			type = 'button',
			value = '',
		},
		ref
	) => (
		<button
			className={`${styles.button} ${
				disabled ? styles.disabled : ''
			} ${className}`}
			value={value || label}
			ref={ref}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{label}
		</button>
	)
);

export default Button;
