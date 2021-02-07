import '@testing-library/jest-dom';

class LocalStorage {
    store = {};
    setItem = (key, val) => (this.store[key] = val);
    getItem = (key) => this.store[key];
    removeItem = (key) => {
        delete this.store[key];
    };
    clear = () => (this.store = {});
}

let fakeLocalStorage = new LocalStorage();
fakeLocalStorage = new Proxy(fakeLocalStorage, {
    ownKeys: (target) => {
        return Object.keys(target.store);
    },
    getOwnPropertyDescriptor(k) {
        return {
            enumerable: true,
            configurable: true
        };
    },
});

Object.defineProperty(window, 'localStorage', { value: fakeLocalStorage });