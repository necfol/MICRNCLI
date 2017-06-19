const initialState = { 
    topList: []
};

const actionsMap = {
    rank(state, action) {
        return {...state, ...action.result}
    }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
