// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import {BtnProps} from './types';

const Wrapper = styled.button<BtnProps>`
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.variant === 'primary' ? 'blue' : 'red')};
  color: ivory;
`;

function Button({variant, disabled, children}: BtnProps): JSX.Element {
  return (
    <Wrapper variant={variant} disabled={disabled} type="button">
      {children}
    </Wrapper>
  );
}

export default Button;
