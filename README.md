# Coupons

## Local

`$ npm install`

`$ npm start`

`$ npm run test` - just a couple of example tests are available

## Mock APIs

The following API mocks were created:

- `GET /coupons` returns two coupons so I could demonstrate display of multiple offers and loading different data into the modal
- `POST /email/subscribe` was created to handle email subscriptions. It contains the following logic:
  - body `{"email": "fail@email.com"}` will return a 400 error
  - body `{"email": "retry@email.com"}` will return a 500 error
  - all other requests return 200

The idea is that you would make the constant `COUPONS_API_ROOT` an environment variable to allow calling these mocks in a test environment, but call "real" APIs in other environments, so the UI scenarios can be tested independent of the backend APIs.

## Testing Scenarios

- To test an input failure (400), use "fail@email.com"
- To test a server failure with retries, use "retry@email.com"
- Any other email will succeed
