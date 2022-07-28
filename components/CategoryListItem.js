import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity ,Alert} from 'react-native'
import ski from '../assets/ski.png'

export default function CategoryListItem(props) {
    const { title,onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Image style={styles.img} source={ski} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    container: {
        alignItems: 'center',
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1,
        padding: 10,
        marginBottom: 16
    }
})