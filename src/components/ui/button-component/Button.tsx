// eslint-disable-next-line import/no-extraneous-dependencies
import styled, {css} from 'styled-components';
import {BtnProps} from './types';

// Component Styling
const Wrapper = styled.button<BtnProps>`
  padding: 10px 40px;
  border-radius: 5px;
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: blue;
      color: ivory;
      border: none;
      &:hover {
        cursor: pointer;
      }
    `}
  ${props =>
    props.variant === 'secondary' &&
    css`
      border: 2px solid blue;
      color: blue;
      background-color: transparent;
      &:hover {
        cursor: pointer;
      }
    `}
    ${props =>
    props.variant === 'warning' &&
    css`
      border: none;
      color: ivory;
      background-color: red;
      &:hover {
        cursor: pointer;
      }
    `}
    ${props =>
    props.disabled === true &&
    css`
      background-color: grey;
      border: none;
      color: ivory:
    `}
`;

function Button({variant, disabled, children}: BtnProps): JSX.Element {
  return (
    <Wrapper variant={variant} disabled={disabled} type="button">
      {children}
    </Wrapper>
  );
}

export default Button;
