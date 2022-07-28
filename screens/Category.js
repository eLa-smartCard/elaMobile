import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function Category({route,navigation}) {
    const {title} =  route.params
    return (
        <View >
           <Text>{title}</Text>
        </View>
    );
}
