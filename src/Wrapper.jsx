import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    paddig: 16,
  };

  return <div style={style}>{children}</div>;
}

export default React.memo(
  Wrapper,
  (prevProps, nextProps) => nextProps.children === prevProps.children,
);
