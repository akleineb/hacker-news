import { useState, useEffect } from 'react';

export const useScrollPaginator = () => {
    const [page, setPage] = useState(1);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollHeight - scrollTop === clientHeight) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return { page };
}