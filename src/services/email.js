import { COUPONS_API_ROOT } from '../constants';
import fetchRetry from '../helpers/fetchRetry';

export const subscribe = async (email) => {
  return await fetchRetry(`${COUPONS_API_ROOT}/email/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });
};
