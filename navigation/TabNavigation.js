import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scan from '../screens/tabs/Scan'
import User from '../screens/tabs/User'
import Statistic from '../screens/tabs/Statistic'
import Menu from '../screens/tabs/Menu'
import Evoucher from '../screens/tabs/Evoucher'

import { Icon, Input } from '@ui-kitten/components';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Menu') {
                        iconName = focused
                            ? 'person-outline'
                            : 'person';
                    } else {
                        iconName = focused ? 'person-outline' : 'person';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Menu" component={Menu} />
            <Tab.Screen name="Evoucher" component={Evoucher} />
            <Tab.Screen name="Scan" component={Scan} />
            <Tab.Screen name="Statistic" component={Statistic} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}