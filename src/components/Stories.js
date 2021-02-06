import { useScrollPaginator } from '../hooks/useScrollPaginator';
import { useDebouncedEffect } from '../hooks/useDebouncedEffect';
import { getStories } from '../services/hackerNewsApi';
import { Information } from '../styles/Information';
import React, { useState, useEffect } from 'react';
import { Story } from './Story';

export const Stories = () => {
    const SCROLL_INCREMENT = 15;
    const MAX_STORIES = 100;

    let { page } = useScrollPaginator()
    const [stories, setStories] = useState([]);
    const [currentStoriesCount, setCurrentStoriesCount] = useState(SCROLL_INCREMENT);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (currentStoriesCount === MAX_STORIES) {
            return;
        }

        setIsLoading(true);
        const nextStoriesCount = page * SCROLL_INCREMENT;
        setCurrentStoriesCount(nextStoriesCount > MAX_STORIES ? MAX_STORIES : nextStoriesCount);
    }, [currentStoriesCount, isLoading, page]);

    useDebouncedEffect(() => {
        async function loadStories() {
            setStories(await getStories(currentStoriesCount));
            setIsLoading(false)
        }

        loadStories();
    }, 300, [currentStoriesCount])

    return (
        <div>
            {stories.map((storyId) => (
                <Story key={storyId} storyId={storyId} />
            ))}
            { isLoading && <Information title='More stories are currently being loaded.'>Loading..</Information>}
        </div>
    );
}