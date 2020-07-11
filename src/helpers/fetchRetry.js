const wait = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const fetchRetry = async (url, options = {}, triesLeft = 3, attempt = 0) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    if (response.status < 500) {
      const json = await response.json();
      throw new Error(json.error);
    }

    if (triesLeft > 1) {
      await wait(Math.pow(2, attempt) * 1000);
      return fetchRetry(url, options, triesLeft - 1, attempt + 1);
    }

    throw new Error('An unknown error has occurred');
  }

  return await response.json();
};

export default fetchRetry;
