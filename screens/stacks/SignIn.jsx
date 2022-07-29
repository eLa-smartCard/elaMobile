import React, { useState, useEffect,useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Buffer } from "buffer";

// import AntDesign from "react-native-vector-icons/AntDesign"
import logo from '../../assets/logo.png'
import { Icon, Input } from '@ui-kitten/components';

import { ApplicationProvider, Layout, IconRegistry } from '@ui-kitten/components';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../../App';
export default function SignIn({ navigation }) {
    const {signedIn} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignIn = async () => {
        signedIn({
            username: username,
            password: password
        })
        navigation.navigate('Home')
    }

    useEffect(() => {
        let a = Buffer.from('Yp9dPZFs8iv9I9by', 'base64').toString('hex')
        console.log(a)
    }, [])
    return (
        <Layout style={styles.container}>
            <View style={styles.container}>
                {/* <AntDesign name='upcircle'/> */}
                <Image source={logo} style={{ width: 200, height: 100 }} />

                <Input
                    value={email}
                    placeholder='Nhập email...'
                    style={styles.input}
                    accessoryRight={<Icon name='person-outline' />}
                // onChangeText={nextValue => setValue(nextValue)}
                />
                <Input
                    value={email}
                    placeholder='Nhập password...'
                    style={styles.input}
                    accessoryRight={<Icon name='lock-outline' />}
                // onChangeText={nextValue => setValue(nextValue)}
                />
                <Text style={styles.forgotPass}>Quên mật khẩu</Text>
                <Text style={styles.btn} onPress={handleSignIn}>Đăng nhập</Text>

            </View>
        </Layout>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#f3648c',
        color: 'white',
        padding: 8,
        borderRadius: 10,
        fontSize: 15,
        alignItems: 'center',
        marginVertical: 8,
        width: '70%',
        paddingHorizontal: 16,
    },
    input: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1,
        width: '70%',
        marginTop: 8,
        borderRadius: 10,
        padding: 4,
    },
    forgotPass: {
        color: 'blue',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        marginRight: 16,
        marginLeft: 'auto',
        fontSize: 12,
        marginBottom: 10,
    },
})