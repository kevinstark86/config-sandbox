import {BtnProps} from './types';
import {primaryStyle, secondaryStyle} from './styles';

function Button({variant, disabled, children}: BtnProps): JSX.Element {
  return (
    <button
      style={variant === 'primary' ? primaryStyle : secondaryStyle}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
