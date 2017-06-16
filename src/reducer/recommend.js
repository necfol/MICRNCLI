const initialState = { 
    focus: [],
    songList: [],
    sum: null,
    mvList: []
};

const actionsMap = {
    recommend(state, action) {
        return {...state, ...action.result}
    }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
