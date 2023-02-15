import { createContext, useReducer } from "react";
import { AppReducer, initialState } from "@main/store";

export const AppContext = createContext(initialState);

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	function dispatchAction(actionName, newState) {
		dispatch({
			type: `${actionName}`,
			payload: {
				...state,
				[actionName]: newState,
			},
		});
	}

	return (
		<AppContext.Provider
			value={{
				...state,
				dispatchAction,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
