import { COUPONS_API_ROOT } from '../constants';

export const fetchCoupons = async () => {
  const response = await fetch(`${COUPONS_API_ROOT}/coupons`);
  return await response.json();
};
