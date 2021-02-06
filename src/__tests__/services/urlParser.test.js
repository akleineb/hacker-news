import { getHostNameFromUrl } from '../../services/urlParser';

describe('UrlParser', () => {

    test('returns correct domain if url is valid', async () => {
        // arrange
        const url = 'https://blog.doist.com/context-switching/';
        const domain = 'blog.doist.com';

        // act
        const parsedUrl = getHostNameFromUrl(url);

        // assert
        expect(parsedUrl).toStrictEqual(domain);
    });

    test('returns could not resolve if url is not valid', async () => {
        // arrange
        const url = 'context-switching';
        const message = 'could not resolve';

        // act
        const parsedUrl = getHostNameFromUrl(url);

        // assert
        expect(parsedUrl).toStrictEqual(message);
    });
})