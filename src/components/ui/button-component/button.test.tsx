/* eslint-disable import/no-extraneous-dependencies */
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('button renders children', () => {
  render(
    <Button variant="primary" disabled={false}>
      Click Me
    </Button>
  );
  const button = screen.getByRole('button', {name: /click me/i});
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Click Me');
});
