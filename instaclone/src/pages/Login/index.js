import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Input } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import logol from '../../assets/logol.png';
import Ou from '../../assets/ou.png';

import { colors } from '../../estilos';


export default function Login() {
  const [email, setEmail] = useState('');
  const [passs, setPass] = useState('');
  const [loading, setLoading] = useState('');

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <ScrollView>
        <View style={styles.baselinguage}>
          <Text style={styles.textpadrao}>Portugês (Brasil)</Text>
          <Icon name="ios-arrow-down" size={23} color={colors.darkTransparent} style={{ marginLeft: 5 }} />
        </View>


        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Image source={logol} style={{ width: 230, height: 70, marginTop: 4, marginBottom:8 }} />
        </View>

        <View style={styles.form}>

          <Input
            placeholder="Username"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Password"
            keyboardType="web-search"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={passs}
            onChangeText={setPass}
          />

          <TouchableOpacity onPress={() => { }} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.forgotView}>
            <Text style={styles.forgotText1}>esqueceu seus dados de login?
          <Text style={{ color: '#4682b4' }}> Obtenha ajuda para entrar.</Text></Text>
          </View>

          <View style={styles.loginfacebook}>
            <Icon name="logo-facebook" size={25} color="#4682b4" />
            <Text style={styles.base}>Entrar com o Facebook</Text>
          </View>

          <Image source={Ou} style={{ width: 320, marginTop: 10 }} />

          <View style={styles.basecontent}>
            <Text style={styles.forgotText1}>Não tem um cadastro ? </Text>
            <Text style={styles.base}>Cadastre-se</Text>
          </View>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },

  button: {
    height: 49,
    backgroundColor: colors.blueTransparent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  forgotView: {
    paddingHorizontal: 15,
    marginTop: 5
  },

  loginfacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },

  baselinguage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },

  baseRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  basecontent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  forgotText1: {
    fontSize: 14,
    color: colors.regular
  },

  forgotText2: {
    fontSize: 14,
    color: colors.blueTransparent
  },

  base: {
    fontSize: 15,
    color: '#4682b4',
    marginLeft: 4,
  },

  textpadrao: {
    color: colors.darkTransparent,
    fontSize: 16
  }


});
