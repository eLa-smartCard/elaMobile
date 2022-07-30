import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { useContext } from 'react'
import { AuthContext } from '../../App';
export default function User() {
    const { signOut } = useContext(AuthContext)
    const handleSignOut = () => {
        signOut
    }
    return (
        <View>
            <Text >User</Text>
            <Text onPress={signOut}>Đăng xuất</Text>
        </View>
    )
}