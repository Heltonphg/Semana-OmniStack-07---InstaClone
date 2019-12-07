import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, StatusBar, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import avatar from '../../../assets/es.jpg';
import { colors, fonts, metrics } from '../../../estilos';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class FeedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            images: [{
                url: '',
            }],
        }
        this.setModalVisible = this.setModalVisible.bind(this)
    }


    setModalVisible(visible, imagePath) {
        this.state.images = [{
          url: imagePath,
        }]
        if (visible) {
          StatusBar.setHidden(true);
        }
        if (!visible) {
          StatusBar.setHidden(false);
        }
        this.setState({ modalVisible: visible });
      }


    render() {
        return (
            <View style={styles.feedItem}>

                {/* //TODO: Header */}
                <View style={styles.feedItemHeader}>

                    <View style={styles.userInfoAvatar}>
                        <Image style={styles.avatar} source={avatar} />

                        <View style={styles.userInfo}>
                            <Text style={styles.name}>{this.props.item.author}</Text>
                            <Text style={styles.place}>{this.props.item.place}</Text>
                        </View>

                    </View>

                    <Icon name="more-horiz" size={30} color={colors.black} />
                </View>

                <TouchableOpacity onPress={() => {
                    this.setModalVisible(!this.state.modalVisible, `http://10.0.0.101:3333/files/${this.props.item.image}`);
                }}>

                    {/* //TODO: Foto */}
                    <Image style={styles.feedImage} source={{ uri: `http://10.0.0.101:3333/files/${this.props.item.image}` }} />
                </TouchableOpacity>

            

                {/* //TODO: Footer */}
                <View style={styles.feedItemFooter}>

                    {/* //TODO: Acoes */}
                    <View style={styles.actions}>
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity style={styles.action} onPress={() => this.props.handleLike(this.props.item._id)}>
                                <Image source={like} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.action} onPress={() => { }}>
                                <Image source={comment} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.action} onPress={() => { }}>
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>

                        <Icon style={{ marginTop: -6 }} name="bookmark-border" size={25} color={colors.black} />

                    </View>

                    {/* //TODO: InfoPost */}

                    <Text style={styles.likes}>{this.props.item.likes} curtidas</Text>
                    <Text style={styles.description}>{this.props.item.description}</Text>
                    <Text style={styles.hashtags}>{this.props.item.hashtags} </Text>

                </View>


                <Modal style={styles.modalImage}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <TouchableHighlight style={{ backgroundColor: 'black' }}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Icon active name="close" size={30} style={{ textAlign: 'right', marginRight: 20, marginTop: 10, color: 'white' }} />
                    </TouchableHighlight>
                    <ImageViewer imageUrls={this.state.images} />
                </Modal>



            </View>

        );
    }
}

const styles = StyleSheet.create({
    feedItem: {
        marginTop: metrics.margin + 5,
    },

    feedItemHeader: {
        paddingHorizontal: metrics.padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    name: {
        fontSize: fonts.big,
        color: colors.black,
        marginLeft: 8,
        marginTop: 5
    },

    place: {
        fontSize: fonts.small,
        color: colors.dark,
        marginLeft: 8,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    userInfo: {
        flexDirection: 'column'
    },
    userInfoAvatar: {
        flexDirection: 'row'
    },

    feedImage: {
        width: '100%',
        height: 320,
        marginVertical: metrics.margin
    },

    feedItemFooter: {
        paddingHorizontal: metrics.margin
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        marginRight: 13
    },


    likes: {
        marginTop: metrics.margin - 10,
        fontWeight: 'bold',
        color: colors.dark
    },
    description: {
        lineHeight: 18,
        color: colors.dark
    },
    hashtags: {
        color: '#7159c1',
        paddingBottom: 10
    },

    header: {
        backgroundColor: '#000000',
        color: '#ffffff',
        textAlign: 'center'
    },
    headerTitle: {
        marginTop: 15,
        color: '#ffffff'
    },
    modalImage: {
        bottom: 0,
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: '#000000',
    },

})

