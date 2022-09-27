import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import styles from './Modal.module.scss';

const DIVISOR = 2;
const MODAL_PROPERTIES = {
	width: {
		id: 'Width',
		size: 500,
	},
	height: {
		id: 'Height',
		size: 200,
	},
};

const getPosition = type => {
	return (
		window[`inner${type}`] / DIVISOR -
		MODAL_PROPERTIES[`${type.toLowerCase()}`].size / DIVISOR
	);
};

// style properties to center the modal
const modalPositions = {
	left: getPosition(MODAL_PROPERTIES.width.id),
	top: getPosition(MODAL_PROPERTIES.height.id),
};

const Modal = ({
	isOpen,
	buttons = {},
	messages = {},
	onClose = { confirm: null, cancel: null },
}) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);

	const dialogRef = useRef(null);

	const BUTTON_IDS = Object.keys(buttons);
	const [CONFIRM_BTN, CANCEL_BTN] = BUTTON_IDS;

	const handleClose = action => {
		const isConfirmButton = action === CONFIRM_BTN;
		const isCancelButton = action === CANCEL_BTN;

		setIsModalOpen(false);

		if (isConfirmButton && onClose.confirm) onClose.confirm();
		if (isCancelButton && onClose.cancel) onClose.cancel();
	};
	const handleConfirm = () => handleClose(CONFIRM_BTN);
	const handleCancel = () => handleClose(CANCEL_BTN);

	useEffect(() => {
		if (isModalOpen && dialogRef.current) dialogRef.current.showModal();
	}, [isModalOpen, dialogRef]);

	return (
		// dialog element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
		<dialog
			ref={dialogRef}
			className={styles.container}
			style={{ ...modalPositions }}
		>
			<form method="dialog" className={styles.form}>
				<h2>{messages.primary}</h2>
				<h3>{messages.secondary}</h3>
				<div className={styles.buttons}>
					{BUTTON_IDS.map(key => {
						const handler = key === CONFIRM_BTN ? handleConfirm : handleCancel;
						return (
							<Button
								key={key}
								label={buttons[key]}
								value={key}
								onClick={handler}
							/>
						);
					})}
				</div>
			</form>
		</dialog>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	buttons: PropTypes.shape({}).isRequired,
	messages: PropTypes.shape({}).isRequired,
	onClose: PropTypes.shape({
		confirm: PropTypes.func,
		cancel: PropTypes.func,
	}),
};

export default Modal;
