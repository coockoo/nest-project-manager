import React, { useCallback } from 'react';
import cn from 'classnames';

import s from './styles.less';

export default function Button(props) {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      props.onClick(props.data);
    },
    [props.onClick, props.data]
  );

  return (
    <button
      className={cn(s.button, props.className)}
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};
