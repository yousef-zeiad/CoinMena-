import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components/Header';
import {
  CardView,
  ChangeContactTitle,
  Container,
  ProfileImage,
  StatusTitle,
  StatusWrapper,
  Tabs,
  VerifiedTitle,
} from './styled';

const Status = ['Send& recevie digital assets', 'Trade digital assets', 'Deposit & withdraw money'];
const weeklyLimits = ['Deposit: 15,00.00 AED', 'Withdraw: 15,000.00 AED'];
const contacts = ['mehd@email.com', '+9 987 876 98']
export const Acount: React.FC = () => {

  return (
    <>
      <Header />
      <Container>
        <ProfileImage />
        <Tabs />
        <CardView>
          <StatusWrapper>
            <StatusTitle>Status</StatusTitle>
            <VerifiedTitle>Verfied</VerifiedTitle>
          </StatusWrapper>
          <View style={{ paddingTop: 16, paddingLeft: 20 }}>
            {Status.map(state => <Text style={{ fontSize: 12, flexDirection: 'column', paddingTop: 2 }}>{state}</Text>)}
          </View>
        </CardView>
        <CardView>
          <StatusWrapper>
            <StatusTitle>Weekly limits</StatusTitle>
          </StatusWrapper>
          <View style={{ paddingTop: 16, paddingLeft: 20 }}>
            {weeklyLimits.map(limit => <Text style={{ fontSize: 12, flexDirection: 'column', paddingTop: 2 }}>{limit}</Text>)}
          </View>
        </CardView>
        <CardView>
          <StatusWrapper>
            <StatusTitle>Contacts</StatusTitle>
          </StatusWrapper>
          <View style={{ paddingTop: 16, paddingLeft: 20 }}>
            {contacts.map(contact => <Text style={{ fontSize: 12, flexDirection: 'column', paddingTop: 2 }}>{contact}</Text>)}
          </View>
        </CardView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ChangeContactTitle>Change contacts? Contact support</ChangeContactTitle>
        </View>
      </Container>
    </>
  )
}
