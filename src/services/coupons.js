import { COUPONS_API_ROOT } from '../constants';
import fetchRetry from '../helpers/fetchRetry';

export const fetchCoupons = async () => {
  return await fetchRetry(`${COUPONS_API_ROOT}/coupons`);
};
