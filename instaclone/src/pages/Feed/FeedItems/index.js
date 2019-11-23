import React from 'react';
import { View, Text } from 'react-native';

export default function FeedItems({item}) {
  return (
  <Text>{item.author}</Text>
  );
}
