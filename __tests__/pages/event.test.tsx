import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import {Event} from '../../src/pages';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('../../src/components/header/header.component.tsx', () => (
  <Text>HeaderMock</Text>
));
jest.mock('../../src/pages/event/components/EventCard.tsx', () => (
  <Text>EventCardMock</Text>
));

describe('Event', () => {
  it('renders header and sections correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Event />
      </NavigationContainer>,
    );

    expect(getByText('Header')).toBeTruthy();
    expect(getByText('EventCard')).toBeTruthy();
  });
});
