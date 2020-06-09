import React, { useReducer, useCallback } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled Action.');
  }
}

export default React.memo(function Counter() {
  const [number, dispatch] = useReducer(counterReducer, 0);
  const onIncrese = useCallback(() => {
    dispatch({
      type: 'INCREMENT',
    });
  }, []);

  const onDecrease = useCallback(() => {
    dispatch({
      type: 'DECREMENT',
    });
  }, []);

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrese}> +1 </button>
        <button onClick={onDecrease}> -1 </button>
      </div>
    </>
  );
});
