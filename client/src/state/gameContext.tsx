import { createContext, useContext, Dispatch, ReactNode } from 'react';

import { useGameReducer } from './gameReducer';
import { IGameState, IGameAction } from '../types';

type ProviderValue = [IGameState, Dispatch<IGameAction>];

const GameContext = createContext<ProviderValue | null>(null);
const { Provider } = GameContext;

const GameProvider = ({ children }: { children: ReactNode }) => {
	const value: ProviderValue = useGameReducer();

	return <Provider value={value}>{children}</Provider>;
};

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };
