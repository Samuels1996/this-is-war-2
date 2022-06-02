import { QUERY_ITEMS, QUERY_USERS } from "./actions";

const initialState = {
  users: [],
  characters: [],
  items: [],
  levels: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };
  }
};
