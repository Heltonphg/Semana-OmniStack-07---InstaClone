import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import avatar from '../../../assets/es.jpg';
import { colors, fonts, metrics } from '../../../estilos';

export default function FeedItems({ item }) {
    return (

        <View style={styles.feedItem}>

            {/* //TODO: Header */}
            <View style={styles.feedItemHeader}>

                <View style={styles.userInfoAvatar}>
                    <Image style={styles.avatar} source={avatar} />

                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{item.author}</Text>
                        <Text style={styles.place}>{item.place}</Text>
                    </View>

                </View>

                <Icon name="more-horiz" size={30} color={colors.black} />
            </View>

            {/* //TODO: Foto */}
            <Image style={styles.feedImage} source={{ uri: `http://10.0.0.101:3333/files/${item.image}` }} />

            {/* //TODO: Footer */}
            <View style={styles.feedItemFooter}>

                {/* //TODO: Acoes */}
                <View style={styles.actions}>
                    <View style ={{flexDirection: 'row'}} >
                        <TouchableOpacity style={styles.action} onPress={() => { }}>
                            <Image source={like} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={() => { }}>
                            <Image source={comment} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={() => { }}>
                            <Image source={send} />
                        </TouchableOpacity>
                    </View>

                    <Icon style={{marginTop:-6}} name = "bookmark-border" size={25} color = {colors.black}/>

                </View>

                {/* //TODO: InfoPost */}

                <Text style={styles.likes}>{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags} </Text>

            </View>


        </View>

    );
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
    }
})
