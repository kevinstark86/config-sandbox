/* eslint-disable import/no-extraneous-dependencies */
import Button from '@/components/button/Button';
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
      <Button variant="primary" disabled={false}>
        Click Me
      </Button>
    </Wrapper>
  );
}
