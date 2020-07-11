import React from 'react';
import { Card } from 'antd';
import './CouponCard.css';

const Meta = Card.Meta;

export function ClickableCouponCard({ onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
      }}
    >
      <CouponCard {...props} />
    </button>
  );
}

function CouponCard({ coupon }) {
  const { store } = coupon;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={`${store.name} logo`} src={store.logo_url} />}
      className="CouponCard"
    >
      <Meta title={store.name} description={coupon.title} />
    </Card>
  );
}

export default CouponCard;
