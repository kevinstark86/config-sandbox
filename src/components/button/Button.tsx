// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import {BtnProps} from './types';

const Wrapper = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 5px;

  color: ivory;
  .primary {
    background-color: lightblue;
    color: ivory;
  }
  .secondary {
    background-color: orange;
    color: ivory;
  }
`;

function Button({variant, disabled, children}: BtnProps): JSX.Element {
  return (
    <Wrapper className={variant} disabled={disabled} type="button">
      {children}
    </Wrapper>
  );
}

export default Button;
