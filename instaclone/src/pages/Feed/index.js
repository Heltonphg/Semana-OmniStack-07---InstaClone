import Header from '../components/Header'
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import api from '../../services/api';
import io from 'socket.io-client';
import FeedItems from './FeedItems';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      feed: []
    };
  }

  populationFeed = async () => {
    this.setState({refreshing: true})
    const response = await api.get('posts');
    this.setState({feed: response.data});
    this.setState({refreshing: false})
  }

  componentDidMount(){
    this.registerToSocket();
    this.populationFeed()
  }

  //TODO: Metodos que monitoram o sockt.io
  registerToSocket = () => {
    const socket = io('http://10.0.0.101:3333');

    socket.on('post', newPost =>{
      this.setState({feed: [newPost, ... this.state.feed]});
    })

    socket.on('like', likedPost =>{
      this.setState({
        feed: this.state.feed.map(post => post._id === likedPost._id ? likedPost: post)
      })
    })
  }

  handleLike = id => {
    api.post(`posts/${id}/like`)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />

        <FlatList
          onRefresh={()=> this.populationFeed()}
          refreshing={this.state.refreshing}
          data={this.state.feed}
          keyExtractor={post => String(post._id)}
          renderItem={({ item }) => (
            <FeedItems item={item} handleLike = {this.handleLike} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
