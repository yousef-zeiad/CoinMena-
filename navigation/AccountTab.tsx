import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Crypto } from '../views/Crypto/Crypto';
import { Acount } from '../views/Account/Account'

export type CryptoStackParamList = {
  Account: undefined;
  Crypto: undefined;
}
const CryptoStack = createStackNavigator<CryptoStackParamList>();
export const AccountTab = () => (
  <CryptoStack.Navigator
    initialRouteName="Crypto"
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTitleAllowFontScaling: true,
      animationTypeForReplace: 'pop',
      cardStyle: { backgroundColor: 'white' },
    }}>

    <CryptoStack.Screen name="Account"
      component={Acount} />
  </CryptoStack.Navigator>
)
