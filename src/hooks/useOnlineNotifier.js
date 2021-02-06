import { useState, useEffect } from 'react';

export const useOnlineNotifier = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const handleOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    }

    useEffect(() => {
        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);
    }, [])

    return { isOnline };
}