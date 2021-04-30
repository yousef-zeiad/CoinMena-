import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import Colors from '../Colors';

const HeaderContainer = styled(SafeAreaView)`
  flexDirection: row;
  alignItems: center;
  width: 100%;
  paddingLeft: 20px;
  paddingTop: ${Platform.select({ ios: 20, android: 20 })}px;
  paddingRight: 20px;
  background-color:${Colors.primary}
`;
const HeaderTitle = styled.Text`
  fontSize: 20px;
  fontWeight: bold;
  color: ${Colors.white};
  paddingLeft: 25px;
`;
const CloseButton = styled(FastImage)`
  width: 18px;
  height: 18px;
`;

export const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CloseButton source={require('../assets/close.png')} resizeMode={FastImage.resizeMode.contain} />
      </TouchableOpacity>
      <HeaderTitle>Account</HeaderTitle>
    </HeaderContainer>
  )
}
