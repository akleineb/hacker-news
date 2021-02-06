import { isOffline } from '../../services/offlineFallbackHandler';

describe('OfflineFirstHandler', () => {

    test('knows if i am offline', async () => {
        // arrange
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);

        // act
        const response = isOffline()

        // assert
        expect(response).toStrictEqual(true);
    });

    test('knows if i am online', async () => {
        // arrange
        jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

        // act
        const response = isOffline()

        // assert
        expect(response).toStrictEqual(false);
    });

})