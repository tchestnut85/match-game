import React, { useState, useEffect } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

import Icon from '../Icon/Icon';

import { getImageID } from '../../utils/getImageID';
import { useGameContext } from '../../state/gameContext';
import { IGameState } from '../../types';

import styles from './Tile.module.scss';

type TileProps = {
	id: string;
	onClick: (id: string) => void;
	url?: string;
	description?: string;
	selectedTiles?: string[];
	isMatched?: boolean;
};

const Tile = ({
	url = '',
	id = '',
	description = '',
	selectedTiles = [],
	onClick,
	isMatched = false,
}: TileProps) => {
	const gameContext = useGameContext();
	const { isGameActive }: IGameState = gameContext![0];
	const [isHidden, setIsHidden] = useState(true);

	useEffect(() => {
		let setHiddenTimeout: NodeJS.Timeout;

		if (selectedTiles.length === 2 && selectedTiles.includes(id)) {
			setHiddenTimeout = setTimeout(() => {
				setIsHidden(true);
			}, 2000);
		}

		return () => clearTimeout(setHiddenTimeout);
	}, [selectedTiles, id, isHidden]);

	const handleClick = (id: string): void => {
		if (isGameActive) {
			if (isMatched) return;
			setIsHidden(false);
			onClick(id);
		}
		return;
	};

	const matchedStyles = `${styles.content} ${styles.isDisabled} ${styles.isMatched}`;

	if (isMatched) {
		return (
			<div className={matchedStyles} onClick={() => handleClick(id)}>
				<img id={id} src={url} alt={description} />
			</div>
		);
	}

	const isDisabled =
		selectedTiles.includes(id) ||
		(selectedTiles.length === 2 && !selectedTiles.includes(id));

	const isNotMatched =
		selectedTiles.length === 2 &&
		selectedTiles.includes(id) &&
		getImageID({ id: selectedTiles[0] }) !==
			getImageID({ id: selectedTiles[1] });

	const tileClassNames = `${styles.content} ${
		isDisabled ? styles.isDisabled : ''
	} ${isNotMatched ? styles.isNotMatched : ''} ${
		!isGameActive ? styles.isNotActive : ''
	}`;

	return (
		<div className={tileClassNames} onClick={() => handleClick(id)}>
			{isHidden ? (
				<Icon id={id} icon={FaQuestionCircle} />
			) : (
				<img id={id} src={url} alt={description} />
			)}
		</div>
	);
};

export default Tile;
