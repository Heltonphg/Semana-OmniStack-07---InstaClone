import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import api from '../../services/api';
import FeedItems from './FeedItems';

import Header from '../components/Header'

export default function Feed(props) {
  const [feed, setFeed] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function populationFeed() {
    setRefreshing(true)
    const response = await api.get('posts');
    setFeed(response.data);
    setRefreshing(false)
  }

  useEffect(() => {
    //registerToSocket();
    populationFeed();
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
      <Header navigation={props.navigation} />

      <FlatList
        onRefresh={populationFeed}
        refreshing={refreshing}
        data={feed}
        keyExtractor={post => String(post._id)}
        renderItem={({ item }) => (
          <FeedItems item={item} />
        )}
      />

    </View>
  );
}
