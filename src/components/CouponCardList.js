import React from 'react';
import { Row, Col } from 'antd';
import { ClickableCouponCard } from './CouponCard';

function CouponCardList({ coupons, onClickCard }) {
  return (
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
            onClick={() => onClickCard(coupon)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default CouponCardList;
