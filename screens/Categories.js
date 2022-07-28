import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList,Image } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import { useState, useEffect } from 'react';
import { Buffer } from "buffer";
import AntDesign from "react-native-vector-icons/AntDesign"
import logo from '../assets/logo.png'
export default function Categories({ navigation }) {
    useEffect(() => {
        let a = Buffer.from('Yp9dPZFs8iv9I9by', 'base64').toString('hex')
        console.log(a)
    }, [])
    return (
        <View style={styles.container}>
            <AntDesign name='upcircle'/>
            <Image source={logo} style={{width:100,height:100}}/>
            <FlatList
                data={list}
                renderItem={
                    ({ item }) => (
                        <CategoryListItem
                            title={item.title}
                            onPress={() => navigation.navigate('Detail', {
                                title: item.title
                            })}
                        />
                    )
                }
                keyExtractor={item => `${item.id}`}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
});
const list = [
    {
        id: 1,
        title: 'food',
    },
    {
        id: 2,
        title: 'drink',
    },
    {
        id: 3,
        title: 'setting',
    },
    {
        id: 4,
        title: 'setting',
    },
    {
        id: 5,
        title: 'setting',
    },
    {
        id: 6,
        title: 'setting',
    },
    {
        id: 7,
        title: 'setting',
    },
]