import axios from 'axios';
import { getStories, getStory } from '../../services/hackerNewsApi';

jest.mock('axios');

describe('HackerNewsApi', () => {

    test('story call returns default data if offline', async () => {
        // arrange
        jest.mock('axios');
        axios.get.mockResolvedValue({ data: { id: 1234 } });
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);

        // act
        const storyData = await getStory(1234);

        // assert
        expect(storyData).toStrictEqual({});
    });

    test('story call returns response data if online', async () => {
        // arrange
        jest.mock('axios');
        const response = { id: 1234 };
        axios.get.mockResolvedValue({ data: response });
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

        // act
        const storyData = await getStory(1234);

        // assert
        expect(storyData).toStrictEqual(response);
    });

    test('getStories returns multiple stories', async () => {
        // arrange
        jest.mock('axios');
        const response = [{ id: 1234 }, { id: 1234 }, { id: 1234 }];
        axios.get.mockResolvedValue({ data: response });
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

        // act
        const stories = await getStories();
        const storiesLength = stories.length;

        // assert
        expect(storiesLength).toStrictEqual(response.length);
    });
})