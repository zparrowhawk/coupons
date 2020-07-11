import fetchMock from 'fetch-mock-jest';
import fetchRetry from './fetchRetry';
import jestify from 'fetch-mock-jest/jestify';

const url = 'https://example.com';

describe('fetchRetry', () => {
  it('should proxy to fetch', async () => {
    fetchMock.get(url, { body: [] });
    await fetchRetry(url, {
      method: 'GET',
    });
    expect(fetchMock).toHaveBeenCalledWith(url, {
      method: 'GET',
    });
    fetchMock.reset();
  });

  it('should throw an error for 4xx', async (done) => {
    expect.assertions(1);

    fetchMock.get(url, {
      status: 400,
      body: { error: 'Failed!' },
    });

    try {
      await fetchRetry(url, {
        method: 'GET',
      });
    } catch (error) {
      expect(error.message).toBe('Failed!');
      done();
    } finally {
      fetchMock.reset();
    }
  });

  it('should retry on 500 and throw error on failure', async () => {
    fetchMock.get(url, 500);
    const m = {
      fetchRetry,
    };

    const spy = jest.spyOn(m, 'fetchRetry');
    try {
      await spy(url, {
        method: 'GET',
      });
      expect(spy).toHaveBeenCalledTimes(4);
    } catch (error) {
      expect(error.message).toBe('An unknown error has occurred');
    } finally {
      spy.mockRestore();
      fetchMock.reset();
    }
  });
});
