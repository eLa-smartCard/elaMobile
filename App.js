import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Appnavigator';
export default function App() {
    return (
        <NavigationContainer>

            <AppNavigator />
        </NavigationContainer>
    );
}