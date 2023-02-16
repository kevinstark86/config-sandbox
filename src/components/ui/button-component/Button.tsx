// eslint-disable-next-line import/no-extraneous-dependencies
import styled, {css} from 'styled-components';
import {BtnProps} from './types';

const Wrapper = styled.button<BtnProps>`
  padding: 10px 40px;
  border-radius: 5px;
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
`;

function Button({variant, disabled, children}: BtnProps): JSX.Element {
  return (
    <Wrapper variant={variant} disabled={disabled} type="button">
      {children}
    </Wrapper>
  );
}

export default Button;
