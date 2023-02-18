/* eslint-disable import/no-extraneous-dependencies */
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('render variant styles', () => {
  test('primary variant', () => {
    const tree = renderer
      .create(
        <Button variant="primary" disabled={false} onClick={() => {}}>
          Click Me
        </Button>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('background-color', 'blue');
    expect(tree).toHaveStyleRule('color', 'ivory');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
  test('secondary variant', () => {
    const tree = renderer
      .create(
        <Button variant="secondary" disabled={false} onClick={() => {}}>
          Click Me
        </Button>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('border', '2px solid blue');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
  test('warning variant', () => {
    const tree = renderer
      .create(
        <Button variant="warning" disabled={false} onClick={() => {}}>
          Click Me
        </Button>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('background-color', 'red');
    expect(tree).toHaveStyleRule('color', 'ivory');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});

describe('button functionality', () => {
  test('button renders children', () => {
    render(
      <Button variant="primary" disabled={false} onClick={() => {}}>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  test('button is disabled', () => {
    render(
      <Button variant="primary" disabled onClick={() => {}}>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('onClick fires when clicked', () => {
    const mockOnClickFunction = jest.fn();
    render(
      <Button variant="primary" disabled={false} onClick={mockOnClickFunction}>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(mockOnClickFunction).toBeCalled();
  });
});
