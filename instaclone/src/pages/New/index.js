import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

// import { Container } from './styles';

export default function New({navigation}) {
  const [author, setAuthor] = useState('')
  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [hashtags, setHashtags] = useState('')
  const [preview, setPreview] = useState(null)
  const [image, setImage] = useState(null)

  function handleSelectImage() {
    ImagePicker.showImagePicker({
      title: 'Selecioanr Imagem',
    }, upload => {
      if (upload.error) {
        console.log('Error');
      } else if (upload.didCancel) {
        console.log('Cancelado');
      } else {
        //TODO: em base64
        const preview = {
          uri: `data: image/jpeg;base64,${upload.data}`,
        }

        //TODO: quebrando o nome da imagem
        let prefix;
        let ext;
        if (upload.fileName) {
          [prefix, ext] = upload.fileName.split('.');
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        //TODO: objeto da imagem que vai pra api
        const image = {
          //TODO: o lugar onde a foto ta salva
          uri: upload.uri,
          //TODO: tipo da imagem
          type: upload.type,
          //TODO: nome da imagem
          name: `${prefix}.${ext}`
        }
        setImage(image);
        setPreview(preview);
      }
    })
  }

  async function handleSubmit(){
    //TODO: usnado o multFormData
    const data = new FormData();

    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    await api.post('posts', data);

    navigation.navigate('Home');

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectImage()}>
        <Text style={styles.selectButtonText}>Selecionar Imagem</Text>
      </TouchableOpacity>

      {
        preview && <Image style={styles.preview} source={preview} />
      }


      <TextInput
        style={styles.input}
        autoCorrect={true}
        autoCapitalize="none"
        placeholder="Nome do Autor"
        placeholderTextColor="#999"
        value={author}
        onChangeText={author => setAuthor(author)}
      />

      <TextInput
        style={styles.input}
        autoCorrect={true}
        autoCapitalize="none"
        placeholder="Local da foto"
        placeholderTextColor="#999"
        value={place}
        onChangeText={place => setPlace(place)}
      />

      <TextInput
        style={styles.input}
        autoCorrect={true}
        autoCapitalize="none"
        placeholder="Descricao"
        placeholderTextColor="#999"
        value={description}
        onChangeText={desc => setDescription(desc)}
      />

      <TextInput
        style={styles.input}
        autoCorrect={true}
        autoCapitalize="none"
        placeholder="Hashtags"
        placeholderTextColor="#999"
        value={hashtags}
        onChangeText={hash => setHashtags(hash)}
      />


      <TouchableOpacity style={styles.shareButton} onPress={() => handleSubmit()}>
        <Text style={styles.shareButtonText}>Enviar</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },

  shareButton: {
    backgroundColor: '#7159c1',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
});
