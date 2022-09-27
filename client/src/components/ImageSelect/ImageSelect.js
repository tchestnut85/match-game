import PropTypes from 'prop-types';

import { IMAGE_OPTIONS, MESSAGES } from 'constants';

import styles from './ImageSelect.module.scss';

const IMAGE_SELECT_NAME = 'category';

const ImageSelect = ({ onChange }) => {
	return (
		<div className={styles.container}>
			<label>{MESSAGES.imageSelect.label}</label>
			{/* TODO - make the select its own component when adding the tile amount select  */}
			<select
				name={IMAGE_SELECT_NAME}
				onChange={onChange}
				className={styles.select}
			>
				<option value="">{MESSAGES.imageSelect.optionPlaceholder}</option>
				{IMAGE_OPTIONS.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

ImageSelect.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default ImageSelect;
