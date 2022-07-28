import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from "./screens/Categories";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Categories} />
            <Stack.Screen name="Detail" component={Category} options={({route})=> ({title:route.params.title})}/>
        </Stack.Navigator>
    )
}