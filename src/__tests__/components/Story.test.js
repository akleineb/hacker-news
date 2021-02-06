import { render, screen, waitFor } from '@testing-library/react';
import { Story } from '../../components/Story';
import { getStory } from '../../services/hackerNewsApi';

jest.mock('../../services/hackerNewsApi');

describe('Story', () => {

    test('story displays data returned from api', async () => {
        // arrange
        const data = {
            id: 1234,
            by: 'Test',
            time: 1612617490,
            title: 'Context Switching',
            url: 'https://blog.doist.com/context-switching'
        };
        getStory.mockResolvedValueOnce(data);

        // act
        render(<Story storyId={1234} />);

        // assert
        expect(getStory).toHaveBeenCalledTimes(1);
        expect(getStory).toHaveBeenCalledWith(1234);

        await waitFor(() => {
            expect(screen.getByTestId('story-headline')).toBeInTheDocument()
            expect(screen.getByText('Context Switching')).toBeInTheDocument()
        });
    })

});