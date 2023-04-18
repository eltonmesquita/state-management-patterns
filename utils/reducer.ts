export interface State {
  color: string;
}

export interface Action {
  type: string;
  color: string;
}

export const reducer = (state: State, action: Action) => {
  if (action.type === "UPDATE_COLOR") {
    return {
      ...state,
      color: action.color,
    };
  }

  return state;
};

export interface StarsState {
  stars?: number;
  isLoading?: boolean;
  error?: string;
}

export interface StarsAction {
  type: "UPDATE_STARS" | "IS_LOADING" | "UPDATE_ERROR";
  stars?: number;
  isLoading?: boolean;
  error?: string;
}

export const starsReducer = (state: StarsState, action: StarsAction) => {
  switch (action.type) {
    case "UPDATE_STARS":
      return {
        ...state,
        stars: action.stars,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "UPDATE_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
