import { useState, ChangeEvent, MouseEvent } from 'react';

import Button from '../Button/Button';
import ImageSelect from '../ImageSelect/ImageSelect';

import { ActionTypes } from '../../state/gameReducer';
import { useGameContext } from '../../state/gameContext';
import { MESSAGES } from '../../constants';

import styles from './Controls.module.scss';

// TODO - use react hook form to get form values and then dispatch to the context state

const Controls = () => {
	const [formState, setFormState] = useState({ category: '' });
	const gameContext = useGameContext();
	const [, dispatch] = gameContext!;

	const { category } = formState;

	const isDisabled = Object.values(formState).some(val => !val);

	const handleFormChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target as HTMLSelectElement;
		setFormState({ category: value });
	};

	const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({ type: ActionTypes.START_GAME, payload: category });
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
