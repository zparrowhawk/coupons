import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { ClickableCouponCard } from './components/CouponCard';
import CouponModal from './components/CouponModal';
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
      <Row gutter={16}>
        {coupons.map((coupon) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            key={`coupon-${coupon.id}`}
            className="CouponCardCell"
          >
            <ClickableCouponCard
              coupon={coupon}
              onClick={() => setActiveCoupon(coupon)}
            />
          </Col>
        ))}
      </Row>
      <CouponModal
        coupon={activeCoupon}
        visible={activeCoupon !== null}
        onCancel={() => setActiveCoupon(null)}
      />
    </div>
  );
}

export default App;
