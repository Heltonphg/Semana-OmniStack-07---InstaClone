import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import camera from '../../../assets/camera.png';
import logo from '../../../assets/logo.png';
import send from '../../../assets/send.png';
import igtv from '../../../assets/igtv.png';

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 3 }}>

        <Image style={{ marginLeft: 4, width: 21.5, height: 20 }} source={camera} />

        <Image style={{ marginLeft: 13 }} source={logo} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 3 }}>

        <Image style={{ marginTop: 1, width: 23, height: 29, marginBottom: 8 }} source={igtv} />
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image style={{ marginLeft: 15, marginTop: 10 }} source={send} />
        </TouchableOpacity>

      </View>

    </View>
  );
}
