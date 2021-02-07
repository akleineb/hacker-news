export const saveCache = (name, value) => {
    cleanUp();

    localStorage.setItem(name, JSON.stringify({
        iat: Date.now().toString(),
        value
    }));
}

export const getCache = (name, defaultValue) => {
    const cachedValue = localStorage.getItem(name);

    if (cachedValue === null || !cachedValue) {
        return defaultValue;
    }

    return JSON.parse(cachedValue).value ?? defaultValue;
}

const cleanUp = () => {
    // skip mostly all cleanUp calls
    if (!navigator.onLine || Math.floor(Math.random() * 50) > 2) {
        return;
    }

    const twoDays = 1000 * 60 * 60 * 24 * 2; // unit * seconds * minutes * hours * days

    Object.keys(localStorage).forEach(key => {
        const { iat } = JSON.parse(localStorage.getItem(key));

        if (!iat || Date.now() > (parseFloat(iat) + twoDays)) {
            localStorage.removeItem(key);
        }
    });
}