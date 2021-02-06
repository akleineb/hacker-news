import { getHostNameFromUrl } from '../services/urlParser';
import { getStory } from '../services/hackerNewsApi';
import React, { useState, useEffect, memo } from 'react';
import { timeSince } from '../services/humanTime';
import { Card } from '../styles/Card';

export const Story = memo(function Story({ storyId, position }) {
    const [story, setStory] = useState(null);

    useEffect(() => {
        getStory(storyId).then(res => setStory(res));
    }, [storyId]);

    if (story === null || !story.url) {
        return null;
    }

    const postedTimeAgo = timeSince(story.time);
    const cardAccessibility = `Story: "${story.title}" written by ${story.by} ${postedTimeAgo}.`

    return (
        <Card data-testid='story' title={cardAccessibility}>
            <a href={story.url} target='_blank' rel='noreferrer' title={`external link goes to ${getHostNameFromUrl(story.url)}`}>
                <h2 data-testid='story-headline'>{story.title}</h2>
            </a>
            <p>
                by {story.by} {postedTimeAgo}
            </p>
        </Card>
    )
});