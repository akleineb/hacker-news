import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  test('static headline renders', () => {
    // arrange
    render(<App />);

    // act
    const headlineElement = screen.getByText(/Hacker News/i);

    // assert
    expect(headlineElement).toBeInTheDocument();
  });
})