import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CartScreen from "./src/screens/CartScreen"
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator()
export default function App() {
 
  return (
    <NavigationContainer style={styles.container}>
        <Tab.Navigator 
        screenOptions={{
          tabBarLabelPosition:false,
          tabBarActiveTintColor:"#02c3d9"
        }}
        >
          <Tab.Screen
           name='home'
            component={HomeScreen}
            options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
             />
          <Tab.Screen
           name='cart'
            component={CartScreen} 
            options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
            ),
          }}
            />
          <Tab.Screen
           name='profile'
            component={ProfileScreen} 
            options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
            />
          <Tab.Screen
           name='menu'
            component={MenuScreen}
            options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }} />

        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
