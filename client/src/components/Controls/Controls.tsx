import { useState, ChangeEvent, MouseEvent } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import Button from '../Button/Button';
import ImageSelect from '../ImageSelect/ImageSelect';

import { useGameContext } from '../../state/gameContext';
import { MESSAGES, ACTION_TYPES, FORM_CONFIG } from '../../constants';
import { ControlsInputs } from '../../types';

import styles from './Controls.module.scss';

const initialFormValues = { category: '', name: '' };
const validationConfig = {
	category: { required: true },
	name: { required: true, maxLength: 30 },
	errors: {
		category: 'Category is required.',
		name: 'Name is required and can be 30 characters max.',
	},
};

const Controls = () => {
	const {
		register,
		handleSubmit: rhfHandleSubmit,
		watch,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: initialFormValues,
		mode: 'onChange',
		reValidateMode: 'onChange',
	});
	const gameContext = useGameContext();
	const [, dispatch] = gameContext!;

	const isDisabled = !isDirty || !isValid || !!Object.keys(errors).length;

	console.log('name:', watch('name'));
	console.log('category:', watch('category'));
	console.log({ errors, isDirty, isValid });

	const handleSubmit: SubmitHandler<ControlsInputs> = data => {
		console.log('data:', data);
		dispatch({
			type: ACTION_TYPES.START_GAME,
			payload: { category: data.category, playerName: data.name },
		});
	};

	return (
		<section className={styles.container}>
			<h2>{MESSAGES.controls.text}</h2>
			<form className={styles.form} onSubmit={rhfHandleSubmit(handleSubmit)}>
				<div className={styles.inputContainer}>
					<div className={styles.input}>
						<label htmlFor={FORM_CONFIG.name.id}>
							{FORM_CONFIG.name.label}
						</label>
						<input
							className={styles.name}
							{...register('name', validationConfig.name)}
						/>
					</div>
					{errors.name && (
						<p className={styles.error}>{validationConfig.errors.name}</p>
					)}
				</div>

				<div className={styles.inputContainer}>
					<div className={styles.input}>
						<ImageSelect
							label={FORM_CONFIG.category.label}
							{...register('category', validationConfig.category)}
						/>
					</div>
					{errors.category && (
						<p className={styles.error}>{validationConfig.errors.category}</p>
					)}
				</div>

				<Button
					label={FORM_CONFIG.submit.label}
					type="submit"
					className={styles.button}
					disabled={isDisabled}
				/>
			</form>
		</section>
	);
};

export default Controls;
