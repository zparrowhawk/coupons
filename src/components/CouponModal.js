import React, { useRef, useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import './CouponModal.css';

function CouponModal({ coupon, visible = false, onCancel }) {
  const couponEl = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [coupon]);

  if (!coupon) {
    return null;
  }

  const { store } = coupon;

  function handleCouponCopy() {
    couponEl.current.input.select();
    document.execCommand('copy');
    setCopied(true);
  }

  return (
    <Modal
      className="CouponModal"
      title={store.name}
      onCancel={onCancel}
      visible={visible}
      width={720}
      footer={null}
    >
      <Row gutter={24}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <Row gutter={16}>
            <Col span={8}>
              <img src={store.logo_url} alt={`${store.name} logo`} />
            </Col>
            <Col className="CouponModal__title" span={16}>
              <h4 className="CouponModal__title__headline">{coupon.title}</h4>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>{coupon.description}</p>
              <div>
                <Input
                  value={coupon.code}
                  ref={couponEl}
                  readOnly={true}
                  addonAfter={
                    <Button onClick={handleCouponCopy}>
                      {copied === true ? 'Copied' : 'Copy'}
                    </Button>
                  }
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="CouponModal__email-form" span={12}>
          <p>
            <MailOutlined style={{ fontSize: 32 }} />
          </p>
          <h4>Want more deals like this?</h4>
          <p>
            Be the first to see new deals, try new features, and hear great
            news.
          </p>
          <EmailSubscriptionForm />
        </Col>
      </Row>
    </Modal>
  );
}

export default CouponModal;
