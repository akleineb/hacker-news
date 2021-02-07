import axios from 'axios'
import { getCache, saveCache } from './cacheHandler'

export const getRequestData = async (requestUrl, defaultValue) => {
    if (isOffline()) {
        // return cached item or default value if not cached already
        return getCache(requestUrl, defaultValue);
    }

    try {
        const { data } = await axios.get(requestUrl);
        saveCache(requestUrl, data);

        return data;
    } catch (err) {
        return defaultValue;
    }
}

export const isOffline = () => {
    return !navigator.onLine;
}