import React from 'react';

import { CATEGORY_OPTIONS, FORM_CONFIG } from '../../constants';

import styles from './ImageSelect.module.scss';

const IMAGE_SELECT_NAME = 'category';

type ImageSelectProps = {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onBlur: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	name: string;
	label: string;
};

const ImageSelect = React.forwardRef(
	({ onChange, onBlur, name, label }: ImageSelectProps, ref) => {
		return (
			<div className={styles.container}>
				<label htmlFor={FORM_CONFIG.category.id}>{label}</label>
				{/* TODO - make the select its own component when adding the tile amount select  */}
				<select
					name={name}
					ref={ref}
					onChange={onChange}
					onBlur={onBlur}
					className={styles.select}
				>
					<option value="">{FORM_CONFIG.category.placeholder}</option>
					{CATEGORY_OPTIONS.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		);
	}
);

export default ImageSelect;
