import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { TextButton } from '../../components/Button';
import ErrorText from '../../components/ErrorText';
import Select from '../../components/Select';
import { TextInputMask, TextValidator } from '../../components/TextValidator';
import { Container } from './styled';

export type DepositTypeProp = {
  busy: boolean;
  onSubmit: (form: any) => void;
}
const PaymentMethod = ['BankAccount', 'CreaditCard']
export const Deposite: React.FC<DepositTypeProp> = (props) => {
  const { control, handleSubmit, errors } = useForm<any>({
    reValidateMode: 'onBlur',
  });
  return (
    <Container>
      <Controller
        render={({ onChange, value }) => (
          <Select
            placeholder={'Payement Method'}
            label={'Payment Method'}
            items={PaymentMethod.map((i) => ({
              id: i,
              name: i,
            }))}
            onChange={(val) => onChange(val.name)}
            value={
              value !== undefined
                ? { id: value, name: value.toString() }
                : undefined
            }
          />
        )}
        control={control}
        name={'Payment Method'}
        rules={{ required: false }}
      />
      <TextInputMask error={errors.email} title={'Bank account Holder Name*'} onPress={() => { }}>
        <TextValidator
          control={control}
          disabled={props.busy}
          error={errors.name !== undefined}
          keyboardType={'default'}
          label="name"
          name={'name'}
          placeholder={'Enter your name'}
          rules={{
            required: true,
          }}
        />
      </TextInputMask>
      <Text>Name should match bank account</Text>
      {errors.name && (
        <ErrorText>
          Enter your name
        </ErrorText>
      )}
      <View style={{ marginTop: 20 }} />
      <TextInputMask error={errors.email} title={'Bank  Name*'} onPress={() => { }}>
        <TextValidator
          control={control}
          disabled={props.busy}
          error={errors.name !== undefined}
          keyboardType={'default'}
          label="Bank_name"
          name={'Bank_name'}
          placeholder={''}
          rules={{
            required: true,
          }}
        />
      </TextInputMask>
      {errors.Bank_name && (
        <ErrorText>
          Enter your Bank_name
        </ErrorText>
      )}
      <TextInputMask error={errors.email} title={'IBAN or Bank account number'} onPress={() => { }}>
        <TextValidator
          control={control}
          disabled={props.busy}
          error={errors.name !== undefined}
          keyboardType={'numeric'}
          label="Bank_Number"
          name={'Bank_Number'}
          placeholder={''}
          rules={{
            required: true,
          }}
        />
      </TextInputMask>
      {errors.Bank_Number && (
        <ErrorText>
          Enter your Bank Number
        </ErrorText>
      )}
      <TextInputMask error={errors.email} title={'SWIFT/BIC Code*'} onPress={() => { }}>
        <TextValidator
          control={control}
          disabled={props.busy}
          error={errors.name !== undefined}
          keyboardType={'numeric'}
          label="SWIFT"
          name={'SWIFT'}
          placeholder={''}
          rules={{
            required: true,
          }}
        />
      </TextInputMask>
      {errors.SWIFT && (
        <ErrorText>
          Enter your SWIFT code
        </ErrorText>
      )}
      <TextButton
        marginTop={50}
        loading={props.busy}
        onPress={handleSubmit(props.onSubmit, (form) =>
          console.log('pressed', form),
        )}
        testID="NextButton"
        accessibilityLabel="Next">
        Next
      </TextButton>
    </Container>

  )
}
