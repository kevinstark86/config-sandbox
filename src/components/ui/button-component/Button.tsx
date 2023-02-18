// eslint-disable-next-line import/no-extraneous-dependencies
import styled, {css} from 'styled-components';
import {BtnProps} from './types';

// Component Styling
const Wrapper = styled.button<BtnProps>`
  padding: 10px 40px;
  border-radius: 5px;
  cursor: pointer;
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: blue;
      color: ivory;
      border: none;
    `}
  ${props =>
    props.variant === 'secondary' &&
    css`
      border: 2px solid blue;
      color: blue;
      background-color: transparent;
    `}
    ${props =>
    props.variant === 'warning' &&
    css`
      border: none;
      color: ivory;
      background-color: red;
    `}
    ${props =>
    props.disabled === true &&
    css`
      background-color: grey;
      border: none;
      color: ivory:
    `}
`;

function Button({variant, disabled, onClick, children}: BtnProps): JSX.Element {
  return (
    <Wrapper variant={variant} disabled={disabled} onClick={onClick} type="button">
      {children}
    </Wrapper>
  );
}

export default Button;
