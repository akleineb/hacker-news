import { render, screen, waitFor } from '@testing-library/react';
import { Stories } from '../../components/Stories';
import { getStory, getStories } from '../../services/hackerNewsApi';

jest.mock('../../services/hackerNewsApi');

describe('Stories', () => {

    test('stories renders story', async () => {
        // arrange
        const storyData = {
            id: 1234,
            by: 'Test',
            time: 1612617490,
            title: 'Test Article',
            url: 'https://blog.doist.com/context-switching'
        };
        getStory.mockResolvedValueOnce(storyData);
        getStories.mockResolvedValueOnce([storyData.id]);

        // act
        render(<Stories />);

        // assert
        await waitFor(() => {
            expect(getStories).toHaveBeenCalledTimes(1);
            expect(screen.getByTestId('story')).toBeInTheDocument()
        });
    })

});