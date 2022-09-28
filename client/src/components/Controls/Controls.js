import { useState } from 'react';

import Button from 'components/Button/Button';
import ImageSelect from 'components/ImageSelect/ImageSelect';

import { ACTION_TYPES } from 'state/gameReducer';
import { useGameContext } from 'state/gameContext';
import { MESSAGES } from 'constants';

import styles from './Controls.module.scss';

// TODO - use react hook form to get form values and then dispatch to the context state

const Controls = () => {
	const [formState, setFormState] = useState({ category: '' });
	const [, dispatch] = useGameContext();

	const { category } = formState;

	const isDisabled = Object.values(formState).some(val => !val);

	const handleFormChange = ({ target: { name, value } }) => {
		setFormState({ [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch({ type: ACTION_TYPES.START_GAME, payload: { category } });
	};

	return (
		<section className={styles.container}>
			<h2>{MESSAGES.controls.text}</h2>
			<form className={styles.form} onSubmit={handleSubmit}>
				<ImageSelect onChange={handleFormChange} />
				<Button
					label={MESSAGES.controls.submit}
					type="submit"
					disabled={isDisabled}
					className={styles.button}
				/>
			</form>
		</section>
	);
};

export default Controls;
