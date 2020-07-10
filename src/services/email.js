import { COUPONS_API_ROOT } from '../constants';

const wait = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};

export const subscribe = async (email, triesLeft = 3, attempt = 0) => {
  const response = await fetch(`${COUPONS_API_ROOT}/email/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });
  const json = await response.json();

  if (!response.ok) {
    if (response.status < 500) {
      throw new Error(json.error);
    }

    if (triesLeft > 1) {
      await wait(Math.pow(2, attempt) * 1000);
      return subscribe(email, triesLeft - 1, attempt + 1);
    }

    throw new Error('An unknown error has occurred');
  }

  return json;
};
