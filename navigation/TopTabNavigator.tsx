import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Deposite } from '../views/Deposit/Deposit'
import { Crypto } from '../views/Crypto/Crypto'
import Colors from '../Colors';

export type TopTabParamList = {
  Fund: undefined;
  Crypto: undefined;
  AccountTab: undefined;
};
const Tab = createMaterialTopTabNavigator<TopTabParamList>();

export const TopTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 14, fontWeight: 'bold' },
      style: { backgroundColor: Colors.primary },
      indicatorStyle: {
        backgroundColor: 'orange',
      }
    }}>
      <Tab.Screen name='Fund' component={Deposite} />
      <Tab.Screen name='Crypto' component={Crypto} />
    </Tab.Navigator>
  )
}
