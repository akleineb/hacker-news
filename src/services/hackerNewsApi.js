import { getRequestData } from './offlineFallbackHandler';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const storyUrl = `${baseUrl}/item/` // add storyId as suffix + .json
export const storiesUrl = `${baseUrl}/newstories.json`

export const getStory = async (storyId) => {
    const requestUrl = `${storyUrl + storyId}.json`;

    return getRequestData(requestUrl, {});
};

export const getStories = async (maxStories) => {
    const stories = await getRequestData(storiesUrl, []);

    return stories.slice(0, maxStories);
};