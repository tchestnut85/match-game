import { useState, useRef, useEffect } from 'react';

import Button from '../Button/Button';

import styles from './Modal.module.scss';

type ModalProps = {
	isOpen: boolean;
	buttons: { [key: string]: string };
	messages: { [key: string]: string };
	onClose: {
		confirm: () => void;
		cancel: () => void;
	};
};

const Modal = ({
	isOpen,
	buttons = {},
	messages = {},
	onClose,
}: ModalProps) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);

	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const BUTTON_IDS = Object.keys(buttons);
	const [CONFIRM_BTN, CANCEL_BTN] = BUTTON_IDS;

	const handleClose = (action: string) => {
		const isConfirmButton = action === CONFIRM_BTN;
		const isCancelButton = action === CANCEL_BTN;

		setIsModalOpen(false);

		if (isConfirmButton && onClose.confirm) onClose.confirm();
		if (isCancelButton && onClose.cancel) onClose.cancel();
	};
	const handleConfirm = () => handleClose(CONFIRM_BTN);
	const handleCancel = () => handleClose(CANCEL_BTN);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (isModalOpen && dialog) dialog.showModal();

		// fix showModal() bug due to react strict mode simulating remounting a component
		// see: https://github.com/facebook/react/issues/24399
		return () => dialog?.close();
	}, [isModalOpen, dialogRef]);

	return (
		// dialog element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
		<dialog ref={dialogRef} className={styles.container}>
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

export default Modal;
