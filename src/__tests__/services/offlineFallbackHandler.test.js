import axios from 'axios';
import { getRequestData, isOffline } from '../../services/offlineFallbackHandler';
import { saveCache, getCache } from '../../services/cacheHandler';

jest.mock('axios');
jest.mock('../../services/cacheHandler');

describe('OfflineFirstHandler', () => {

    test('knows if i am offline', () => {
        // arrange
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);

        // act
        const response = isOffline()

        // assert
        expect(response).toStrictEqual(true);
    });

    test('knows if i am online', () => {
        // arrange
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

        // act
        const response = isOffline()

        // assert
        expect(response).toStrictEqual(false);
    });

    test('getRequestData returns cache if offline', async () => {
        // arrange
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);
        const testUrl = 'https://github.com';
        const testData = { data: { id: 1234 } };
        getCache.mockReturnValueOnce(testData.data);

        // act
        const response = await getRequestData(testUrl, {});

        // assert
        expect(response).toStrictEqual(testData.data);
    });

    test('getRequestData adds response data to cache if online', async () => {
        // arrange
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
        const testUrl = 'https://github.com';
        const testData = { data: { id: 1234 } };
        axios.get.mockResolvedValue(testData);

        // act
        const response = await getRequestData(testUrl, {});

        // assert
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(saveCache).toBeCalledWith(testUrl, testData.data);
        expect(response).toStrictEqual(testData.data);
    });
})