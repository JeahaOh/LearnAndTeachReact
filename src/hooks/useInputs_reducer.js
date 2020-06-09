import { useReducer, useCallback } from 'react';

const INPUT_REDUCER_ON_CHANGE = 'INPUT_REDUCER_ON_CHANGE';
const INPUT_REDUCER_RESET = 'INPUT_REDUCER_RESET';

const inputReducer = function(state, action) {
  console.log('inputReducer : ', state, action);
  switch (action.type) {
    case INPUT_REDUCER_ON_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case INPUT_REDUCER_RESET:
      return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = '';
        return acc;
      }, {});
    default:
      throw new Error('Unhandled Action Type On Input Reducer.');
  }
};

function useInputs_reducer(initialForm) {
  const [form, dispatch] = useReducer(inputReducer, initialForm);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch(
      {
        type: INPUT_REDUCER_ON_CHANGE,
        name,
        value,
      },
      [],
    );
  }, []);

  const reset = useCallback(() => dispatch({ type: INPUT_REDUCER_RESET }), []);

  return [form, onChange, reset];
}
export default useInputs_reducer;
