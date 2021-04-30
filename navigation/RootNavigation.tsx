import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { TopTabNavigator, TopTabParamList } from './TopTabNavigator';
import Routes from './Routs';
import { AccountTab } from './AccountTab';

export type RootStackParamList = {
  [Routes.TopTabNavigator]: NavigatorScreenParams<TopTabParamList>;
  [Routes.Account]: NavigatorScreenParams<TopTabParamList>
};


// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Routes.TopTabNavigator}
        component={TopTabNavigator}
        options={{
          title: 'Deposite',
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#03254c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }}
      />
      <RootStack.Screen name={Routes.Account} component={AccountTab} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
