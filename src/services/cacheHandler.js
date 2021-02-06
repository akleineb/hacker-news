export const saveCache = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
    return value;
}

export const getCache = (name, defaultValue) => {
    const cachedValue = localStorage.getItem(name);

    if (cachedValue === null || !cachedValue) {
        return defaultValue;
    }

    return JSON.parse(cachedValue);
}