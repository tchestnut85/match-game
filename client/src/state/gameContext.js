import { createContext, useContext } from 'react';

import { useGameReducer } from './gameReducer';

const GameContext = createContext(null);

const { Provider } = GameContext;

const GameProvider = props => {
	const value = useGameReducer();

	return <Provider value={value} {...props} />;
};

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };
