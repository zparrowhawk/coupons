import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { subscribe } from '../services/email';

function EmailSubscriptionForm() {
  const [subscribedEmail, setSubscribedEmail] = useState(null);
  const [subscribeError, setSubscribeError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const onFinish = async (values) => {
    try {
      setIsFetching(true);
      const response = await subscribe(values.email);
      setSubscribedEmail(response.email);
      setSubscribeError(null);
    } catch (error) {
      setSubscribeError(error.message);
    }
    setIsFetching(false);
  };
  return (
    <Form name="subscribe" onFinish={onFinish}>
      {!!subscribedEmail && (
        <Alert
          type="success"
          message={`${subscribedEmail} has been subscribed!`}
          style={{ fontSize: 12, marginBottom: 10 }}
        />
      )}
      {!!subscribeError && (
        <Alert
          type="error"
          message={subscribeError}
          style={{ fontSize: 12, marginBottom: 10 }}
        />
      )}
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        style={{ textAlign: 'left' }}
      >
        <Input placeholder="Enter your email address" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!!subscribedEmail}
          loading={isFetching}
        >
          Subscribe
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EmailSubscriptionForm;
