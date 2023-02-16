/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    color: red;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <h1>This is my Button!</h1>
    </Wrapper>
  );
}
