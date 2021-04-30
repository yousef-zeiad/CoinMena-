import styled from 'styled-components/native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Colors from '../../Colors';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color:${Colors.secondaryGrey};
  padding-left: 22px;
  padding-right: 22px;

`;
const ProfileImageContaienr = styled.View`
  justifyContent: center;
  alignItems: center;
  paddingTop: 20px;
`;
const BorderRadius = styled.View`
  border-radius: 50px;
  border-width: 2px;
  width: 70px;
  height: 70px;
  border-color: green;
  justify-content: center;
  align-items: center;
`;
const UserImage = styled(FastImage)`
 width: 60px;
 height: 60px;
 border-radius: 50px;
`;
const UserName = styled.Text`
  fontSize: 16px;
  paddingTop: 8px;
  fontWeight: bold
`
export const ProfileImage = () => (
  <ProfileImageContaienr>
    <BorderRadius>
      <UserImage source={require('../../assets/user.jpg')} />
    </BorderRadius>
    <UserName>Mehdi Dehbi</UserName>
  </ProfileImageContaienr>
);

export const CardView = styled.View`
 background-color:${Colors.white};
 marginTop:20px;
 paddingTop:10px;
 paddingBottom:20px;
 width:100%;
 borderRadius:15px
`;
export const StatusTitle = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  paddingLeft: 20px;
  marginTop: 12px;
`;
export const VerifiedTitle = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  paddingLeft: 10px;
  marginTop: 12px;
  color: green
`;
export const StatusWrapper = styled.View`
 flexDirection: row
`;
export const ChangeContactTitle = styled.Text`
  paddingTop: 20px;
  color: ${Colors.gray};
`;
const TabContainer = styled.View`
flexDirection: row;
 justifyContent: space-around;
 paddingTop: 30px;
 alignItems: center;
 paddingBottom: 20px
`;
const TabTitle = styled.Text`
  fontSize: 18px
`;
const Indicator = styled.View`
  position: absolute;
  height: 4px;
  width: 150px; bottom: -10px;
  backgroundColor: ${Colors.primary};
  left: -50px;
`;
export const Tabs = () => (
  <TabContainer>
    <TouchableOpacity>
      <TabTitle>Profile</TabTitle>
      <Indicator />
    </TouchableOpacity>
    <TouchableOpacity>
      <TabTitle>Documents</TabTitle>
    </TouchableOpacity>
  </TabContainer>
)
