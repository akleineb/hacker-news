import { render, screen } from '@testing-library/react';
import { OfflineNotification } from '../../components/OfflineNotification';

describe('OfflineNotification', () => {
  test('offline notification appears if user is offline', () => {
    // arrange
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);
    render(<OfflineNotification />);

    // act
    const offlineElement = screen.getByText(/You are currently offline/i);

    // assert
    expect(offlineElement).toBeInTheDocument();
  });

  test('offline notification appears not if user is online', () => {
    // arrange
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
    render(<OfflineNotification />);

    // act

    // assert
    expect(() => screen.getByText(/You are currently offline/i)).toThrow()
  });
})