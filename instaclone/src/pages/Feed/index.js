import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import Header from '../components/Header'

export default function Feed(props) {
  const  [feed, setFeed] = useState([]);

  async function populationFeed(){
    const response = await api.get('posts');
    setFeed(response.data);
  }

  useEffect(()=>{
    //registerToSocket();
    populationFeed();
  },[])


  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
     <Header navigation = {props.navigation} />

   </View>
  );
}
