import { getRequestData } from './offlineFallbackHandler';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const storyUrl = `${baseUrl}/item/` // add storyId as suffix + .json
export const storiesUrl = `${baseUrl}/newstories.json`

export const getStory = (storyId) => {
    const requestUrl = `${storyUrl + storyId}.json`;

    return getRequestData(requestUrl, {});
};

export const getStories = () => {
    return getRequestData(storiesUrl, []);
};