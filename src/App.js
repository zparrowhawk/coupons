import React, { useState, useEffect } from 'react';
import CouponModal from './components/CouponModal';
import CouponCardList from './components/CouponCardList';
import { fetchCoupons } from './services/coupons';
import './App.css';

function App() {
  const [coupons, setCoupons] = useState([]);
  const [activeCoupon, setActiveCoupon] = useState(null);

  useEffect(() => {
    (async () => {
      const coupons = await fetchCoupons();
      setCoupons(coupons);
    })();
  }, []);

  return (
    <div className="App">
      <CouponCardList coupons={coupons} onClickCard={setActiveCoupon} />
      <CouponModal
        coupon={activeCoupon}
        visible={activeCoupon !== null}
        onCancel={() => setActiveCoupon(null)}
      />
    </div>
  );
}

export default App;
