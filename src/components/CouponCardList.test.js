import React from 'react';
import { shallow, mount } from 'enzyme';
import CouponCardList from './CouponCardList';
import { ClickableCouponCard } from './CouponCard';

describe('CouponCardList', () => {
  it('should render all coupons', () => {
    const wrapper = shallow(<CouponCardList coupons={coupons} />);
    expect(coupons).toEqual(
      wrapper.find(ClickableCouponCard).map((l) => l.prop('coupon'))
    );
  });
  it('should call on onClickCard and pass the clicked coupon', () => {
    const onClickCard = jest.fn();
    const wrapper = mount(
      <CouponCardList coupons={coupons} onClickCard={onClickCard} />
    );
    wrapper.find('button').at(0).simulate('click');
    expect(onClickCard).toHaveBeenCalledWith(coupons[0]);
  });
});

const coupons = [
  {
    id: 1,
    title: 'Get 50% Off Your Purchase',
    description: 'Enter code at Mattress Firm',
    code: 'MATTRESS',
    store: {
      name: 'Mattress Firm',
      logo_url:
        'https://api.givingassistant.org/v5/bd/image?i=aW1hZ2VfdXJsPWh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2dpdmluZy1hc3Npc3RhbnQvaW1hZ2UvdXBsb2FkL2NfbHBhZCxoXzk2LHdfOTYsZHByX2F1dG8sZl9hdXRvLGRfbWVyY2hhbnQ6bWVyY2hhbnREZWZhdWx0LnBuZy92MjAyMDA3MDkvbWVyY2hhbnQvbWF0dHJlc3NmaXJtLmNvbS5qcGcmaW1wcmVzc2lvbl91cmw9aHR0cHM6Ly9iZC5naXZpbmdhc3Npc3RhbnQub3JnL2kuZ2lmP2U9ZXlKMklqb2lNUzQySWl3aVlYWWlPalE0TlRnMk9Dd2lZWFFpT2pNME1qSXNJbUowSWpvd0xDSmpiU0k2TVRVMk5EUTNOeXdpWTJnaU9qTXdOREkzTENKamF5STZlMzBzSW1OeUlqb3hOelUzTVRBME9Dd2laR2tpT2lJM1pqWXlZakEwT0RGbU1qazBaRFZrT0RabU5EWTVaamN3TldabFpHVTJZeUlzSW1ScUlqb3dMQ0pwYVNJNkltVTVORGhoWmpZeVpEQmhPVFJoWkRCaVpHUmpaamt6WmpkbFlXWm1NVGRrSWl3aVpHMGlPak1zSW1aaklqb3lNREkwTURrM055d2labXdpT2pFeE9UWTNNekk0TENKcGNDSTZJakkyTURBNk9EZ3dNRG94TkRBeU9qVXdNRHBoTkRBME9qWm1NREk2Wm1NMk1EcGlOalpoSWl3aWEzY2lPaUoxYzJWeUxteHZaMmRsWkdsdUxtWmhiSE5sTEhWelpYSjBlWEJsTG5CdmQyVnlMSFZ6WlhKMGVYQmxMbUZrYldsdUxtNXZibkJ5YjJacGRDNW1ZV3h6WlN4MWMyVnlMbTV2Ym5CeWIyWnBkQzVtWVd4elpTeGlkWFIwYjI0dWFXNXpkR0ZzYkdWa0xtWmhiSE5sTEcxbGNtTm9ZVzUwTG0xdmJtVjBhWHBwYm1jdVptRnNjMlVzWlc1MkxuQnliMlIxWTNScGIyNGlMQ0p1ZHlJNk1UQXhOakVzSW5Caklqb3dMQ0psWXlJNk1Dd2ljSElpT2pFeE9UY3lPQ3dpY25RaU9qRXNJbkptSWpvaUlpd2ljbk1pT2pVd01Dd2ljMkVpT2lJNElpd2ljMklpT2lKcExUQTJNRGxsT1dVeU1UZGlNemhsWldFMklpd2ljM0FpT2pFeU5USTJMQ0p6ZENJNk1UQXlOREF6Tml3aWRXc2lPaUoxWlRFdFlqTmtZbVF5T1dNNVpHWXlORGN6TUdJMFpETTNZVEE0WlRBMllqUTJPVE1pTENKNmJpSTZNVGczTXpVekxDSjBjeUk2TVRVNU5ETTBPVFl5TmpJek9Td2lZbVlpT25SeWRXVXNJbkJ1SWpvaWJHOW5iekVpTENKbll5STZkSEoxWlN3aVozTWlPaUp1YjI1bElpd2lkSG9pT2lKVlZFTWlMQ0ppWVNJNk1Td2labkVpT2pCOSZzPXk4c3Rsc3lfVEJqWW9qclVIeFlNazlEbXlWVQ==',
    },
  },
  {
    id: 2,
    title: "Get $60 Off - That's $15 Off Your First 4 Boxes",
    description: 'Enter code at Home Chef',
    code: 'FOOD',
    store: {
      name: 'Home Chef',
      logo_url:
        'https://api.givingassistant.org/v5/bd/image?i=aW1hZ2VfdXJsPWh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2dpdmluZy1hc3Npc3RhbnQvaW1hZ2UvdXBsb2FkL2NfbHBhZCxoXzk2LHdfOTYsZHByX2F1dG8sZl9hdXRvLGRfbWVyY2hhbnQ6bWVyY2hhbnREZWZhdWx0LnBuZy92MjAyMDA3MDkvbWVyY2hhbnQvaG9tZWNoZWYuY29tLmpwZyZpbXByZXNzaW9uX3VybD1odHRwczovL2JkLmdpdmluZ2Fzc2lzdGFudC5vcmcvaS5naWY/ZT1leUoySWpvaU1TNDJJaXdpWVhZaU9qZ3dNRGMzTlN3aVlYUWlPak0wTWpJc0ltSjBJam93TENKamJTSTZNVFUwTlRreE5Dd2lZMmdpT2pNd05ESTNMQ0pqYXlJNmUzMHNJbU55SWpveE56RTFNVFEwTWl3aVpHa2lPaUkzTkRGa1lXWmlObUU1TWpBME16VTNZV1V4TURNNE1qTTRZbVJpTlRGak9TSXNJbVJxSWpvd0xDSnBhU0k2SW1ObFl6SmxNekkzWm1FNVpUUmpOV1JpTWpFME1ETTVZekJpWkdZNU1UQmpJaXdpWkcwaU9qTXNJbVpqSWpveE9UZ3lNamc0Tnl3aVptd2lPakV4TlRjM01USTRMQ0pwY0NJNklqSTJNREE2T0Rnd01Eb3hOREF5T2pVd01EcGhOREEwT2pabU1ESTZabU0yTURwaU5qWmhJaXdpYTNjaU9pSjFjMlZ5TG14dloyZGxaR2x1TG1aaGJITmxMSFZ6WlhKMGVYQmxMbkJ2ZDJWeUxIVnpaWEowZVhCbExtRmtiV2x1TG01dmJuQnliMlpwZEM1bVlXeHpaU3gxYzJWeUxtNXZibkJ5YjJacGRDNW1ZV3h6WlN4aWRYUjBiMjR1YVc1emRHRnNiR1ZrTG1aaGJITmxMRzFsY21Ob1lXNTBMbTF2Ym1WMGFYcHBibWN1Wm1Gc2MyVXNaVzUyTG5CeWIyUjFZM1JwYjI0aUxDSnVkeUk2TVRBeE5qRXNJbkJqSWpvd0xDSmxZeUk2TUN3aWNISWlPakV4T1RjeU9Td2ljblFpT2pFc0luSm1Jam9pSWl3aWNuTWlPalV3TUN3aWMyRWlPaUk0SWl3aWMySWlPaUpwTFRBMk1EbGxPV1V5TVRkaU16aGxaV0UySWl3aWMzQWlPakV5TlRJMkxDSnpkQ0k2TVRBeU5EQXpOaXdpZFdzaU9pSjFaVEV0WWpOa1ltUXlPV001WkdZeU5EY3pNR0kwWkRNM1lUQTRaVEEyWWpRMk9UTWlMQ0o2YmlJNk1UZzNNelUzTENKMGN5STZNVFU1TkRNME9UWXlOakkwTVN3aVltWWlPblJ5ZFdVc0luQnVJam9pYkc5bmJ6VWlMQ0puWXlJNmRISjFaU3dpWjNNaU9pSnViMjVsSWl3aWRIb2lPaUpWVkVNaUxDSmlZU0k2TVN3aVpuRWlPakI5JnM9QkJjMmNTMGhvOU5mdlNPNVlNMkNjRmdzMXhF',
    },
  },
];
