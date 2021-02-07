import { useScrollPaginator } from '../hooks/useScrollPaginator';
import { useDebouncedEffect } from '../hooks/useDebouncedEffect';
import { getStories } from '../services/hackerNewsApi';
import { Information } from '../styles/Information';
import React, { useState, useEffect } from 'react';
import { Story } from './Story';

export const Stories = () => {
    const SCROLL_INCREMENT = 15;
    const MAX_STORIES = 500;

    const { page } = useScrollPaginator()
    const [stories, setStories] = useState([]);
    const [currentStories, setCurrentStories] = useState([]);
    const [currentStoriesCount, setCurrentStoriesCount] = useState(SCROLL_INCREMENT);
    const [isLoading, setIsLoading] = useState(false);
    const [isEndOfList, setIsEndOfList] = useState(false);

    useEffect(() => {
        async function loadStories() {
            setStories(await getStories());
            setIsLoading(false)
        }

        loadStories();
    }, []);

    useEffect(() => {
        if (currentStoriesCount === MAX_STORIES) {
            setIsEndOfList(true);
            return;
        }

        setIsLoading(true);
        const nextStoriesCount = page * SCROLL_INCREMENT;
        setCurrentStoriesCount(nextStoriesCount > MAX_STORIES ? MAX_STORIES : nextStoriesCount);
    }, [currentStoriesCount, isLoading, page]);

    useDebouncedEffect(() => {
        setCurrentStories(stories.slice(0, currentStoriesCount));
    }, 50, [currentStoriesCount, stories])

    return (
        <div>
            {currentStories.map((storyId) => (
                <Story key={storyId} storyId={storyId} />
            ))}
            { isLoading && !isEndOfList && <Information title='More stories are currently being loaded.'>Loading..</Information>}
        </div>
    );
}